import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../FormContext';

function BasicDetails() {
 
    const{register,handleSubmit, setValue,reset,formState: { errors }}  = useForm();

  const { formData, setFormData } = useContext(FormContext);
  const navigate = useNavigate();

  function saveData(data) {
    setFormData({
      ...formData,
      basic: data,
      
    });
    navigate("/dashboard/address");
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Basic Customer Details</h2>
      <form onSubmit={handleSubmit(saveData)}>
        <div className="row">

          <div className="mb-3 col-md-6">
  <label className="form-label text-danger">Customer ID</label>
  <input
    type="number"
    className="form-control text-primary"
    {...register('customerID', { required: true })}
  />
</div>

          

          <div className="mb-3 col-md-6">
            <label className="form-label text-danger">Date Of Birth</label>
            <input
              type="date"
              className="form-control text-primary"
              {...register('dateOfBirth', { required: true })}
            />
          </div>

          

          <div className="mb-3 col-md-6">
            <label className="form-label text-danger">Required Tenure</label>
            <input
              type="number"
              className="form-control text-primary"
              {...register('requiredTenure', { required: true })}
            />
          </div>

          <div className="mb-3 col-md-6">
  <label className="form-label text-danger d-block">Gender</label>

  <div className="form-check form-check-inline">
    <input
      className="form-check-input"
      type="radio"
      value="Male"
      id="genderMale"
      {...register('customerGender', { required: true })}
    />
    <label className="form-check-label" htmlFor="genderMale">Male</label>
  </div>

  <div className="form-check form-check-inline">
    <input
      className="form-check-input"
      type="radio"
      value="Female"
      id="genderFemale"
      {...register('customerGender')}
    />
    <label className="form-check-label" htmlFor="genderFemale">Female</label>
  </div>

  {errors.customerGender && (
    <div className="text-danger mt-1">Gender is required</div>
  )}
</div>


         


          <div className="mb-3 col-md-6">
            <label className="form-label text-danger">Additional Mobile No</label>
            <input
              type="tel"
              className="form-control text-primary"
              {...register('additionalMobileNumber')}
            />
          </div>

          <div className="mb-3 col-md-6">
            <label className="form-label text-danger">Amount Paid For Home</label>
            <input
              type="number"
              className="form-control text-primary"
              {...register('amountPaidForHome')}
            />
          </div>

          <div className="mb-3 col-md-6">
            <label className="form-label text-danger">Total Loan Required</label>
            <input
              type="number"
              className="form-control text-primary"
              {...register('totalLoanRequired')}
            />
          </div>

         
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-success px-5">
            SAVE & NEXT
          </button>
        </div>
      </form>
    </div>
  );
}

export default BasicDetails;
