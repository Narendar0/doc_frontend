import React, { Fragment } from 'react'
import axios from "axios";
import { useFormik } from 'formik';
import {  useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function ViewUserDetails() {
  let myToken= sessionStorage.getItem("my_token");

  let params = useParams()
  let navigate = useNavigate();

  const [user, setUser] = useState([])

  useEffect(() => {
    fetchUser();
  });

  let fetchUser = async () => {
    try {
      let userData = await axios.get(`http://localhost:5000/api/user/${params.id}`);
      // console.log(userData);
      setUser(userData.data)
    } catch (error) {
      console.log(error);
    }}

    const formik = useFormik({
      initialValues: {
         isApproved:"",
         token : myToken


      },
      onSubmit: async (values) => {
        delete values._id;
          try {
              await axios.put(`http://localhost:5000/api/approval/${params.id}`, values)
              navigate("/admindashboard")
          } catch (error) {
              console.log(error)
          }
      }
  })
  return (
<>
        <h1>View User Details</h1>
      
         <form onSubmit={formik.handleSubmit}>
             
         <label>Name :</label>
              <input value={user && user.name} disabled="disabled"/>
  
              <label>Date of Birth :</label>
              <input value= {user && user.dob} disabled="disabled"/>
  
              <label> Identification number :</label>
              <input value={ user && user.identificationNumber}  disabled="disabled"/>
  
              <label >Acknowledgement Number :</label>
              <input value={ user && user.acknowledgementNumber } disabled="disabled"/>
  
  
              <label > Highest Education Qualification :</label>
              <input value={user && user.highestQualification}  disabled="disabled"/>
  
              <label>Date of Graduation :</label>
              <input value={user && user.dog}  disabled="disabled"/>

              <label>From Time :</label>
              <input value={user.UPDTD && user.UPDTD.fromTime}  disabled="disabled"/>


               <label>To Time :</label>
              <input value={user.UPDTD && user.UPDTD.toTime}  disabled="disabled"/>

              <label>Consultation Fees:</label>
              <input value={user.UPDTD && user.UPDTD.consultationFees}  disabled="disabled"/>

              <label>Location :</label>
              <input value={user.UPDTD && user.UPDTD.location}  disabled="disabled"/>
             
              <label> isApproved :</label>
              <input name="isApproved" type="boolean" onChange={formik.handleChange} value={ formik.values.isApproved || user && user.isApproved }  />
             
  
              <button type="submit" className="btn btn-primary btn-block mb-4">Update</button>
         
         </form>
</>
  )

}

export default ViewUserDetails