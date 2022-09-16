import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      number: "",
    },

    onSubmit: async (values) => {
      sessionStorage.setItem("mob", values.number);
      await axios.post("http://localhost:5000/api/auth/login", values)
        .then(function (res) {
          // console.log(values);
          // console.log(res.status);
          navigate("/otp");
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  });
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Home
          </a>
        </div>
      </nav>
      <div className="col-md-6 col-lg-7 d-flex align-items-center">
        <div className="card-body p-5 p-lg-5 text-black">
          <form onSubmit={formik.handleSubmit}>
            <div className="d-flex align-items-center mb-3 pb-1">
              <span className="h1 fw-bold mb-0">Login here</span>
            </div>

            <h6 className="h6 fw-bold mb-0">Enter Mobile Number:</h6>
            <div className="form-outline mb-4">
              <input
                type="number"
                className="form-control form-control-lg"
                placeholder="Number"
                name="number"
                onChange={formik.handleChange}
                value={formik.values.number}
                required
              />
            </div>

            <div className="pt-1 mb-4">
              <button type="submit " className="btn btn-dark btn-lg btn-block">
                Get OTP
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
