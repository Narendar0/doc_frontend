import React from "react";
import { Link } from "react-router-dom";


function AdminDashboard() {

  const handleLogout = () => {
    localStorage.removeItem("my_token");
  };

  return (
    <>
      <div id="wrapper">
        <div id="content-wrapper" className="d-flex flex-column userdata">
          <div id="content">
            <div
              className="d-sm-flex justify-content-between mb-3 sticky-top"
              style={{ background: "black", padding: "20px" }}
            >
              <h1 className="h3 mb-0" style={{ color: "white" }}>
                Doctor On Board Admin
              </h1>
              <Link className="nav-link collapsed " to="/" data-toggle="collapse" data-target="#collapseTwo"aria-expanded="true" aria-controls="collapseTwo"
              >
                <i className="fas fa-fw fa-sign-out" style={{ color: "white" }}></i>
                <span onClick={handleLogout}>Logout</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="login">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="card">
            <img src="https://placehold.co/200x100" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">OwnClinic List</h5>
                <p className="card-text">
                  Here the Hospital Details available Approve or Reject action
                  Required
                </p>
                <a href={"/ownclinicList"} className="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="card">
            <img src="https://placehold.co/200x100" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Hospital / Polyclinic / Nursing home List</h5>
                <p className="card-text">
                  Here the Hospital Details available Approve or Reject action
                  Required
                </p>
                <a href={"/hospitalList"} className="btn btn-primary">
                View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
