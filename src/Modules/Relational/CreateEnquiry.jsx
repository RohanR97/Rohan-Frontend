import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function CreateEnquiry() {

     const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [formData, setFormData] = useState({});

  function postData(data) {
    axios.post("http://localhost:8081/er/createEnquiryAPI", data)
      .then(res => {
        if (res.status === 201) {
          alert("Data saved successfully.");
          reset();
        } else {
          alert("Error in saving data.");
        }
      })
      .catch(() => alert("Error while submitting"));
  }
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Enquiry Form</h2>
      <form onSubmit={handleSubmit(postData)}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            {...register("firstName", { required: true })}
            placeholder="Enter your first name"
          />
          {errors.firstName && <span className="text-danger">First Name is required</span>}
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            {...register("lastName", { required: true })}
            placeholder="Enter your last name"
          />
          {errors.lastName && <span className="text-danger">Last Name is required</span>}
        </div>

        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            className="form-control"
            {...register("age", { required: true, min: 18 })}
            placeholder="Enter your age"
          />
          {errors.age && <span className="text-danger">Age must be 18 or older</span>}
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            className="form-control"
            {...register("email", { required: true })}
            placeholder="Enter your email"
          />
          {errors.email && <span className="text-danger">Email is required</span>}
        </div>

        <div className="form-group">
          <label>Mobile Number</label>
          <input
            type="tel"
            className="form-control"
            {...register("mobileNo", { required: true })}
            placeholder="Enter your mobile number"
          />
          {errors.mobile && <span className="text-danger">Mobile number is required</span>}
        </div>

        <div className="form-group">
          <label>Pan Card No.</label>
          <input
            type="text"
            className="form-control"
            {...register("panCardNo", { required: true })}
            placeholder="Enter PAN Card Number"
          />
          {errors.panCardNo && <span className="text-danger">PAN Card Number is required</span>}
        </div>

        
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            
          />
          <label className="form-check-label">
            I agree to be contacted regarding my enquiry.
          </label>
          {errors.agreeTerms && <span className="text-danger d-block">You must agree before submitting</span>}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit Enquiry
        </button>
      </form>
    </div>
  );
}

export default CreateEnquiry
