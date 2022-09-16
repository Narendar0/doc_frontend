import React from 'react'
import axios from "axios";
// import { useFormik } from 'formik';
import {  useEffect,useState } from "react";
import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";


function ViewHospitalDetails() {

  let params = useParams()
  // let navigate = useNavigate();

  const [user, setUser] = useState([])

  useEffect(() => {
    fetchUsers();
  });

  let fetchUsers = async () => {
    try {
      let userData = await axios.get(`http://localhost:5000/api/hospitalUser/${params.id}`);
      // console.log(userData);
      setUser(userData.data)
    } catch (error) {
      console.log(error);
    }}

  //   const formik = useFormik({
  //     initialValues: {
  //         imgUrl: '',
  //         eventname: '',
  //         date: '',

  //     },
  //     onSubmit: async (values) => {
  //         try {
  //             await axios.put(`http://localhost:5000/api/hospitalUser/${params.id}`, values)
  //             navigate("/admindashboard")
  //         } catch (error) {
  //             console.log(error)
  //         }
  //     }
  // })

  return (
    <>
        <h1>View Hospital Details</h1>
      
            
                <label>Hospital Name :</label>
              <input value={user && user.hospitalName} disabled="disabled"/>
  
              <label>HospitalMobileNumber :</label>
              <input value={user && user.HospitalMobileNumber} disabled="disabled"/>
  
              <label> clinicalEstablishmentNumber :</label>
              <input value={user && user.clinicalEstablishmentNumber}  disabled="disabled"/>
  
              <label >HospitalRegistrationNumber :</label>
              <input value={user && user.HospitalRegistrationNumber } disabled="disabled"/>
  
  
              <label > NumberOfDoctors :</label>
              <input value={user && user.NumberOfDoctors}  disabled="disabled"/>
  
              <label>NumberOfBeds :</label>
              <input value={user && user.NumberOfBeds}  disabled="disabled"/>

              <label>DoctorName :</label>
              <input value={user.UPDTDS && user.UPDTDS.name}  disabled="disabled"/>

              <label>Date of birth:</label>
              <input value={user.UPDTDS && user.UPDTDS.dob}  disabled="disabled"/>

              <label>DoctorRegisterNumber :</label>
              <input value={user.UPDTDS && user.UPDTDS.doctorRegNumber}  disabled="disabled"/>

              <label>RegisteredState :</label>
              <input value={user.UPDTDS && user.UPDTDS.registeredState}  disabled="disabled"/>
              
              <label>AcknowledgementNumber :</label>
              <input value={user.UPDTDS && user.UPDTDS.acknowledgementNumber}  disabled="disabled"/>

              <label>HighestQualification :</label>
              <input value={user.UPDTDS && user.UPDTDS.highestQualification}  disabled="disabled"/>
            
            
              <label>Date of Graduation :</label>
              <input value={user.UPDTDS && user.UPDTDS.dog}  disabled="disabled"/>

              <label>Experience :</label>
              <input value={user.UPDTDS && user.UPDTDS.experience}  disabled="disabled"/>
  
         
         
</>
  )
}

export default ViewHospitalDetails