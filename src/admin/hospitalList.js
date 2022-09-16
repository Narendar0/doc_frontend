import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HospitalList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  let fetchUsers = async () => {
    try {
      let userData = await axios.get("http://localhost:5000/api/hospitalUser");
      console.log(userData);
      setUsers(userData.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav className="bg-dark navbar-dark d-flex align-item-center justify-content-between">
        <Link to={"/admindashboard"} className="btn btn-primary">
          Go Back
        </Link>
      </nav>

      <section id="gallery">
        <div className="container mt-4">
          <div className="row">
            <div className="table-responsive">
              <table className="table text-center ">
                <thead className="table-dark ">
                  <tr>
                    <th>Hospital</th>
                    <th>DoctorName</th>
                    <th>RegistrationNumber</th>
                    <th>Location</th>
                    <th>Application status</th>
                  </tr>
                </thead>
                <tbody className="fw-bold color">
                  {users.map((user) => {
                    return (
                      <tr key={user._id}>
                        <td>{user.hospitalName}</td>
                        <td>{user.UPDTDS.name}</td>
                        <td>{user.UPDTDS.doctorRegNumber}</td>
                        <td>{user.UPDTDS.highestQualification}</td>
                        <td>
                          <Link to={`/viewhospitaldetails/${user._id}`}>
                            <button
                            className="btn btn-xs btn-success"
                            type="button">
                            View
                          </button>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HospitalList;
