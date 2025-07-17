import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ViewCustomer() {
  const navigate = useNavigate();

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8081/er/getAllEnquiry")
      .then(res => setCustomers(res.data))
      .catch(err => console.error(err.message));
  }, []);

  // const checkCibil = (id) => {
  //   axios.get(`http://localhost:8082/getSingle/${id}`)
  //     .then(res => {
  //       const updated = res.data;
  //       const updatedList = customers.map(c =>
  //         c.customerID === updated.customerID ? updated : c
  //       );
  //       setCustomers(updatedList);
  //     })
  //     .catch(err => console.error("Failed to fetch CIBIL:", err.message));
  // };

  return (
    <div className="table-responsive">
      <h4 className="text-center text-primary">Customer Enquiries</h4>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Customer ID</th>
            <th>First Name</th>
            <th>Mobile No.</th>
            <th>Enquiry Status</th>
            <th>CIBIL Score</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(c => (
            <tr key={c.customerID}>
              <td>{c.customerID}</td>
              <td>{c.firstName}</td>
              <td>{c.mobileNo}</td>
              <td>{c.enquiryStatus}</td>
              <td>{c.cibil?.cibilScore ?? "Not Checked"}</td>
 <td>
  <div className="d-flex gap-2">
    <button
      className="btn btn-primary btn-sm"
      onClick={() => window.location.reload()}
    >
      Check CIBIL
    </button>

    {c.enquiryStatus === "Approved" && (
      <button
        className="btn btn-success btn-sm"
        onClick={() => navigate("/dashboard/add")}
      >
        Apply for Loan
      </button>
    )}
  </div>
</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewCustomer;
