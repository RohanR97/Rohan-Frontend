import React from 'react';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../FormContext';

function AccountDetails() {
  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();
  const { formData, setFormData } = useContext(FormContext);
  const navigate = useNavigate();

  function saveData(data) {
    setFormData({
      ...formData,
      accountdetails: data
    });
    navigate("/dashboard/dependent");
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-primary">Account Details</h2>

      <form onSubmit={handleSubmit(saveData)} className="row g-3">

        <div className="col-md-6">
          <label className="form-label fw-bold text-secondary">Account Type</label>
          <input type="text" className="form-control" {...register("accountType", { required: true })} />
          {errors.accountType && <p className="text-danger">Account Type is required</p>}
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold text-secondary">Account Balance</label>
          <input type="number" className="form-control" {...register("accountBalance", { required: true })} />
          {errors.accountBalance && <p className="text-danger">Account Balance is required</p>}
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold text-secondary">Account Holder Name</label>
          <input type="text" className="form-control" {...register("accountHolderName", { required: true })} />
          {errors.accountHolderName && <p className="text-danger">Account Holder Name is required</p>}
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold text-secondary">Account Status</label>
          <input type="text" className="form-control" {...register("accountStatus", { required: true })} />
          {errors.accountStatus && <p className="text-danger">Account Status is required</p>}
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold text-secondary">Account Number</label>
          <input type="number" className="form-control" {...register("accountNumber", { required: true })} />
          {errors.accountNumber && <p className="text-danger">Account Number is required</p>}
        </div>

        <div className="col-12 text-center mt-4">
          <button type="submit" className="btn btn-success px-5">Save & Next</button>
           <button type="button" className="btn btn-secondary px-5" onClick={() => navigate("/dashboard/addresslocal")}>Back</button>
        </div>
      </form>
    </div>
  );
}

export default AccountDetails;
