import React from 'react'
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";

function AdminLogin() {

  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: 'doctorsadmin@gmail.com',
      password: 'docsadmin'
    },
    onSubmit: async (values) => {
      try {
        navigate("/admindashboard")
      } catch (error) {
        console.log(error)
      }
    },

  });

  return (
    <>
      <div>

        <section className="vh-100 bg-success" >
          <div className="container-fluid py-3 h-100" id='adminlogin'>
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-xl-10">
                <div className="card " id='card' >
                  <div className="row g-0">
                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                      <img
                        src="https://blog.vantagecircle.com/content/images/size/w2000/2020/08/technology-in-the-workplace.png"
                        alt="login form"
                        className="img-fluid w-100 h-100"
                        id='loginimg'
                      />
                    </div>
                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                      <div className="card-body p-5 p-lg-5 text-black">

                        <form onSubmit={formik.handleSubmit}>

                          <div className="d-flex align-items-center mb-3 pb-1">
                            <span className="h1 fw-bold mb-0">Admin here</span>
                          </div>

                          <h5 className="fw-normal mb-3 pb-3" >Admin account</h5>

                          <div className="form-outline mb-4 pwd ">
                            <input type="email" className="form-control form-control-lg" placeholder='Email address' name='email' onChange={formik.handleChange}
                              value={formik.values.email} required />

                          </div>
                          <div className="form-outline mb-4 pwd ">

                            <input type="password" name='password' className="form-control form-control-lg" placeholder='password' onChange={formik.handleChange}
                              value={formik.values.password} required />

                          </div>
                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button type="submit" className="btn btn-primary btn-md mb-2">Admin login</button>
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
  )
}

export default AdminLogin