import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ViewAcceptedData() {

    const[customers,setCustomer]=useState([]);

    const navigate=useNavigate();

      function getAllPending()
  {
     axios.get("http://localhost:8085/getsanctiondata")
        .then(res=>{
            setCustomer(res.data);
        })
        .catch(error=>console.log(error.message))
  }

useEffect(getAllPending,[])

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
            <th>Loan Tenure(in months)</th>
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
          {customers.map(c => (
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
    href={`http://localhost:8085/pdf/${c.sanctionId}`}
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
    className="btn btn-sm btn-primary"
   onClick={() => navigate(`/dashboard/loandisbursement/${c.sanctionId}`)}

  >
    Loan Disburse
  </button>
</td>
              
              
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default ViewAcceptedData
