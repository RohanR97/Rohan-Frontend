import React from 'react';
import { Link } from 'react-router-dom';

function SideNav() {
  const role = localStorage.getItem("userRole");

  return (
    <div
      className="d-flex flex-column bg-light p-3 shadow-sm"
      style={{
        minHeight: '100vh',
        width: '250px',
        overflowY: 'auto',
        borderRight: '1px solid #dee2e6',
      }}
    >
      <h4 className="text-center text-primary mb-4">{role}</h4>

      <div className="d-grid gap-2">
        {role === 'RE' && (
          <>

           <Link to="/dashboard/createenquiry" className="btn btn-outline-primary">
              Create Enquiry
            </Link>

            <Link to="/dashboard/viewcustomer" className="btn btn-outline-primary">
              View All Customers
            </Link>
            <Link to="/dashboard/viewsingle" className="btn btn-outline-primary">
              View Single Customer
            </Link>
          </>
        )}

        {role === 'CUSTOMER' && (
          <>
            <Link to="/dashboard/viewprofile" className="btn btn-outline-primary">
              View Profile
            </Link>
            <Link to="/dashboard/viewaccorrej" className="btn btn-outline-primary">
              Accept or Reject Sanctioned Loan
            </Link>
            <Link to="/dashboard/viewcustomerledger" className="btn btn-outline-primary">
              View Ledger
            </Link>
          </>
        )}

        {role === 'OE' && (
          <>
            <Link to="/dashboard/cibilpending" className="btn btn-outline-success">
              View Cibil Pending Data
            </Link>
            <Link to="/dashboard/cibil" className="btn btn-outline-success">
              View Cibil Data
            </Link>

             <Link to="/dashboard/verifydocuments" className="btn btn-outline-success">
              Verify Documents
            </Link>
          </>
        )}

        {role === 'ADMIN' && (
          <>
            <Link to="/dashboard/addemployee" className="btn btn-outline-danger">
              Add Employee or Customer
            </Link>
            <Link to="/dashboard/viewemployee" className="btn btn-outline-danger">
              View Employee or Customer
            </Link>
            <Link to="/dashboard/updateemployee" className="btn btn-outline-danger">
              Update Employee or Customer
            </Link>
          </>
        )}

        {role === 'CRM' && (
          <>
            <Link to="/dashboard/patchcredit" className="btn btn-outline-warning">
              Patch Credit Data
            </Link>
            <Link to="/dashboard/viewsanctiondata" className="btn btn-outline-warning">
              View Sanction Data
            </Link>
          </>
        )}

        {role === 'AH' && (
          <>
            <Link to="/dashboard/viewaccepted" className="btn btn-outline-info">
              View Accepted Data
            </Link>
            <Link to="/dashboard/viewledger" className="btn btn-outline-info">
              View Ledger
            </Link>
            <Link to="/dashboard/viewloandisdata" className="btn btn-outline-info">
              View Loan Disbursement Data
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default SideNav;
