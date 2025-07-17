import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoanDisbursement() {
  const navigate = useNavigate();

  const [customerId, setCustomerId] = useState('');
  const [transferAmount, setTransferAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!customerId || !transferAmount) {
      setMessage("Please fill all fields.");
      return;
    }

    const payload = {
      transferAmount: transferAmount,
    };

    axios.post(`http://localhost:8085/addLoanDisData/${customerId}`, payload)
      .then(() => {
        alert("Loan Data set Successfully!");
        navigate("/dashboard/viewaccepted");
      })
      .catch((err) => {
        console.error("Loan disbursement failed:", err);
        setMessage("Loan disbursement failed.");
      });
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center text-primary">Loan Disbursement</h3>

      <form onSubmit={handleSubmit} className="p-4 border shadow rounded">
        <div className="mb-3">
          <label className="form-label">Customer ID</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter Customer ID"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Transfer Amount</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter Transfer Amount"
            value={transferAmount}
            onChange={(e) => setTransferAmount(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-success w-100">
          Add
        </button>

        
      </form>
    </div>
  );
}

export default LoanDisbursement;
