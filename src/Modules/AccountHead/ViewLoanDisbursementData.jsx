import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

function ViewLoanDisbursementData() {
     const[customers,setCustomer]=useState([]);

    const navigate=useNavigate();

    function getAllLoanDisbursementData()
  {
     axios.get("http://localhost:8085/getLoanDisData")
        .then(res=>{
            setCustomer(res.data);
        })
        .catch(error=>console.log(error.message))
  }

useEffect(getAllLoanDisbursementData,[])


function handleDisburse() {
  const enteredId = window.prompt("Please enter the Customer ID to disburse:");

  if (!enteredId) {
    alert("Disbursement cancelled.");
    return;
  }

  axios
    .put(`http://localhost:8085/paybutton/${enteredId}`)
    .then(() => {
      alert(`Loan successfully disbursed for Customer ID: ${enteredId}`);
      getAllLoanDisbursementData(); // Refresh table
    })
    .catch((err) => {
      console.error("Error disbursing amount:", err);
      alert("Failed to disburse loan.");
    });
}

  return (
    <div>
      <div className="table-responsive">
      <h4 className="text-center text-primary">Loan Disbursement Data</h4>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Agreement Id</th>
            <th>Account Number</th>
            <th>Account type</th>
            <th>Agreement Date</th>
            <th>Amount Paid Date</th>
            <th>Amount Pay type</th>
            <th>Bank Name</th>
            <th>IFSC Code</th>
            <th>Payment Status</th>
            <th>Total Amount</th>
            <th>Transfer Amount</th>
           <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(c => (
            <tr key={c.agreementId}>
                <td>{c.agreementId}</td>
              <td>{c.accountNumber}</td>
              <td>{c.accountType}</td>
              <td>{c.agreementDate}</td>
              <td>{c.amountPaidDate}</td>
              <td>{c.amountPayType}</td>
              <td>{c.bankName}</td>
              <td>{c.ifscCode}</td>
              <td>{c.paymentStatus}</td>
              <td>{c.totalAmount}</td>
              <td>{c.transferAmount}</td>
              
              <td>
  <button
  className="btn btn-sm btn-success"
  onClick={handleDisburse}
>
  Disburse Amount
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

export default ViewLoanDisbursementData
