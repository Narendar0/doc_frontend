import React from "react";
import { useFormik } from "formik";
import axios from "axios"
import {useNavigate} from "react-router-dom"

function Login() {
    let navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            number: ""
        },
       
        onSubmit: async (values) => {
            await axios.post("http://localhost:5000/api/auth/login",values)
             .then(function (res){
             console.log(values)
             console.log(res.status)
             navigate("/otp")
            }).catch(function (error) {
                console.log(error)
            })
         },
    });
    return (
        <>
            <section >
                <div>
                    <h1>Sign In</h1>
                </div>
                <div>
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <label htmlFor="validation03">Phone number</label>
                            <input
                                type=""
                                name="number"
                                id="validation03"
                                className="form-control"
                                onChange={formik.handleChange}
                                value={formik.values.number}
                                placeholder="Phone Number"
                            />
                        </div>
                        {formik.touched.number&&formik.errors.number ? (<p>{formik.errors.number}</p>) :null }
                        <div>
                            <a href="/otp">
                                <button type="submit">Login</button>
                            </a>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Login;