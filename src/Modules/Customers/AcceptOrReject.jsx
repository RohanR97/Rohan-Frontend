import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AcceptOrReject() {
  const [customers, setCustomer] = useState([]);
  const [customerID, setCustomerID] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const inputID = window.prompt("Enter Customer ID:");
    if (inputID) {
      setCustomerID(inputID);
      axios
        .get(`http://localhost:8084/getsanctionbycustomerid/${inputID}`)
        .then((res) => {
          setCustomer([res.data]); // Wrap in array for mapping
        })
        .catch((err) => {
          console.log(err.message);
          setError("Customer not found or server error.");
        });
    } else {
      setError("Customer ID was not provided.");
    }
  }, []);

  const handleStatusUpdate = (customerID, action) => {
    const confirmation = window.prompt(`Type '${action}' to confirm:`);

    if (confirmation === action) {
      axios
        .put(`http://localhost:8084/updateSanctionstatus/${customerID}`, {
          sanctionLetter: { status: action }
        })
        .then((res) => {
          alert(`${action} status updated successfully.`);
          // Optionally refresh data or update UI
        })
        .catch((err) => {
          console.log(err.message);
          alert("Status update failed.");
        });
    } else {
      alert("Status not updated. Confirmation did not match.");
    }
  };

  return (
    <div className="container mt-4">
      <div className="table-responsive">
        <h4 className="text-center text-primary">Customer's Sanction Letter</h4>
        {error && <h5 className="text-danger text-center">{error}</h5>}
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Sanction Id</th>
              <th>Applicant Name</th>
              <th>Contact Details</th>
              <th>Interest Type</th>
              <th>Loan Amount Sanctioned</th>
              <th>Loan Required</th>
              <th>Loan Tenure (Months)</th>
              <th>Mode Of Payment</th>
              <th>Monthly EMI</th>
              <th>Rate of Interest</th>
              <th>Remarks</th>
              <th>Sanction Date</th>
              <th>Sanction Letter</th>
              <th>Status</th>
              <th>Terms & Conditions</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.sanctionId}>
                <td>{c.sanctionId}</td>
                <td>{c.applicantName}</td>
                <td>{c.contactDetails}</td>
                <td>{c.interestType}</td>
                <td>{c.loanAmountSanctioned}</td>
                <td>{c.loanRequired}</td>
                <td>{c.loanTenureInMonths}</td>
                <td>{c.modeOfPayment}</td>
                <td>{c.monthlyEmiAmount}</td>
                <td>{c.rateOfInterest}</td>
                <td>{c.remarks}</td>
                <td>{c.sanctionDate}</td>
                <td>
                  <a
                    href={`http://localhost:8084/pdf/${c.sanctionId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-success"
                  >
                    View PDF
                  </a>
                </td>
                <td>{c.status}</td>
                <td>{c.termsCondition}</td>
                <td>
                  <button
                    className="btn btn-success btn-sm me-2"
                    onClick={() => handleStatusUpdate(customerID, "Accepted")}
                  >
                    Accept
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleStatusUpdate(customerID, "Rejected")}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AcceptOrReject;
