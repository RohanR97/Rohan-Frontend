import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ViewSanctionData() {
  const [customers, setCustomer] = useState([]);
  const navigate = useNavigate();

  // Fetch all sanction data
  function getAllSanctionData() {
    axios
      .get("http://localhost:8084/getsanctiondata")
      .then((res) => {
        setCustomer(res.data);
      })
      .catch((error) => console.log(error.message));
  }

  useEffect(getAllSanctionData, []);

  // Show prompt for Customer ID before sending mail
  function sendMail() {
    const customerId = window.prompt("Enter Customer ID to send the sanction letter mail:");

    if (!customerId) {
      alert("Customer ID is required.");
      return;
    }

    axios
      .get(`http://localhost:8084/sendSanctionLetterMail/${customerId}`)
      .then((res) => {
        alert(`Mail sent successfully to Customer ID: ${customerId}`);
        getAllSanctionData(); // Refresh data
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to send mail.");
      });
  }

  return (
    <div>
      <div className="table-responsive">
        <h4 className="text-center text-primary">Customer's Accepted Data</h4>
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Sanction Id</th>
              <th>Applicant Name</th>
              <th>Conatct Details</th>
              <th>Interest Type</th>
              <th>Loan Amount Sanctioned</th>
              <th>Loan Required</th>
              <th>Loan Tenure (in months)</th>
              <th>Mode Of Payment</th>
              <th>Monthly EMI</th>
              <th>Rate of Interest</th>
              <th>Remarks</th>
              <th>Sanction Date</th>
              <th>Sanction Letter</th>
              <th>Status</th>
              <th>Terms and Condition</th>
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
                  {c.status?.trim().toUpperCase() === 'CREATED' ? (
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => sendMail()}
                    >
                      Send Mail
                    </button>
                  ) : (
                    <span className="text-muted">Already Sent</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewSanctionData;
