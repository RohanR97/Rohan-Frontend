import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BasicDetails from './application/BasicDetails'
import PermanentAddress from './application/PermanentAddress'
import LocalAddress from './application/LocalAddress'
import AccountDetails from './application/AccountDetails'
import DependentInfo from './application/DependentInfo'
import GuarantorDetails from './application/GuarantorDetails'
import Files from './application/Files'

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'

import About from './application/About'
import Login from './application/Login'
import EmiCalculator from './application/EmiCalculator'
import Enquiry from './application/Enquiry'
import Dashboard from './Dashboard/Dashboard'
import ViewCustomer from './Modules/Relational/ViewCustomer'
import ViewSingle from './Modules/Relational/ViewSingle'
import ViewPending from './Modules/Operational/ViewPending'
import ViewCibil from './Modules/Operational/ViewCibil'
import PatchSanction from './Modules/CreditManager/PatchSanction'
import ViewAcceptedData from './Modules/AccountHead/ViewAcceptedData'
import LoanDisbursement from './Modules/AccountHead/LoanDisbursement'
import ViewLoanDisbursementData from './Modules/AccountHead/ViewLoanDisbursementData'
import AddEmployee from './Modules/Admin/AddEmployee'
import ViewEmployee from './Modules/Admin/ViewEmployee'
import UpdateEmployee from './Modules/Admin/UpdateEmployee'
import ViewSanctionData from './Modules/CreditManager/ViewSanctionData'
import ViewLedger from './Modules/AccountHead/ViewLedger'
import ViewProfile from './Modules/Customers/ViewProfile'
import AcceptOrReject from './Modules/Customers/AcceptOrReject'
import ViewCustomerLedger from './Modules/Customers/ViewCustomerLedger'
import Layout from './template/Layout'
import HomePage from './template/HomePage'
import VerifyDocuments from './Modules/Operational/VerifyDocuments'
import CreateEnquiry from './Modules/Relational/CreateEnquiry'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      {/* <Home></Home> */}

      <div className='app'>
      
          <Routes>
   <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path="about" element={<About />} />
    <Route path="login" element={<Login />} />
    <Route path="emi" element={<EmiCalculator />} />
    <Route path="enquiry" element={<Enquiry />} />
  </Route>
 
  
  
  
 
  
  

  {/* Dashboard and nested views */}
  <Route path="/dashboard" element={<Dashboard />}>
    <Route path="viewcustomer" element={<ViewCustomer />} />
    <Route path="viewsingle" element={<ViewSingle />} />
    
    <Route path="cibilpending" element={<ViewPending />} />
    <Route path="cibil" element={<ViewCibil />} />
   
   <Route path="add" element={<BasicDetails />} />
   <Route path="address" element={<PermanentAddress />} />
   <Route path="addresslocal" element={<LocalAddress />} />
   <Route path="account" element={<AccountDetails />} />
    <Route path="dependent" element={<DependentInfo />} />
    <Route path="guarantor" element={<GuarantorDetails />} />
    <Route path="file" element={<Files />} />
    <Route path="patchcredit" element={<PatchSanction></PatchSanction>}></Route>
    <Route path="viewaccepted" element={<ViewAcceptedData></ViewAcceptedData>}></Route>
    <Route path="loandisbursement/:customerId" element={<LoanDisbursement></LoanDisbursement>}></Route>
    <Route path="viewloandisdata" element={<ViewLoanDisbursementData></ViewLoanDisbursementData>}></Route>
    <Route path="addemployee" element={<AddEmployee></AddEmployee>}></Route>
    <Route path="viewemployee" element={<ViewEmployee></ViewEmployee>}></Route>
    <Route path="updateemployee" element={<UpdateEmployee></UpdateEmployee>}></Route>
    <Route path="viewsanctiondata" element={<ViewSanctionData></ViewSanctionData>}></Route>
    <Route path="viewledger" element={<ViewLedger></ViewLedger>}></Route>
    <Route path="viewprofile" element={<ViewProfile></ViewProfile>}></Route>
    <Route path="viewaccorrej" element={<AcceptOrReject></AcceptOrReject>}></Route>
    <Route path="viewcustomerledger" element={<ViewCustomerLedger></ViewCustomerLedger>}></Route>
    <Route path="verifydocuments" element={<VerifyDocuments />}></Route>
    <Route path="createenquiry" element={<CreateEnquiry></CreateEnquiry>}></Route>
    
  </Route>



         
          

          

        
        </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
