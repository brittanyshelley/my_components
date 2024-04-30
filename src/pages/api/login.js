// pages/api/login.js
import supabase from '../../utils/supabaseClient';

export default async function handler(req, res) {
  const { email, password } = req.body;

  let { user, session, error } = await supabase.auth.signIn({
    email,
    password,
  });

  if (error) return res.status(401).json({ error: error.message });
  return res.status(200).json({ user, session });
}
