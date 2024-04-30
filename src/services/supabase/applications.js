// src/services/supabase/applications.js
import { supabase } from './supabaseClient';

export async function submitMortgageApplication(formData) {
  const { data, error } = await supabase
    .from('mortgage_applications')
    .insert([formData]);

  if (error) throw new Error(error.message);

  return data;
}
