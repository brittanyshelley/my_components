// src/pages/api/submitApplication.js
import { supabase } from '../../utils/supabaseClient';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    if (!req.headers.token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const { user, error } = await supabase.auth.api.getUser(req.headers.token);

    if (error) return res.status(401).json({ error: 'Unauthorized' });

    const { data, insertError } = await supabase
      .from('mortgage_applications')
      .insert([{ ...req.body, userId: user.id }]);

    if (insertError) return res.status(400).json({ error: insertError.message });

    return res.status(200).json(data);
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
