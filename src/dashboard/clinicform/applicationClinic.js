import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import "./hospital.css";


function ApplicationClinic() {
  let mob = sessionStorage.getItem("mob");
  let myToken= sessionStorage.getItem("my_token");

  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      dob: "",
      identificationNumber: "",
      acknowledgementNumber: "",
      highestQualification: "",
      dog: "",
      number: "",
      token : myToken
    },
    onSubmit: async (values) => {
      values.number = mob;
      console.log(values);
      try {
        await axios.post("http://localhost:5000/api/user/userinfo", values);
        navigate("/consultationClinic");
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <>
     <div className="login">
      <span className="loginTitle">Clinic Details</span>
        <form className="loginForm"onSubmit={formik.handleSubmit}>


            <label>Name</label>
            <input id="name" className="loginInput" name="name" type="text" onChange={formik.handleChange} value={formik.values.name} required/>

            <label >Date of Birth</label>
            <input id="dob"className="loginInput" name="dob" type="date" onChange={formik.handleChange} value={formik.values.dob} required/>

            <label > Clinical establishment identification number</label>
            <input id="identificationNumber" className="loginInput" name="identificationNumber" type="tel" onChange={formik.handleChange} value={formik.values.identificationNumber}
           required />

            <label >Acknowledgement Number</label>
            <input id="acknowledgementNumber" className="loginInput" name="acknowledgementNumber" type="number" onChange={formik.handleChange} value={formik.values.acknowledgementNumber}
            required/>

            <label > Highest Education Qualification</label>
            <input id="highestQualification" className="loginInput" name="highestQualification" type="text" onChange={formik.handleChange} value={formik.values.highestQualification}required/>

            <label>Date of Graduation</label>
            <input id="dog" className="loginInput" name="dog" type="date" onChange={formik.handleChange} value={formik.values.dog}required/>
          <br/>
          <button type="submit"  className="loginButton">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default ApplicationClinic;
