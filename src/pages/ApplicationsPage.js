// pages/applications.js
import React from 'react';
import { getApplications } from '../services/supabase/applications';

export default function ApplicationsPage({ applications }) {
  return (
    <div>
      <h1>Applications</h1>
      {applications.map(app => (
        <div key={app.id}>
          <h2>{app.property_address}</h2>
          <p>Status: {app.status}</p>
          <p>Loan Amount: {app.loan_amount}</p>
          <p>Created: {app.created_at}</p>
          <p>Status: {app.status}</p>

          {/* Additional details */}
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const applications = await getApplications();
  return {
    props: {
      applications
    },
  };
}
