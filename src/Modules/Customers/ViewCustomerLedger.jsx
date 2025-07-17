import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewCustomerLedger() {
  const [ledgers, setLedgers] = useState([]);
  const [error, setError] = useState('');
  const [customerID, setCustomerID] = useState(null);

  useEffect(() => {
    const id = window.prompt("Enter Customer ID:");
    if (id) {
      setCustomerID(id);
      fetchLedgerData(id);
    } else {
      setError("Customer ID is required.");
    }
  }, []);

  const fetchLedgerData = (id) => {
    axios
      .get(`http://localhost:8085/getLedgersDetailsByCustomerId/${id}`)
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setLedgers(res.data);
          setError(""); // Clear any previous error
        } else {
          console.warn("No ledger found, creating...");
          createLedger(id);
        }
      })
      .catch((err) => {
        console.error("Ledger fetch error:", err.message);
        if (err.response?.status === 404) {
          createLedger(id); // Attempt to create ledger if not found
        } else {
          setError("Error while fetching ledger data.");
        }
      });
  };

  const createLedger = (id) => {
    axios
      .post(`http://localhost:8085/addLedger/${id}`, {}) // Empty body if backend allows
      .then((res) => {
        console.log("Ledger created:", res.data);
        setError(""); // Clear error if successful
        fetchLedgerData(id); // Re-fetch updated data
      })
      .catch((err) => {
        console.error("Failed to create ledger:", err.message);
        setError("Ledger could not be created.");
      });
  };

  const handlePayEmi = () => {
    const amountPaid = window.prompt("Enter the EMI amount to pay:");
    if (!amountPaid || isNaN(amountPaid) || parseFloat(amountPaid) <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    axios
      .put(`http://localhost:8085/paybuttonLedger/${customerID}`, null, {
        params: { amountPaid: amountPaid },
      })
      .then((res) => {
        alert("Payment successful and ledger updated.");
        fetchLedgerData(customerID);
      })
      .catch((err) => {
        console.error(err);
        alert("Payment failed. " + (err.response?.data?.message || ""));
      });
  };

  return (
    <div className="container mt-4">
      <h4 className="text-center text-primary">Customer Ledger Details</h4>

      {ledgers.length === 0 && error && (
        <h5 className="text-danger text-center">{error}</h5>
      )}

      {ledgers.length > 0 && (
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Ledger Id</th>
                <th>Amount Paid till Date</th>
                <th>Current Month EMI Status</th>
                <th>Default Count</th>
                <th>Created Date</th>
                <th>Loan Status</th>
                <th>Loan End Date</th>
                <th>Monthly EMI</th>
                <th>Next EMI End</th>
                <th>Next EMI Start</th>
                <th>Payable Amount</th>
                <th>Previous EMI Status</th>
                <th>Remaining Amount</th>
                <th>Tenure</th>
                <th>Total Loan Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {ledgers.map((ledger, index) => (
                <tr key={index}>
                  <td>{ledger.ledgerId}</td>
                  <td>{ledger.amountPaidtillDate}</td>
                  <td>{ledger.currentMonthEmiStatus}</td>
                  <td>{ledger.defaultCount}</td>
                  <td>{new Date(ledger.ledgerCreatedDate).toLocaleDateString()}</td>
                  <td>{ledger.ledgerLoanStatus}</td>
                  <td>{new Date(ledger.loanEndDate).toLocaleDateString()}</td>
                  <td>{ledger.monthlyEMI}</td>
                  <td>{new Date(ledger.nextEmiDateEnd).toLocaleDateString()}</td>
                  <td>{new Date(ledger.nextEmiDateStart).toLocaleDateString()}</td>
                  <td>{ledger.payableAmountWithInterest}</td>
                  <td>{ledger.previousEmiStatus}</td>
                  <td>{ledger.remainingAmount}</td>
                  <td>{ledger.tenure}</td>
                  <td>{ledger.totalLoanAmount}</td>
                  <td>
                    {ledger.ledgerLoanStatus === "Open" && (
                      <button
                        className="btn btn-success btn-sm"
                        onClick={handlePayEmi}
                      >
                        Pay EMI
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
export default ViewCustomerLedger