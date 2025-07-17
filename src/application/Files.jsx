import React from 'react'
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { FormContext } from '../FormContext';
import axios from 'axios';

function Files() {
  const{register,handleSubmit,setValue,reset,formState:{errors}}=useForm();
  const { formData, setFormData } = useContext(FormContext);
  
  function saveData(data)
    {
         const updatedFormData = {
    ...formData,
    files: {
      addressProof: data.addressProof[0],
      panCard: data.panCard[0],
      incomeTax: data.incomeTax[0],
      aadharCard: data.aadharCard[0],
      photo: data.photo[0],
      signature: data.signature[0],
      bankCheque: data.bankCheque[0],
      salarySlips: data.salarySlips[0]
    }
  };

  setFormData(updatedFormData);


    const fd= new FormData();
    fd.append("loanData", new Blob([JSON.stringify({      
  customerID:formData.basic.customerID,
  dateOfBirth: formData.basic.dateOfBirth,
 
  requiredTenure:formData.basic.requiredTenure,
  customerGender:formData.basic.customerGender,
  
  
  additionalMobileNumber:formData.basic.additionalMobileNumber,
  amountPaidForHome:formData.basic.amountPaidForHome,
  totalLoanRequired:formData.basic.totalLoanRequired,
  loanStatus:formData.basic.loanStatus,
  
   customerAddress: {
    permanentAddress: {
      areaname: formData.permanentaddress.areaname,
      cityname: formData.permanentaddress.cityname,
      district: formData.permanentaddress.district,
      state: formData.permanentaddress.state,
      pincode: formData.permanentaddress.pincode,
      houseNumber: formData.permanentaddress.houseNumber,
      streetName: formData.permanentaddress.streetName
    },
    localAddress: {
      areaname: formData.localaddress.areaname,
      cityname: formData.localaddress.cityname,
      district: formData.localaddress.district,
      state: formData.localaddress.state,
      pincode: formData.localaddress.pincode,
      houseNumber: formData.localaddress.houseNumber,
      streetName: formData.localaddress.streetName
    }
  },

  familydependentInfo: {
    noOfFamilyMember: formData.familydependentinfo.noOfFamilyMember,
    noOfChild: formData.familydependentinfo.noOfChild,
    maritalStatus: formData.familydependentinfo.maritalStatus,
    dependentMember: formData.familydependentinfo.dependentMember,
    familyIncome: formData.familydependentinfo.familyIncome
  },

  accountdetails: {
    accountType: formData.accountdetails.accountType,
    accountBalance: formData.accountdetails.accountBalance,
    accountHolderName: formData.accountdetails.accountHolderName,
    accountStatus: formData.accountdetails.accountStatus,
    accountNumber: formData.accountdetails.accountNumber
  },

  guarantordetails: {
    guarantorName: formData.guarantordetails.guarantorName,
    guarantorDateOfBirth: formData.guarantordetails.guarantorDateOfBirth,
    guarantorRelationshipWithCustomer: formData.guarantordetails.guarantorRelationshipWithCustomer,
    guarantorMobileNumber: formData.guarantordetails.guarantorMobileNumber,
    guarantorAdharCardNo: formData.guarantordetails.guarantorAdharCardNo,
    guarantorMortgageDetails: formData.guarantordetails.guarantorMortgageDetails,
    guarantorJobDetails: formData.guarantordetails.guarantorJobDetails,
    guarantorLocalAddress: formData.guarantordetails.guarantorLocalAddress,
    guarantorPermanentAddress: formData.guarantordetails.guarantorPermanentAddress
  }
    })], { type: "application/json" }));

fd.append("addressProof", formData.files.addressProof);
fd.append("panCard", formData.files.panCard);
fd.append("incomeTax", formData.files.incomeTax);
fd.append("aadharCard", formData.files.aadharCard);
fd.append("photo", formData.files.photo);
fd.append("signature", formData.files.signature);
fd.append("bankCheque", formData.files.bankCheque);
fd.append("salarySlips", formData.files.salarySlips);


return axios.post('http://localhost:8081/addLoanData', fd, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })
  .then(response => {
    console.log("Success!", response);
    alert("Loan data and files submitted successfully!");
  })
  .catch(error => {
    console.error("Error posting files", error);
  });
  }
  return (
     <div className="container mt-5">
      <h2 className="text-center text-primary mb-4">Upload Files</h2>

      <form onSubmit={handleSubmit(saveData)}>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label text-danger">Address Proof</label>
            <input type="file" className="form-control" {...register("addressProof")} />
          </div>

          <div className="col-md-6">
            <label className="form-label text-danger">Pan Card</label>
            <input type="file" className="form-control" {...register("panCard")} />
          </div>

          <div className="col-md-6">
            <label className="form-label text-danger">Income Tax</label>
            <input type="file" className="form-control" {...register("incomeTax")} />
          </div>

          <div className="col-md-6">
            <label className="form-label text-danger">Photo</label>
            <input type="file" className="form-control" {...register("photo")} />
          </div>

          <div className="col-md-6">
            <label className="form-label text-danger">Aadhar Card</label>
            <input type="file" className="form-control" {...register("aadharCard")} />
          </div>

          <div className="col-md-6">
            <label className="form-label text-danger">Signature</label>
            <input type="file" className="form-control" {...register("signature")} />
          </div>

          <div className="col-md-6">
            <label className="form-label text-danger">Bank Cheque</label>
            <input type="file" className="form-control" {...register("bankCheque")} />
          </div>

          <div className="col-md-6">
            <label className="form-label text-danger">Salary Slips</label>
            <input type="file" className="form-control" {...register("salarySlips")} />
          </div>
        </div>

        <div className="text-center mt-4">
          <button type="submit" className="btn btn-success px-4">SAVE & SUBMIT</button>
        </div>
      </form>
    </div>
  );
}


export default Files
