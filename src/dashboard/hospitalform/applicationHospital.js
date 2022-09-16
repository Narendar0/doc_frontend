import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import "./hospital.css";

function ApplicationHospital() {
  let mob = sessionStorage.getItem("mob");
  let myToken= sessionStorage.getItem("my_token");

  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      hospitalName: "",
      HospitalMobileNumber:"",
      clinicalEstablishmentNumber: "",
      HospitalRegistrationNumber: "",
      NumberOfDoctors: "",
      NumberOfBeds:"",
      number: "",
      token : myToken

    },
    onSubmit: async (values) => {
      values.number = mob;
      console.log(values);
      try {
        await axios.post("http://localhost:5000/api/hospitalUser/userinfohospital", values);
        navigate("/doctorDetails");
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <>
      <div className="login">
      <span className="loginTitle">Hospital Details</span>
        <form className="loginForm"onSubmit={formik.handleSubmit}>
            <label>Name</label>
            <input className="loginInput" name="name" type="text" onChange={formik.handleChange} value={formik.values.hospitalName} />

            <label >Hospital Mobile Number </label>
            <input className="loginInput" name="HospitalMobileNumber" type="number" onChange={formik.handleChange} value={formik.values.HospitalMobileNumber} />

            <label > Clinical establishment identification number </label>
            <input  className="loginInput" name="clinicalEstablishmentNumber" type="number" onChange={formik.handleChange} value={formik.values.clinicalEstablishmentNumber}/>

            <label > Hospital Registration Number </label>
            <input className="loginInput"  name="HospitalRegistrationNumber" type="number" onChange={formik.handleChange} value={formik.values.HospitalRegistrationNumber}/>

           <label > Number of Doctors </label>
            <input className="loginInput" name="NumberOfDoctors" type="number" onChange={formik.handleChange} value={formik.values.NumberOfDoctors}/>

            <label> Number of Beds</label>
            <input className="loginInput" name="NumberOfBeds" type="number" onChange={formik.handleChange} value={formik.values.NumberOfBeds}/>
          <br />
          <button  className="loginButton" type="submit" >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default ApplicationHospital;
