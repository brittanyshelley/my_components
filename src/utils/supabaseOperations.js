import { supabase } from './supabaseClient';

async function createApplication(applicantDetails, loanDetails) {
  const { data: applicant, error: applicantError } = await supabase
    .from('applicants')
    .insert([applicantDetails]);

  if (applicantError) throw new Error(applicantError.message);

  const applicationDetails = {
    applicant_id: applicant[0].id,
    ...loanDetails
  };

  const { data: application, error: applicationError } = await supabase
    .from('applications')
    .insert([applicationDetails]);

  if (applicationError) throw new Error(applicationError.message);

  return application;
}

export { createApplication };
