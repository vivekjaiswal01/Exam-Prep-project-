
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";


const Registration = () => {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    college:"",
    course: "",
    branch:"",
    session:"",
    phone:"",

  });

const [data, setData] = useState([]);

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post('https://localhost:5000/api/examinee', formData);
    alert("Registered Successfully");
  } catch (er) {
    console.log(er);
    alert("Sorry Try again later");
  }
};

const handlefetch = async () => {
  try {
    const res = await axios.get('https://localhost:5000/api/session');
    setData(res.data);
  } catch (er) {
    console.log(er);
  }
};

  return (
    <div>
      <div className="outer">
        <div className="container">
          <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4 mt-5">
              <h2 className="text-center text-light">Registration</h2>
            </div>
            <div className="col-sm-4"></div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-2"></div>
            <div className="col-12 col-sm-8">
              <form onSubmit={handleSubmit}>
                <div className="row mb-4">
                  <div className="col">
                    <div data-mdb-input-init className="form-outline">
                      <input
                        type="text"
                        id="form3Example1"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <label className="form-label" htmlFor="form3Example1">First name</label>
                    </div>
                  </div>
                  <div className="col">
                    <div data-mdb-input-init className="form-outline">
                      <input
                        type="text"
                        id="form3Example2"
                        className="form-control"
                        name="lastName"
                        value={formData.lastName || ""}
                        onChange={handleChange}
                      />
                      <label className="form-label" htmlFor="form3Example2">Last name</label>
                    </div>
                  </div>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-label" htmlFor="form3Example3">Email address</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-label" htmlFor="form3Example4">Password</label>
                </div>

                <button data-mdb-ripple-init type="submit" className="btn btn-primary btn-block mb-4">
                  Sign up
                </button>

                <div className="text-center">
                  <p>or sign up with:</p>
                  <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
                    <i className="fab fa-facebook-f"></i>
                  </button>
                  <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
                    <i className="fab fa-google"></i>
                  </button>
                  <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
                    <i className="fab fa-twitter"></i>
                  </button>
                  <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
                    <i className="fab fa-github"></i>
                  </button>
                </div>
              </form>
            </div>
            <div className="col-12 col-sm-2"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration
