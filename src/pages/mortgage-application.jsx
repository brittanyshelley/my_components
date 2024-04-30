import React, { useState } from 'react';
import { submitMortgageApplication } from '../services/supabase/applications';

function MortgageApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    loanAmount: '',
    propertyAddress: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await submitMortgageApplication(formData);
      console.log('Application submitted:', response);
      // Handle success (e.g., notification to user)
    } catch (error) {
      console.error('Submission error:', error.message);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Full Name"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email Address"
        required
      />
      <input
        type="text"
        name="loanAmount"
        value={formData.loanAmount}
        onChange={handleChange}
        placeholder="Loan Amount"
        required
      />
      <input
        type="text"
        name="propertyAddress"
        value={formData.propertyAddress}
        onChange={handleChange}
        placeholder="Property Address"
        required
      />
      <button type="submit">Submit Application</button>
    </form>
  );
}

export default MortgageApplicationForm;
