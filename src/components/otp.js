import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Otp() {
  let mob = sessionStorage.getItem("mob");
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      otp: "",
      number: mob,
    },
    onSubmit: async (values) => {
      try {
        let loginData = await axios.post("http://localhost:5000/api/auth/otp", values)
        window.sessionStorage.setItem("my_token", loginData.data.token)
        navigate("/userdashboard")
      } catch (error) {
        console.log(error)
      }
    }
  });
  return (
    <>
      <div>
        <section className="vh-100">
          <div className="container py-3 h-100" id="userLogin">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-xl-10">
                <div className="card " id="card">
                  <div className="row g-0">
                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                      <div className="card-body p-5 p-lg-5 text-black">
                        <form onSubmit={formik.handleSubmit}>
                          <div className="d-flex align-items-center mb-3 pb-1">
                            <span className="h1 fw-bold mb-0">OTP Login</span>
                          </div>

                          <h6 className="h6 fw-bold mb-0">Enter Your Otp:</h6>
                          <div className="form-outline mb-4">
                            <input
                              type="otp"
                              className="form-control form-control-lg"
                              placeholder="otp"
                              name="otp"
                              onChange={formik.handleChange}
                              value={formik.values.otp}
                              required
                            />
                          </div>

                          <div className="pt-1 mb-4">
                            <button
                              type="submit "
                              className="btn btn-dark btn-lg btn-block"
                            >
                              Login
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Otp;
