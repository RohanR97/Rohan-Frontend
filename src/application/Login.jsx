import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onLogin = (data) => {
    axios.post("http://localhost:8086/loginemployee", {
      username: data.username,
      password: data.password
    })
    .then((response) => {
      const emp = response.data;

      localStorage.setItem("userRole", emp.userType);
      localStorage.setItem("username", emp.username);
      localStorage.setItem("empName", emp.empFirstName + " " + emp.empLastName);
      


      alert("Login successful as " + emp.userType);
      navigate("/dashboard");
    })
    .catch((error) => {
      alert("Invalid username or password");
    });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Login</h2>
      <form onSubmit={handleSubmit(onLogin)}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
            {...register("username", { required: true })}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            {...register("password", { required: true })}
          />
        </div>

        

        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default Login;
