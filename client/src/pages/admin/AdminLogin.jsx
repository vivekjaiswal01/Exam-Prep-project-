import React, { useState } from 'react';
import '../admin/App2.css';
import axios from 'axios';

const AdminLogin = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/admin/login', form);
      if (res.data.message === "Login Successfully") {
        alert("Login Successfully");
        localStorage.setItem('adminEmail', res.data.admin.email);
        localStorage.setItem('id', res.data.admin.id);
        localStorage.setItem('role', res.data.admin.role);
        window.location.href = '/AdminDashboard';
      } else {
        alert(res.data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error in login:", error);
      alert("Something went wrong, please try again");
    }
  };

  return (
    <div className="outer">
      <div className="row">
        <div className="col-sm-6"></div>
        <div className="col-sm-6">
          <h3 className='text-light mt-5 text-center' style={{ marginLeft: "80px" }}>
            Admin Login
          </h3>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-8" style={{ marginTop: "30px" }}>
            <section className="vh-100">
              <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-md-9 col-lg-6 col-xl-5">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                      className="img-fluid"
                      alt="Sample"
                    />
                  </div>
                  <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                    <form method='POST' onSubmit={handleSubmit}>
                      <div className="form-outline mb-4">
                        <label className="form-label text-light" htmlFor="email">
                          Email address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control form-control-lg"
                          placeholder="Enter a valid email address"
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-outline mb-3">
                        <label className="form-label text-light" htmlFor="password">
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          className="form-control form-control-lg"
                          placeholder="Enter password"
                          value={form.password}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="text-center text-lg-start mt-4 pt-2">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                          style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                        >
                          Login
                        </button>
                        <p className="small fw-bold mt-2 pt-1 mb-0 text-light">
                          Don't have an account?{" "}
                          <a href="#!" className="link-danger">Register</a>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-sm-1"></div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
