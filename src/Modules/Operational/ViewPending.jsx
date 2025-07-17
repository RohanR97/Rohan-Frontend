import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

function ViewPending() {
   const [customer, setCustomer] = useState([]);

  function getAllPending()
  {
     axios.get("http://localhost:8081/er/getPendingData")
        .then(res=>{
            setCustomer(res.data);
        })
        .catch(error=>console.log(error.message))
  }

useEffect(getAllPending,[]);
 
 const checkCibil = (customerID) => {
  axios.get(`http://localhost:8082/getSingle/${customerID}`)
    .then((response) => {
      const updatedCustomer = response.data;

      // Create a new customer list with updated cibilScore
      const updatedList = customer.map((cust) => {
        if (cust.customerID === updatedCustomer.customerID) {
          cust.cibil = updatedCustomer.cibil;

        }
        return cust;
      });

      setCustomer(updatedList);
      alert("CIBIL generated successfully!");
    })
    .catch((error) => {
      alert("Failed to generate CIBIL");
      console.error(error.message);
    });
};

  
  return (
     <div className="table-responsive">

        <h4 className="text-center text-primary mb-3">Pending Enquiries</h4>
      <table className="table table-bordered table-striped">
        <thead  className="table-dark">
            <tr>
                <th>Customer Id</th>
                <th>Age</th>
                <th>E-Mail</th>
                <th>Enquiry Status</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Mobile No.</th>
                <th>Pan Card No</th>
                 <th>CIBIL ID</th>
                <th>Action</th>
            </tr>
        </thead>

       <tbody>
  {
    customer.map((customer, i) => (
      <tr key={i}>
        <td>{customer.customerID}</td>
        <td>{customer.age}</td>
        <td>{customer.email}</td>
        <td>{customer.enquiryStatus}</td>
        <td>{customer.firstName}</td>
        <td>{customer.lastName}</td>
        <td>{customer.mobileNo}</td>
        <td>{customer.panCardNo}</td>
<td>{customer.cibil?.cibilId || "Not Generated"}</td>

       
       
        <td>
          <button
            className="btn btn-sm btn-primary"
            onClick={() => checkCibil(customer.customerID)}
          >
            Check CIBIL
          </button>
        </td>
      </tr>
    ))
  }
</tbody>

      </table>
    </div>
  )
}

export default ViewPending
