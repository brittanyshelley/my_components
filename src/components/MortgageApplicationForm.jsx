import React, { useState } from 'react';
import { supabase } from '../services/supabase/supabaseClient';

function MortgageApplicationForm() {
  const [formData, setFormData] = useState({
    applicant_name: '',
    email: '',
    loan_amount: '',
    property_address: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from('mortgage_applications')
      .insert([formData]);
    if (error) {
      alert('Submission error: ' + error.message);
    } else {
      alert('Application submitted successfully!');
      setFormData({
        applicant_name: '',
        email: '',
        loan_amount: '',
        property_address: ''
      });
    }
  };

  //   return (
  //     <form onSubmit={handleSubmit}>
  //       <input type="text" name="applicant_name" value={formData.applicant_name} onChange={handleChange} placeholder="Applicant Name" required />
  //       <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required />
  //       <input type="text" name="loan_amount" value={formData.loan_amount} onChange={handleChange} placeholder="Loan Amount" required />
  //       <input type="text" name="property_address" value={formData.property_address} onChange={handleChange} placeholder="Property Address" required />
  //       <button type="submit">Submit Application</button>
  //     </form>
  //   );
  // }

  // export default MortgageApplicationForm;


  return (
    <form onSubmit={handleSubmit} className="card bg-base-100 shadow-xl p-5">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Applicant Name:</span>
        </label>
        <input
          type="text"
          name="applicant_name"
          value={formData.applicant_name}
          onChange={handleChange}
          placeholder="Applicant Name"
          required
          className="input input-bordered"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email Address:</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
          className="input input-bordered"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Loan Amount ($):</span>
        </label>
        <input
          type="text"
          name="loan_amount"
          value={formData.loan_amount}
          onChange={handleChange}
          placeholder="Loan Amount"
          required
          className="input input-bordered"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Property Address:</span>
        </label>
        <input
          type="text"
          name="property_address"
          value={formData.property_address}
          onChange={handleChange}
          placeholder="Property Address"
          required
          className="input input-bordered"
        />
      </div>
      <div className="form-control mt-6">
        <button type="submit" className="btn btn-primary">Submit Application</button>
      </div>
    </form>
  );
}

export default MortgageApplicationForm;