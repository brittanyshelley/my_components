import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'set':
      return { ...state, [action.field]: action.value };
    case 'calculate':
      const monthlyRate = state.interest / 100 / 12;
      const numberOfPayments = state.years * 12;
      const payment = state.principal * (monthlyRate / (1 - Math.pow((1 + monthlyRate), -numberOfPayments)));
      return { ...state, monthlyPayment: payment.toFixed(2) };
    default:
      throw new Error();
  }
}

function MortgageCalculator1() {
  const [state, dispatch] = useReducer(reducer, {
    principal: '',
    interest: '',
    years: '',
    monthlyPayment: null
  });

  const handleChange = (field, value) => {
    dispatch({ type: 'set', field, value });
  };

  const calculateMortgage = () => {
    dispatch({ type: 'calculate' });
  };

  return (
    <div>
      <h1>Mortgage Calculator</h1>
      <input
        type="number"
        placeholder="Principal"
        value={state.principal}
        onChange={e => handleChange('principal', e.target.value)}
      />
      <input
        type="number"
        placeholder="Interest Rate (%)"
        value={state.interest}
        onChange={e => handleChange('interest', e.target.value)}
      />
      <input
        type="number"
        placeholder="Term (years)"
        value={state.years}
        onChange={e => handleChange('years', e.target.value)}
      />
      <button onClick={calculateMortgage}>Calculate</button>
      {state.monthlyPayment && <h2>Monthly Payment: ${state.monthlyPayment}</h2>}
    </div>
  );
}

export default MortgageCalculator1;
