import React, { useState } from 'react';

function EmiCalculator() {
  const [amount, setAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [emi, setEmi] = useState(null);

  const calculateEmi = (e) => {
    e.preventDefault();

    const principal = parseFloat(amount);
    const annualRate = parseFloat(interestRate);
    const months = parseInt(tenure);

    if (!principal || !annualRate || !months) {
      alert('Please enter valid values in all fields.');
      return;
    }

    const monthlyRate = annualRate / 12 / 100;
    const emiValue = (
      principal *
      monthlyRate *
      Math.pow(1 + monthlyRate, months)
    ) /
      (Math.pow(1 + monthlyRate, months) - 1);

    setEmi(emiValue.toFixed(2));
  };

  return (
    <div className="container mt-5">
      <h2>EMI Calculator</h2>
      <form onSubmit={calculateEmi} className="mt-4">
        <div className="form-group">
          <label>Loan Amount (₹)</label>
          <input
            type="number"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter loan amount"
            required
          />
        </div>

        <div className="form-group">
          <label>Interest Rate (Annual %)</label>
          <input
            type="number"
            className="form-control"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="Enter annual interest rate"
            required
          />
        </div>

        <div className="form-group">
          <label>Tenure (in months)</label>
          <input
            type="number"
            className="form-control"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
            placeholder="Enter tenure in months"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">Calculate EMI</button>
      </form>

      {emi && (
        <div className="alert alert-info mt-4">
          <h5>Your Monthly EMI: ₹{emi}</h5>
        </div>
      )}
    </div>
  );
}

export default EmiCalculator;

