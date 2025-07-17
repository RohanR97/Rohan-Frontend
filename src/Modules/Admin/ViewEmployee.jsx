import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';

function ViewEmployee() {

     const [customer, setCustomer] = useState([]);

  function getAllEmployee()
  {
     axios.get("http://localhost:8086/getAllEmpData")
        .then(res=>{
            setCustomer(res.data);
        })
        .catch(error=>console.log(error.message))
  }

useEffect(getAllEmployee,[]);
  return (
    <div className="table-responsive">

        <h4 className="text-center text-primary mb-3">Employee Data</h4>
      <table className="table table-bordered table-striped">
        <thead  className="table-dark">
            <tr>
                <th> Id</th>
                <th> Age</th>
                <th> E-mail</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Salary</th>
                <th>Date of Birth</th>
                <th>User Type</th>
                <th>Username</th>
                 <th>Password</th>
                <th>Emp Image</th>
                <th>Emp Pancard</th>
            </tr>
        </thead>

       <tbody>
  {
    customer.map((customer, i) => (
      <tr key={i}>
        <td>{customer.empId}</td>
        <td>{customer.empAge}</td>
        <td>{customer.empEmail}</td>
        <td>{customer.empFirstName}</td>
        <td>{customer.empLastName}</td>
        <td>{customer.empSalary}</td>
        <td>{customer.dateOfBirth}</td>
        <td>{customer.userType}</td>
        <td>{customer.username}</td>
        <td>{customer.password}</td>

         <td>
  <a
    href={`http://localhost:8086/image/${customer.empId}`}
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-sm btn-success"
  >
    View Image
  </a>
</td>


 <td>
  <a
    href={`http://localhost:8086/pancard/${customer.empId}`}
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-sm btn-success"
  >
    View Pancard
  </a>
</td>


       
       
      </tr>
    ))
  }
</tbody>

      </table>
    </div>
  )
}

export default ViewEmployee
