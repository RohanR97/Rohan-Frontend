import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateEmployee() {
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, reset, getValues } = useForm();

  const [empImagePreview, setEmpImagePreview] = useState('');
  const [empPancardPreview, setEmpPancardPreview] = useState('');
  const [loading, setLoading] = useState(false);

  const viewFile = (fileSrc) => {
    if (!fileSrc || fileSrc === 'data:image/jpeg;base64,') {
      alert("File not available!");
      return;
    }
    const newWindow = window.open();
    if (fileSrc.startsWith("data:application/pdf")) {
      newWindow.document.write(`<iframe src="${fileSrc}" width="500" height="700"></iframe>`);
    } else {
      newWindow.document.write(`<img src="${fileSrc}" width="500"/>`);
    }
  };

  const fetchEmployeeData = () => {
    const id = getValues('id'); // get ID from input field
    if (!id) {
      alert("Please enter Employee ID.");
      return;
    }

    setLoading(true);
    axios.get(`http://localhost:8086/getByEmpId/${id}`)
      .then((res) => {
        const data = res.data;
        for (let key in data) {
          if (key !== "empImageBase64" && key !== "empPancardBase64") {
            setValue(key, data[key]);
          }
        }
        if (data.empImageBase64) {
          setEmpImagePreview(`data:image/jpeg;base64,${data.empImageBase64}`);
        }
        if (data.empPancardBase64) {
          setEmpPancardPreview(`data:application/pdf;base64,${data.empPancardBase64}`);
        }
        alert("Employee data loaded.");
      })
      .catch((err) => {
        console.error("Error fetching employee data:", err);
        alert("Employee not found.");
      })
      .finally(() => setLoading(false));
  };

  const onSubmit = (data) => {
    if (!data.id) {
      alert("ID is required for update.");
      return;
    }

    const fd = new FormData();
    const jsonData = {
    //   id: data.id,
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

    if (data.empImage?.[0]) fd.append('empImage', data.empImage[0]);
    if (data.empPancard?.[0]) fd.append('empPancard', data.empPancard[0]);

    axios
      .put(`http://localhost:8086/updateEmpData/${data.id}`, fd, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((res) => {
        alert("Employee updated successfully!");
        reset();
        
      })
      .catch((err) => {
        console.error("Error updating employee:", err);
        alert("Failed to update employee.");
      });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Update Employee</h2>

      <div className="mb-3 d-flex">
        <input
          type="text"
          placeholder="Enter Employee ID"
          {...register('id')}
          className="form-control me-2"
        />
        <button type="button" className="btn btn-primary" onClick={fetchEmployeeData}>
          {loading ? 'Loading...' : 'Fetch'}
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <input type="text" placeholder="First Name" {...register('empFirstName')} className="form-control mb-2" />
        <input type="text" placeholder="Last Name" {...register('empLastName')} className="form-control mb-2" />
        <input type="email" placeholder="Email" {...register('empEmail')} className="form-control mb-2" />
        <input type="number" placeholder="Salary" {...register('empSalary')} className="form-control mb-2" />
        <input type="number" placeholder="Age" {...register('empAge')} className="form-control mb-2" />
 <input type="text" placeholder="Username" {...register('username')} className="form-control mb-2" />
        <input type="password" placeholder="Password" {...register('password')} className="form-control mb-2" />
        <input type="date" {...register('dateOfBirth')} className="form-control mb-2" />

        <select {...register('userType')} className="form-control mb-3">
          <option value="">Select User Type</option>
          <option value="ADMIN">ADMIN</option>
          <option value="RE">RE</option>
          <option value="OE">OE</option>
          <option value="CRM">CRM</option>
          <option value="AH">AH</option>
        </select>

<div className="mb-3">
  <label>Employee Image from Backend URL:</label>
  
  {/* Image Preview from Backend URL */}
  <img
    src={`http://localhost:8086/image/${getValues('id')}`}
    alt="Employee"
    width="100"
    height="100"
    className="d-block mb-2"
    onError={(e) => { e.target.src = ""; }}
  />

  {/* File Input to Upload New Image */}
  <input
    type="file"
    accept="image/*"
    {...register('empImage')}
    className="form-control mt-2"
  />
</div>

       <div className="mb-3">
  <label>PAN Card from Backend URL:</label>
  
  {/* PAN Preview from Backend URL */}
  {getValues('id') && (
    <img
      src={`http://localhost:8086/pancard/${getValues('id')}`}
      alt="PAN Card"
      width="100"
      height="100"
      className="d-block mb-2"
      onError={(e) => { e.target.src = ""; }}
    />
  )}

  {/* File Input to Upload New PAN Card */}
  <input
    type="file"
    accept="image/*,.pdf"
    {...register('empPancard')}
    className="form-control mt-2"
  />
</div>


        <button type="submit" className="btn btn-success">Update</button>
      </form>
    </div>
  );
}

export default UpdateEmployee;
