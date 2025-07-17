import React, { useEffect, useState } from 'react';
import axios from 'axios';

function VerifyDocuments() {
  const [customerId, setCustomerId] = useState(null);
  const [customer, setCustomer] = useState(null);
  const [checked, setChecked] = useState({});
  const [showVerify, setShowVerify] = useState(false);

  const documentFields = [
    { label: 'Aadhar Card', key: 'aadharCard' },
    { label: 'Address Proof', key: 'addressProof' },
    { label: 'Bank Cheque', key: 'bankCheque' },
    { label: 'Income Tax', key: 'incomeTax' },
    { label: 'Pan Card', key: 'panCard' },
    { label: 'Photo', key: 'photo' },
    { label: 'Salary Slips', key: 'salarySlips' },
    { label: 'Signature', key: 'signature' }
  ];

  useEffect(() => {
    const id = window.prompt("Enter Customer ID:");
    if (id) {
      setCustomerId(id);
      fetchCustomerData(id);
    }
  }, []);

  const fetchCustomerData = (id) => {
    axios.get(`http://localhost:8081/getFullCustomerData/${id}`)
      .then(res => {
        setCustomer(res.data);
        const checks = {};
        documentFields.forEach(doc => {
          checks[doc.key] = false;
        });
        setChecked(checks);
      })
      .catch(err => console.error("Error fetching customer:", err));
  };

  const handleCheck = (key) => {
    const updated = { ...checked, [key]: !checked[key] };
    setChecked(updated);

    const allSelected = documentFields.every(doc => updated[doc.key]);
    setShowVerify(allSelected);
  };

  const verifyDocuments = () => {
    const confirmation = window.prompt("Type 'Verified' to confirm:");
    if (confirmation === "Verified") {
      axios.put(`http://localhost:8082/verificationStatus/${customerId}`, {
        ...customer,
        loanStatus: "Verified"
      })
        .then(() => alert("Documents verified and status updated successfully!"))
        .catch(err => console.error("Verification error:", err));
    } else {
      alert("Verification cancelled. You must type 'Verified' exactly.");
    }
  };

  if (!customer) return <h5 className="text-center text-warning mt-5">Loading customer data...</h5>;

  return (
    <div className="container mt-4">
      <h4 className="text-center text-primary">Verify Documents for Customer #{customerId}</h4>

      <div className="mb-3">
        <strong>Name:</strong> {customer.customerName}<br />
        <strong>Email:</strong> {customer.customerEmail}<br />
        <strong>Mobile:</strong> {customer.customerMobileNumber}
      </div>

      <div className="row">
        {documentFields.map((doc, idx) => {
          const imgData = customer.allpersonalDocument?.[doc.key];
          if (!imgData) return null;

          const base64 = `data:image/jpeg;base64,${imgData}`;
          return (
            <div key={idx} className="col-md-3 text-center mb-4">
              <img src={base64} alt={doc.label} className="img-thumbnail" style={{ height: 150 }} />
              <div className="form-check mt-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id={doc.key}
                  checked={checked[doc.key]}
                  onChange={() => handleCheck(doc.key)}
                />
                <label className="form-check-label" htmlFor={doc.key}>{doc.label}</label>
              </div>
            </div>
          );
        })}
      </div>

      {showVerify && (
        <div className="text-center">
          <button className="btn btn-success" onClick={verifyDocuments}>Verify Documents</button>
        </div>
      )}
    </div>
  );
}

export default VerifyDocuments;
