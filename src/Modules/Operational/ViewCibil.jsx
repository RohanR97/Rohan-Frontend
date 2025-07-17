import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function ViewCibil() {
    const [cibil, setCibil] = useState([]);

    function getAllCibilData()
    {
        axios.get("http://localhost:8081/er/getcibildata")
        .then(res=>{
            setCibil(res.data);
        })
        .catch(error=>console.log(error.message))
    }

  useEffect(getAllCibilData,[]);

  return (
   <div className="table-responsive">

        <h4 className="text-center text-primary mb-3">Cibil Data</h4>
      <table className="table table-bordered table-striped">
        <thead  className="table-dark">
            <tr>
                <th>Cibil Id</th>
                <th>Cibil Remark</th>
                <th>Cibil Score</th>
                <th>Date & Time</th>
                <th>Status</th>
                
            </tr>
        </thead>

       <tbody>
  {
    cibil.map((cibil, i) => (
      <tr key={i}>
        <td>{cibil.cibilId}</td>
        <td>{cibil.cibilScore}</td>
        <td>{cibil.cibilScoreDateTime}</td>
        <td>{cibil.status}</td>
        <td>{cibil.cibilRemark}</td>
      </tr>
    ))
  }
</tbody>

      </table>
    </div>
  )
}

export default ViewCibil
