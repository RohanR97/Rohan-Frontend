import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ViewSingle() {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const inputID = window.prompt("Enter Customer ID:");
    if (inputID) {
      axios
        .get(`http://localhost:8081/er/getSingle/${inputID}`)
        .then(res => setCustomers([res.data])) // Wrap in array for map()
        .catch(err => {
          console.error(err.message);
          alert("Customer not found or error occurred.");
        });
    }
  }, []);

  return (
    <div className="table-responsive mt-4">
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
          {customers.length === 0 && (
            <tr>
              <td colSpan="6" className="text-center text-danger">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ViewSingle;
