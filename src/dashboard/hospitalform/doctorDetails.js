import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import "./hospital.css";

function DoctorDetails() {
  let myToken= sessionStorage.getItem("my_token");

  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      dob:"",
      doctorRegNumber:"",
      registeredState: "",
      acknowledgementNumber: "",
      highestQualification: "",
      dog:"",
      experience:"",
      token : myToken

    },
    onSubmit: async (values) => {
      console.log(values);
      try {
        await axios.put("http://localhost:5000/api/hospitalUser/userinfohospital", values);
        navigate("/uploadHospital");
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <>
      <div className="login">
        <form  className="loginForm" onSubmit={formik.handleSubmit}>
        <h1>Doctor Details</h1>
            <label>Name</label>
            <input
              id="name"
              className="loginInput"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
            />





            <label htmlFor="dob">Date of Birth</label>
            <input
              id="dob"
              className="loginInput"
              name="dob"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.dob}
            />



            <label htmlFor="doctorRegNumber">Doctor Registration Number </label>
            <input
              id="doctorRegNumber"
              className="loginInput"
              name="doctorRegNumber"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.doctorRegNumber}
            />

           

            <label htmlFor="registeredState">
              Registered State
            </label>
            <input
              id="registeredState"
              className="loginInput"
              name="registeredState"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.registeredState}
            />

             <label htmlFor="acknowledgementNumber">
              Acknowledgement Number
            </label>
            <input
              id="acknowledgementNumber"
              className="loginInput"
              name="acknowledgementNumber"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.acknowledgementNumber}
            />

             <label htmlFor="highestQualification">
              Highest Education Qualification
            </label>
            <input
              id="highestQualification"
              className="loginInput"
              name="highestQualification"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.highestQualification}
            />


            <label htmlFor="dog">Date of Graduation</label>
            <input
              id="dog"
              name="dog"
              className="loginInput"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.dog}
            />
             <label htmlFor="experience">
             Experience
            </label>
            <input
              id="experience"
              className="loginInput"
              name="experience"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.experience}
            />
          <button type="submit" className="loginButton">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default DoctorDetails;
