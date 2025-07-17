import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { FormContext } from '../FormContext';

function GuarantorDetails() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const { formData, setFormData } = useContext(FormContext);
  const navigate = useNavigate();

  function saveData(data) {
    setFormData({
      ...formData,
      guarantordetails: data
    });
    navigate("/dashboard/file");
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary mb-4">Guarantor Details</h2>

      <form onSubmit={handleSubmit(saveData)} className="row g-3">

        <div className="col-md-6">
          <label className="form-label fw-bold">Guarantor Name</label>
          <input type="text" className="form-control" {...register("guarantorName", { required: true })} />
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold">Guarantor Date Of Birth</label>
          <input type="date" className="form-control" {...register("guarantorDateOfBirth", { required: true })} />
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold">Relationship With Customer</label>
          <input type="text" className="form-control" {...register("guarantorRelationshipWithCustomer", { required: true })} />
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold">Mobile Number</label>
          <input type="number" className="form-control" {...register("guarantorMobileNumber", { required: true })} />
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold">Aadhar Card Number</label>
          <input type="number" className="form-control" {...register("guarantorAdharCardNo", { required: true })} />
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold">Mortgage Details</label>
          <input type="text" className="form-control" {...register("guarantorMortgageDetails", { required: true })} />
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold">Job Details</label>
          <input type="text" className="form-control" {...register("guarantorJobDetails", { required: true })} />
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold">Local Address</label>
          <input type="text" className="form-control" {...register("guarantorLocalAddress", { required: true })} />
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold">Permanent Address</label>
          <input type="text" className="form-control" {...register("guarantorPermanentAddress", { required: true })} />
        </div>

        <div className="col-12 text-center mt-4">
          <button type="submit" className="btn btn-success px-5">Save & Next</button>
           <button type="button" className="btn btn-secondary px-5" onClick={() => navigate("/dashboard/dependent")}>Back</button>
        </div>
      </form>
    </div>
  );
}

export default GuarantorDetails;
