// import React, { useState } from 'react';
// import { useForm } from'react-hook-form';

// const MortgageAffordabilityCalculator = () => {
//   const [homePrice, setHomePrice] = useState('');
//   const [downPayment, setDownPayment] = useState('');
//   const [interestRate, setInterestRate] = useState('');
//   const [loanTerm, setLoanTerm] = useState('');
//   const [monthlyIncome, setMonthlyIncome] = useState('');

//   const calculateMortgage = () => {
//     const principal = homePrice - downPayment;
//     const monthlyInterest = interestRate / 100 / 12;
//     const numberOfPayments = loanTerm * 12;
//     const monthlyPayment = principal * monthlyInterest / (1 - Math.pow(1 + monthlyInterest, -numberOfPayments));
//     return monthlyPayment.toFixed(2);
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <div className="form-control">
//         <label className="label">
//           <span className="label-text">Home Price ($)</span>
//         </label>
//         <input type="number" placeholder="Home Price" className="input input-bordered"
//           value={homePrice} onChange={(e) => setHomePrice(parseFloat(e.target.value))} />
//       </div>

//       <div className="form-control">
//         <label className="label">
//           <span className="label-text">Down Payment ($)</span>
//         </label>
//         <input type="number" placeholder="Down Payment" className="input input-bordered"
//           value={downPayment} onChange={(e) => setDownPayment(parseFloat(e.target.value))} />
//       </div>

//       <div className="form-control">
//         <label className="label">
//           <span className="label-text">Interest Rate (%)</span>
//         </label>
//         <input type="number" step="0.01" placeholder="Interest Rate" className="input input-bordered"
//           value={interestRate} onChange={(e) => setInterestRate(parseFloat(e.target.value))} />
//       </div>

//       <div className="form-control">
//         <label className="label">
//           <span className="label-text">Loan Term (years)</span>
//         </label>
//         <input type="number" placeholder="Loan Term" className="input input-bordered"
//           value={loanTerm} onChange={(e) => setLoanTerm(parseInt(e.target.value, 10))} />
//       </div>

//       <div className="form-control mt-4">
//         <button className="btn btn-primary" onClick={() => alert(`Monthly Payment: $${calculateMortgage()}`)}>
//           Calculate
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MortgageAffordabilityCalculator;


import React, { useState } from 'react';

const MortgageAffordabilityCalculator = () => {
  const [homePrice, setHomePrice] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');

  const calculateMortgage = () => {
    const principal = parseFloat(homePrice) - parseFloat(downPayment);
    const monthlyInterest = parseFloat(interestRate) / 100 / 12;
    const numberOfPayments = parseInt(loanTerm, 10) * 12;

    // Basic validation to prevent calculation errors
    if (isNaN(principal) || isNaN(monthlyInterest) || isNaN(numberOfPayments) || monthlyInterest === 0 || numberOfPayments === 0) {
      return "Invalid input";
    }

    const monthlyPayment = principal * monthlyInterest / (1 - Math.pow(1 + monthlyInterest, -numberOfPayments));
    return monthlyPayment.toFixed(2);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Home Price ($)</span>
        </label>
        <input type="text" placeholder="Home Price" className="input input-bordered"
          value={homePrice} onChange={(e) => setHomePrice(e.target.value)} />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Down Payment ($)</span>
        </label>
        <input type="number" placeholder="Down Payment" className="input input-bordered"
          value={downPayment} onChange={(e) => setDownPayment(e.target.value)} />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Interest Rate (%)</span>
        </label>
        <input type="text" step="0.01" placeholder="Interest Rate" className="input input-bordered"
          value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Loan Term (years)</span>
        </label>
        <input type="text" placeholder="Loan Term" className="input input-bordered"
          value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} />
      </div>

      <div className="form-control mt-4">
        <button className="btn btn-primary" onClick={() => alert(`Monthly Payment: $${calculateMortgage()}`)}>
          Calculate
        </button>
      </div>
    </div>
  );
};

export default MortgageAffordabilityCalculator;
