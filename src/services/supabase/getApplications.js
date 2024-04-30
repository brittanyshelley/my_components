// services/supabase/applications.js
import { supabase } from './supabaseClient';

export async function getApplications() {
  const { data, error } = await supabase
    .from('applications')
    .select(`
      id,
      status,
      loan_amount,
      property_address,
      created_at,
      applicant:applicants (first_name, last_name, email, phone_number)
    `);

  if (error) {
    throw new Error(error.message);
  }
  return data;
}
