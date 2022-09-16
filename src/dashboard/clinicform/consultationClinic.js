import React from "react";
import axios from "axios";
import { useFormik} from "formik";
import { useNavigate  } from "react-router-dom";
import "./hospital.css";

function ConsultationClinic() {

  let myToken= sessionStorage.getItem("my_token");

  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      checked: "",
      fromTime: "",
      toTime: "",
      consultationFees: "",
      location: "",
      token : myToken


    },
    onSubmit : async (values) => {
      console.log(values);
      try {
        await axios.put("http://localhost:5000/api/user/userinfo", values);
        alert("Submitted Successfully")
        navigate("/uploadClinic");
      } catch (error) {
        console.log(error);
      }
    }}
  )

  return (
  <>
    
          <div className="login">
          <form className="loginForm"onSubmit={formik.handleSubmit}>
            <label >Checked</label >
            <div>
              <label>
                <input  type="checkbox" name="checked" value="mon"  onChange={formik.handleChange} />
                Mon
              </label>
              <label>
                <input type="checkbox" name="checked" value="tue" onChange={formik.handleChange} />
                Tue
              </label>
              <label>
                <input type="checkbox" name="checked" value="wed" onChange={formik.handleChange} />
                Wed
              </label>
              <label>
                <input type="checkbox" name="checked" value="thu" onChange={formik.handleChange} />
                Thu
              </label>
              <label>
                <input type="checkbox" name="checked" value="fri"  onChange={formik.handleChange}/>
                Fri
              </label>
              <label>
                <input type="checkbox" name="checked" value="sat"  onChange={formik.handleChange}/>
                Sat
              </label>
              <label>
                <input type="checkbox" name="checked" value="sun" onChange={formik.handleChange} />
                Sun
              </label>
              </div>

              <label>From</label>
              <input  className="loginInput" type="time" name="fromTime" onChange={formik.handleChange}  value={formik.values.fromTime}required/>
              <label>To</label>
              <input className="loginInput"type="time" name="toTime" onChange={formik.handleChange} value={formik.values.toTime} required />

              <label>OP Consultation Fees</label>
              <input className="loginInput" type="number" name="consultationFees"  onChange={formik.handleChange} value={formik.values.consultationFees}required/>

              <label>Location</label>
              <input  className="loginInput" type="text" name="location"  onChange={formik.handleChange} value={formik.values.location}required/>

            <button type="submit" className="loginButton"> Submit</button>
            </form>
          </div>
      </>
  );
}

export default ConsultationClinic;
