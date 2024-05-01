// import React, { useState } from 'react';

// const MortgageCalculator = () => {
//   const [loanAmount, setLoanAmount] = useState('');
//   const [interestRate, setInterestRate] = useState('');
//   const [loanTerm, setLoanTerm] = useState('');
//   const [monthlyPayment, setMonthlyPayment] = useState(0);


import React, { useState } from 'react';

const MortgageCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const [errors, setErrors] = useState({
    loanAmount: '',
    interestRate: '',
    loanTerm: ''
  });

  const validateField = (name, value) => {
    if (!value || value <= 0) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: 'Value must be greater than zero.' }));
    } else {
      setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    }
  };

  const handleLoanAmountChange = (e) => {
    setLoanAmount(e.target.value);
    validateField('loanAmount', e.target.value);
  };

  const handleInterestRateChange = (e) => {
    setInterestRate(e.target.value);
    validateField('interestRate', e.target.value);
  };

  const handleLoanTermChange = (e) => {
    setLoanTerm(e.target.value);
    validateField('loanTerm', e.target.value);
  };

  const calculateMonthlyPayment = () => {
    if (errors.loanAmount || errors.interestRate || errors.loanTerm) {
      alert("Please correct the errors before calculating.");
      return;
    }


  // const calculateMonthlyPayment = () => {
    const principal = parseFloat(loanAmount);
    const monthlyInterestRate = parseFloat(interestRate) / 100 / 12;
    const numberOfPayments = parseFloat(loanTerm) * 12;

    const monthlyPayment =
      (principal * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    setMonthlyPayment(monthlyPayment.toFixed(2));
  };

  //   return (
  //     <div>
  //       <h2>Mortgage Calculator</h2>
  //       <div>
  //         <label>Loan Amount ($):</label>
  //         <input
  //           type="number"
  //           value={loanAmount}
  //           onChange={(e) => setLoanAmount(e.target.value)}
  //         />
  //       </div>
  //       <div>
  //         <label>Interest Rate (%):</label>
  //         <input
  //           type="number"
  //           value={interestRate}
  //           onChange={(e) => setInterestRate(e.target.value)}
  //         />
  //       </div>
  //       <div>
  //         <label>Loan Term (years):</label>
  //         <input
  //           type="number"
  //           value={loanTerm}
  //           onChange={(e) => setLoanTerm(e.target.value)}
  //         />
  //       </div>
  //       <button onClick={calculateMonthlyPayment}>Calculate</button>
  //       {monthlyPayment > 0 && (
  //         <div>
  //           <h3>Monthly Payment:</h3>
  //           <p>${monthlyPayment}</p>
  //         </div>
  //       )}
  //     </div>
  //   );
  // };

  // export default MortgageCalculator;

  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto p-5">
      <div className="card-body">
        <h2 className="card-title">Mortgage Calculator</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Loan Amount ($):</span>
          </label>
          <input
            type="number"
            value={loanAmount}
            onChange={handleLoanAmountChange}
            className={`input input-bordered ${errors.loanAmount ? 'input-error' : ''}`}
            min="0.01"
            required
            placeholder="Loan amount"
          />
          {errors.loanAmount && <p className="text-red-500 text-xs">{errors.loanAmount}</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Interest Rate (%):</span>
          </label>
          <input
            type="number"
            value={interestRate}
            onChange={handleInterestRateChange}
            className={`input input-bordered ${errors.interestRate ? 'input-error' : ''}`}
            min="0.01"
            required
            placeholder="Interest Rate"
          />
          {errors.interestRate && <p className="text-red-500 text-xs">{errors.interestRate}</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Loan Term (years):</span>
          </label>
          <input
            type="number"
            value={loanTerm}
            onChange={handleLoanTermChange}
            className={`input input-bordered ${errors.loanTerm ? 'input-error' : ''}`}
            min="1"
            required
            placeholder="Loan Term"
          />
          {errors.loanTerm && <p className="text-red-500 text-xs">{errors.loanTerm}</p>}
        </div>
        <div className="form-control mt-4">
          <button className="btn btn-primary" onClick={calculateMonthlyPayment}>Calculate</button>
        </div>
        {monthlyPayment > 0 && (
          <div className="alert alert-success mt-4">
            <h3 className="alert-title">Monthly Payment:</h3>
            <p>${monthlyPayment}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MortgageCalculator;

//   return (
//     <div className="card w-96 bg-base-100 shadow-xl mx-auto p-5">
//       <div className="card-body">
//         <h2 className="card-title">Mortgage Calculator</h2>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Loan Amount ($):</span>
//           </label>
//           <input
//             type="number"
//             value={loanAmount}
//             onChange={(e) => setLoanAmount(e.target.value)}
//             className="input input-bordered"
//             min="0.01"
//             required
//             placeholder="Loan amount"
//           />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Interest Rate (%):</span>
//           </label>
//           <input
//             type="number"
//             value={interestRate}
//             onChange={(e) => setInterestRate(e.target.value)}
//             className="input input-bordered"
//             min="0.01"
//             required
//             placeholder="Interest Rate"
//           />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Loan Term (years):</span>
//           </label>
//           <input
//             type="number"
//             value={loanTerm}
//             onChange={(e) => setLoanTerm(e.target.value)}
//             className="input input-bordered"
//             min="0.01"
//             required
//             placeholder="Loan Term"
//           />
//         </div>
//         <div className="form-control mt-4">
//           <button className="btn btn-primary" onClick={calculateMonthlyPayment}>Calculate</button>
//         </div>
//         {monthlyPayment > 0 && (
//           <div className="alert alert-success mt-4">
//             <h3 className="alert-title">Monthly Payment:</h3>
//             <p>${monthlyPayment}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MortgageCalculator;


// import React, { useState } from 'react';

// const MortgageCalculator = () => {
//   const [loanAmount, setLoanAmount] = useState('');
//   const [interestRate, setInterestRate] = useState('');
//   const [loanTerm, setLoanTerm] = useState('');
//   const [monthlyPayment, setMonthlyPayment] = useState(0);

//   const calculateMonthlyPayment = () => {
//     // Check if any of the fields are empty
//     if (!loanAmount || !interestRate || !loanTerm) {
//       alert("Please fill in all fields.");
//       return;
//     }
//     // Check if any of the fields have invalid (negative or zero) values
//     if (parseFloat(loanAmount) <= 0 || parseFloat(interestRate) <= 0 || parseFloat(loanTerm) <= 0) {
//       alert("All values must be greater than zero.");
//       return;
//     }

//     const principal = parseFloat(loanAmount);
//     const monthlyInterestRate = parseFloat(interestRate) / 100 / 12;
//     const numberOfPayments = parseFloat(loanTerm) * 12;

//     const monthlyPaymentCalc =
//       (principal * monthlyInterestRate) /
//       (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

//     setMonthlyPayment(monthlyPaymentCalc.toFixed(2));
//   };

//   return (
//     <div className="card w-96 bg-base-100 shadow-xl mx-auto p-5">
//       <div className="card-body">
//         <h2 className="card-title">Mortgage Calculator</h2>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Loan Amount ($):</span>
//           </label>
//           <input
//             type="number"
//             min="0.01"
//             step="0.01"
//             value={loanAmount}
//             onChange={(e) => setLoanAmount(e.target.value)}
//             className="input input-bordered"
//             required
//           />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Interest Rate (%):</span>
//           </label>
//           <input
//             type="number"
//             min="0.1"
//             step="0.1"
//             value={interestRate}
//             onChange={(e) => setInterestRate(e.target.value)}
//             className="input input-bordered"
//             required
//           />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Loan Term (years):</span>
//           </label>
//           <input
//             type="number"
//             min="1"
//             value={loanTerm}
//             onChange={(e) => setLoanTerm(e.target.value)}
//             className="input input-bordered"
//             required
//           />
//         </div>
//         <div className="form-control mt-4">
//           <button className="btn btn-primary" onClick={calculateMonthlyPayment}>Calculate</button>
//         </div>
//         {monthlyPayment > 0 && (
//           <div className="alert alert-success mt-4">
//             <h3 className="alert-title">Monthly Payment:</h3>
//             <p>${monthlyPayment}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MortgageCalculator;
