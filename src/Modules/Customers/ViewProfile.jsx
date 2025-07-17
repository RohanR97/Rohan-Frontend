import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewProfile() {
  const [customers, setCustomer] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const inputID = window.prompt("Enter Customer ID:");
    
    axios
      .get(`http://localhost:8087/getcusdata/${inputID}`)
      .then((res) => {
        setCustomer([res.data]); // wrap in array for .map()
      })
      .catch((err) => {
        console.log(err.message);
        setError("Customer not found or server error.");
      });
  }, []);

  return (
    <div className="container mt-4">
      <h4 className="text-center text-primary">Customer's Data</h4>
      
      {error && <h5 className="text-danger text-center">{error}</h5>}

      {customers.length > 0 && (
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Customer Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Date of Birth</th>
                <th>Mobile Number</th>
                <th>E-mail</th>
                <th>Total Loan Required</th>
                <th>Required Tenure</th>
                <th>Loan Status</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c) => (
                <tr key={c.customerID}>
                  <td>{c.customerID}</td>
                  <td>{c.customerName}</td>
                  <td>{c.age}</td>
                  <td>{c.customerGender}</td>
                  <td>{c.dateOfBirth}</td>
                  <td>{c.customerMobileNumber}</td>
                  <td>{c.customerEmail}</td>
                  <td>{c.totalLoanRequired}</td>
                  <td>{c.requiredTenure}</td>
                  <td>{c.loanStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ViewProfile;
