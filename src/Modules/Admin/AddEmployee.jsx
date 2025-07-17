import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function AddEmployee() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const fd = new FormData();

    
    const jsonData = {
      empFirstName: data.empFirstName,
      empLastName: data.empLastName,
      empEmail: data.empEmail,
      empSalary: data.empSalary,
      empAge: data.empAge,
      userType: data.userType,
      username: data.username,
      password: data.password,
      dateOfBirth: data.dateOfBirth,
    };

  
    fd.append('empData', new Blob([JSON.stringify(jsonData)], { type: 'application/json' }));

  
    fd.append('empImage', data.empImage[0]);
    fd.append('empPancard', data.empPancard[0]);

   
    axios
      .post('http://localhost:8086/addEmpData', fd, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        alert('Employee added successfully!');
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error adding employee:', error);
        alert('Failed to add employee.');
      });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Add Employee</h2>
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <input
          type="text"
          placeholder="First Name"
          {...register('empFirstName', { required: 'First Name is required' })}
        />
        {errors.empFirstName && <p className="text-danger">{errors.empFirstName.message}</p>}

        <input
          type="text"
          placeholder="Last Name"
          {...register('empLastName', { required: 'Last Name is required' })}
        />
        {errors.empLastName && <p className="text-danger">{errors.empLastName.message}</p>}

        <input
          type="email"
          placeholder="Email"
          {...register('empEmail', { required: 'Email is required' })}
        />
        {errors.empEmail && <p className="text-danger">{errors.empEmail.message}</p>}

        <input
          type="number"
          placeholder="Salary"
          {...register('empSalary', { required: 'Salary is required' })}
        />
        {errors.empSalary && <p className="text-danger">{errors.empSalary.message}</p>}

        <input
          type="number"
          placeholder="Age"
          {...register('empAge', { required: 'Age is required' })}
        />
        {errors.empAge && <p className="text-danger">{errors.empAge.message}</p>}

        <select {...register('userType', { required: 'User type is required' })}>
          <option value="">Select User Type</option>
          <option value="ADMIN">ADMIN</option>
          <option value="RE">RE</option>
          <option value="OE">OE</option>
          <option value="CRM">CRM</option>
          <option value="AH">AH</option>
          <option value="CUSTOMER">CUSTOMER</option>
        </select>
        {errors.userType && <p className="text-danger">{errors.userType.message}</p>}

       

    <input type="date" {...register('dateOfBirth', { required: 'Date of Birth is required' })} />




        <label>Upload Employee Image:</label>
        <input
          type="file"
          accept="image/*"
          {...register('empImage', { required: 'Employee image is required' })}
        />
        {errors.empImage && <p className="text-danger">{errors.empImage.message}</p>}

        <label>Upload Pancard:</label>
        <input
          type="file"
          accept="image/*,.pdf"
          {...register('empPancard', { required: 'Pancard is required' })}
        />
        {errors.empPancard && <p className="text-danger">{errors.empPancard.message}</p>}

        <br />
        <button type="submit" className="btn btn-success mt-3">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddEmployee;
