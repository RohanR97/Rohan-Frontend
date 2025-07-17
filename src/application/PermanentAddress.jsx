import React from 'react';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../FormContext';

function PermanentAddress() {
  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();
  const { formData, setFormData } = useContext(FormContext);
  const navigate = useNavigate();

  function saveData(data) {
    setFormData({
      ...formData,
      permanentaddress: data
    });
    navigate("/dashboard/addresslocal");
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-primary">Permanent Address</h2>

      <form onSubmit={handleSubmit(saveData)} className="row g-3">
        <div className="col-md-6">
          <label className="form-label fw-bold text-secondary">Area Name</label>
          <input type="text" className="form-control" {...register("areaname", { required: true })} />
          {errors.areaname && <p className="text-danger">Area Name is required</p>}
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold text-secondary">City Name</label>
          <input type="text" className="form-control" {...register("cityname", { required: true })} />
          {errors.cityname && <p className="text-danger">City Name is required</p>}
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold text-secondary">District</label>
          <input type="text" className="form-control" {...register("district", { required: true })} />
          {errors.district && <p className="text-danger">District is required</p>}
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold text-secondary">State</label>
          <input type="text" className="form-control" {...register("state", { required: true })} />
          {errors.state && <p className="text-danger">State is required</p>}
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold text-secondary">Pincode</label>
          <input type="number" className="form-control" {...register("pincode", { required: true })} />
          {errors.pincode && <p className="text-danger">Pincode is required</p>}
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold text-secondary">House No.</label>
          <input type="text" className="form-control" {...register("houseNumber", { required: true })} />
          {errors.houseNumber && <p className="text-danger">House Number is required</p>}
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold text-secondary">Street Name</label>
          <input type="text" className="form-control" {...register("streetName", { required: true })} />
          {errors.streetName && <p className="text-danger">Street Name is required</p>}
        </div>

        <div className="col-12 text-center mt-4">
          <button type="submit" className="btn btn-success px-5">Save & Next</button>
          <button type="button" className="btn btn-secondary px-5" onClick={() => navigate("/dashboard/add")}>Back</button>

        </div>
      </form>
    </div>
  );
}

export default PermanentAddress;
