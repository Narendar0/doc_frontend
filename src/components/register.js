import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Register() {
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
      inlineRadioOptions: "",
    },

    onSubmit: async (values) => {
      try {
        await axios.post("http://localhost:5000/api/auth/register", values);
        localStorage.setItem("mob",values.number)
        navigate("/otp");
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <>
      <div>
      <h1>Doctor On Boarding</h1>
        <section className="vh-100">
          <div className="container py-3 h-100" id="userLogin">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-xl-10">
                <div className="card " id="card">
                  <div className="row g-0">
                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                      <img
                        src="https://www.drupal.org/files/project-images/reg_confirm_email_with_button_0.png"
                        alt="login form"
                        className="img-fluid w-100 h-100"
                        id="loginimg"
                      />
                    </div>
                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                      <div className="card-body p-5 p-lg-5 text-black">
                        <form onSubmit={formik.handleSubmit}>
                          <div className="d-flex align-items-center mb-3 pb-1">
                            <span className="h1 fw-bold mb-0">
                              Register here
                            </span>
                          </div>

                          <h6>Enter Your Name:</h6>
                          <div className="form-outline mb-4">
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              placeholder="Enter your name"
                              name="name"
                              onChange={formik.handleChange}
                              value={formik.values.name}
                              required
                            />
                          </div>
                          <h6 className="h6 fw-bold mb-0">
                            Enter Mobile Number:
                          </h6>
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

                          <div className="form-outline mb-4">
                            <label className="h6 fw-bold mb-0">
                              Where do you work?
                            </label>
                            <div className="form-outline mb-4">
                              <input
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                onChange={formik.handleChange}
                                value="Own Clinic"
                              />
                              <label htmlFor="inlineRadio1">Own clinic</label>
                            </div>

                            <div className="form-outline mb-4">
                              <input
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio2"
                                onChange={formik.handleChange}
                                value="Hospital / Polyclinic / Nursing home"
                              />
                              <label htmlFor="inlineRadio2">
                                Hospital / Polyclinic / Nursing home{" "}
                              </label>
                            </div>
                          </div>

                          <div className="pt-1 mb-4">
                            <button
                              type="submit "
                              className="btn btn-dark btn-lg btn-block"
                            >
                              Register
                            </button>
                          </div>
                          <hr className="my-4" />

                          <p className="mb-5 pb-lg-2">
                            {" "}
                            Already a User Login Here ⬇{" "}
                            <Link to={"/login"}> Login</Link>{" "}
                          </p>
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

export default Register;
