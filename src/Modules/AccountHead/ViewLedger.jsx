import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';


function ViewLedger() {
     const[customers,setCustomer]=useState([]);

 

    function getAllLedgerData()
  {
     axios.get("http://localhost:8085/getLedgerData")
        .then(res=>{
            setCustomer(res.data);
        })
        .catch(error=>console.log(error.message))
  }

useEffect(getAllLedgerData,[])


  return (
    <div>
       <div>
      <div className="table-responsive">
      <h4 className="text-center text-primary">Ledger Data</h4>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Ledger Id</th>
            <th>Amount Paid till Date</th>
            <th>Current Month Emi Status</th>
            <th>Default Count</th>
            <th> Created Date</th>
            <th>Loan Status</th>
            <th>Loan End Date</th>
            <th>Monthly Emi</th>
            <th>Next Emi Date End</th>
            <th>Next Emi Date Start</th>
            <th>Payable Amount With Interest</th>
           <th>Previous Emi Status</th>
           <th>Remaining Amount</th>
           <th>Tenure</th>
           <th>Total Loan Amount</th>
           
          </tr>
        </thead>
        <tbody>
          {customers.map(c => (
            <tr key={c.ledgerId}>
                <td>{c.ledgerId}</td>
                <td>{c.amountPaidtillDate}</td>
              <td>{c.currentMonthEmiStatus}</td>
              <td>{c.defaultCount}</td>
              <td>{c.ledgerCreatedDate}</td>
              <td>{c.ledgerLoanStatus}</td>
              <td>{c.loanEndDate}</td>
              <td>{c.monthlyEMI}</td>
              <td>{c.nextEmiDateEnd}</td>
              <td>{c.nextEmiDateStart}</td>
              <td>{c.payableAmountWithInterest}</td>
              <td>{c.previousEmiStatus}</td>
              <td>{c.remainingAmount}</td>
              <td>{c.tenure}</td>
              <td>{c.totalLoanAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
  )
}

export default ViewLedger
