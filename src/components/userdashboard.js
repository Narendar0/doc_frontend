import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  let work = sessionStorage.getItem("work");
  let my_token = sessionStorage.getItem("my_token")


  const dashboard = async () => {
    try {
     axios.get("http://localhost:5000/api/auth/userdashboard",
        {  headers: {Authorization: window.sessionStorage.getItem("my_token")}  }
      );
      if(!my_token){
       alert("Token is not valid! Register Properly")
        navigate("/")
      }
    } catch (error) {
      console.log(error);
    }
  };






  
  useEffect(() => {
    dashboard();
  }, []);


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h3>Doctor On Board</h3>
      </nav>
      <h1>Complete Application</h1>
      <a href={ work === "Own Clinic" ? "/applicationClinic" : "/applicationHospital" }>
        Go to Application
      </a>
    </>
  );
}

export default Dashboard;
