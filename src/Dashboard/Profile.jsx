import React from 'react'

function Profile() {
  const role = localStorage.getItem("userRole");
  const name = localStorage.getItem("empName");
  const username = localStorage.getItem("username");

  return (
    <div>
      <h3>Welcome, {name}!</h3>
      <h4>User Type: {role}</h4>
      <h5>Username: {username}</h5>
    </div>
  )
}

export default Profile;

