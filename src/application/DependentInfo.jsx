import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../FormContext';

function DependentInfo() {
  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();
  const { formData, setFormData } = useContext(FormContext);
  const navigate = useNavigate();

  function saveData(data) {
    setFormData({
      ...formData,
      familydependentinfo: data
    });

    navigate("/dashboard/guarantor");
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-primary">Dependent Information</h2>

      <form onSubmit={handleSubmit(saveData)} className="row g-3">

        <div className="col-md-6">
          <label className="form-label fw-bold text-secondary">No. of Family Members</label>
          <input type="number" className="form-control" {...register("noOfFamilyMember", { required: true })} />
          {errors.noOfFamilyMember && <p className="text-danger">This field is required</p>}
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold text-secondary">No. of Children</label>
          <input type="number" className="form-control" {...register("noOfChild", { required: true })} />
          {errors.noOfChild && <p className="text-danger">This field is required</p>}
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold text-secondary">Marital Status</label>
          <input type="text" className="form-control" {...register("maritalStatus", { required: true })} />
          {errors.maritalStatus && <p className="text-danger">This field is required</p>}
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold text-secondary">Dependent Member</label>
          <input type="text" className="form-control" {...register("dependentMember", { required: true })} />
          {errors.dependentMember && <p className="text-danger">This field is required</p>}
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold text-secondary">Family Income</label>
          <input type="number" className="form-control" {...register("familyIncome", { required: true })} />
          {errors.familyIncome && <p className="text-danger">This field is required</p>}
        </div>

        <div className="col-12 text-center mt-4">
          <button type="submit" className="btn btn-success px-5">Save & Next</button>
          <button type="button" className="btn btn-secondary px-5" onClick={() => navigate("/dashboard/account")}>Back</button>
        </div>
      </form>
    </div>
  );
}

export default DependentInfo;
