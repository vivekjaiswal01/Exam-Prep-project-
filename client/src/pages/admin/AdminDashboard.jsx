import React from 'react'
import "../admin/Admin.css";
import { Outlet } from 'react-router';

const AdminDashboard = () => {
  return (
    <div className="outer">
      
      <div className="container-fluid p-2 headc">
        <div className="row align-items-center">
          <div className="col-6 col-md-2">
            <h4 className='text-center mt-2'>Admin</h4>
          </div>
          <div className="col-6 col-md-1 text-center">
            <button className='btn btn-outline-secondary text-dark mt-1 w-100'>Collapse</button>
          </div>
          <div className="d-none d-md-block col-md-6"></div>
          <div className="col-12 col-md-3 text-md-end text-center mt-2 mt-md-0">
            <h2 className='fw-bold'>Admin Dashboard</h2>
          </div>
        </div>
      </div>

     
      <div className="container-fluid">
        <div className="row">
            
          <div className="col-12 col-md-3 col-lg-2 mb-3 mt-1">
            <div className="d-grid gap-2">
              <a className='btn btn-outline-secondary text-dark btn-lg w-100' href='/AdminDashboard/Session'>Session</a>
              <button className='btn btn-outline-secondary text-dark btn-lg w-100'>Subject</button>
              <button className='btn btn-outline-secondary text-dark btn-lg w-100'>Examinee</button> 
              <button className='btn btn-outline-secondary text-dark btn-lg w-100'>Examination</button>
              <button className='btn btn-outline-secondary text-dark btn-lg w-100'>Question Bank</button>
              <button className='btn btn-outline-secondary text-dark btn-lg w-100'>Report Generation</button>
              <button className='btn btn-outline-secondary text-dark btn-lg w-100'>Change Password</button>
              <button className='btn btn-outline-secondary text-dark btn-lg w-100'>Logout</button>
            </div>
          </div>

    
          <div className="col-12 col-md-9 col-lg-10 contentc">
            <Outlet/>
            <div className="container-fluid">
              <div className="row border text-light mt-2 text-center fw-bold">
                <div className="col-2 col-md-1 border">S.no</div>
                <div className="col-4 col-md-1 border">Name</div>
                <div className="col-6 col-md-2 border">Email</div>
                <div className="col-6 col-md-2 border">College</div>
                <div className="col-6 col-md-2 border">Qualification</div>
                <div className="col-6 col-md-2 border">Address</div>
                <div className="col-6 col-md-2 border">Number</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard;
