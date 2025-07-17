import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function PatchSanction() {
  const [customerId, setCustomerId] = useState('');
  const { register, setValue, getValues } = useForm();

  function fetchData() {
    axios.post('http://localhost:8084/addCustomerData', {
      customerID: parseInt(customerId),
    })
      .then((res) => {
        for (let key in res.data) {
          setValue(key, res.data[key]);
        }
      })
      .catch((error) => {
        console.log('Error:', error.message);
        alert('No data found or error occurred');
      });
  }

  function sendMail() {
    const formData = getValues();
    axios.get(`http://localhost:8084/sendSanctionLetterMail/${customerId}`)
      .then(() => alert('Mail Sent Successfully!'))
      .catch((error) => {
        console.log('Error:', error.message);
        alert('Error occurred while sending Mail');
      });
  }

  function goToGeneratePdf() {
    const formData = getValues();
    axios.put(`http://localhost:8084/generatePdf/${customerId}`, {
      remarks: formData.remarks,
      termsCondition: formData.termsCondition,
      loanRequired: formData.loanRequired,
      modeOfPayment: formData.modeOfPayment,
      interestType: formData.interestType
    })
      .then((res) => {
        for (let key in res.data) {
          setValue(key, res.data[key]);
        }
        alert('PDF Generated Successfully!');
      })
      .catch((error) => {
        console.log('Error:', error.message);
        alert('Error occurred while generating PDF');
      });
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center text-primary mb-4">Patch Customer Details</h2>

      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Customer ID</label>
        <div className="col-sm-4">
          <input
            type="number"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-sm-2">
          <button className="btn btn-primary" onClick={fetchData}>Get Data</button>
        </div>
      </div>

      <form>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Name</label>
            <input type="text" {...register('customerName')} className="form-control" />
          </div>

          <div className="col-md-6 mb-3">
            <label>DOB</label>
            <input type="date" {...register('dateOfBirth')} className="form-control" />
          </div>

          <div className="col-md-4 mb-3">
            <label>Age</label>
            <input type="number" {...register('age')} className="form-control" />
          </div>

          <div className="col-md-4 mb-3">
            <label>Tenure</label>
            <input type="number" {...register('requiredTenure')} className="form-control" />
          </div>

          <div className="col-md-4 mb-3">
            <label>Gender</label>
            <input type="text" {...register('customerGender')} className="form-control" />
          </div>

          <div className="col-md-6 mb-3">
            <label>Email</label>
            <input type="email" {...register('customerEmail')} className="form-control" />
          </div>

          <div className="col-md-6 mb-3">
            <label>Mobile No.</label>
            <input type="number" {...register('customerMobileNumber')} className="form-control" />
          </div>

          <div className="col-md-6 mb-3">
            <label>Alternate No.</label>
            <input type="number" {...register('additionalMobileNumber')} className="form-control" />
          </div>

          <div className="col-md-6 mb-3">
            <label>Amount Paid</label>
            <input type="number" {...register('amountPaidForHome')} className="form-control" />
          </div>

          <div className="col-md-6 mb-3">
            <label>Total Loan</label>
            <input type="number" {...register('totalLoanRequired')} className="form-control" />
          </div>

          <div className="col-md-6 mb-3">
            <label>Loan Status</label>
            <input type="text" {...register('loanStatus')} className="form-control" />
          </div>

          {/* Sanction-related fields */}
          <div className="col-md-6 mb-3">
            <label>Loan Required</label>
            <input type="number" {...register('loanRequired')} className="form-control" />
          </div>

          <div className="col-md-6 mb-3">
            <label>Remarks</label>
            <input type="text" {...register('remarks')} className="form-control" />
          </div>

          <div className="col-md-6 mb-3">
            <label>Terms & Conditions</label>
            <input type="text" {...register('termsCondition')} className="form-control" />
          </div>

          <div className="col-md-6 mb-3">
            <label>Mode of Payment</label>
            <input type="text" {...register('modeOfPayment')} className="form-control" />
          </div>

          <div className="col-md-6 mb-3">
            <label>Interest Type</label>
            <input type="text" {...register('interestType')} className="form-control" />
          </div>
        </div>

        <div className="mt-4 text-center">
          <button type="button" className="btn btn-success me-3" onClick={goToGeneratePdf}>
            Generate Sanction PDF
          </button>
         
        </div>
      </form>
    </div>
  );
}

export default PatchSanction;
