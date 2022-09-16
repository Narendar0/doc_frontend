import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function OwnClinicList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  let fetchUsers = async () => {
    try {
      let userData = await axios.get("http://localhost:5000/api/user");
      // console.log(userData);
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
                    <th>Name</th>
                    <th>AcknowledgementNumber</th>
                    <th>Identification Number</th>
                    <th>HighestQualification</th>
                    <th>Approved</th>
                  </tr>
                </thead>
                <tbody className="fw-bold color">
                  {users.map((user) => {
                    return (
                      <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>{user.acknowledgementNumber}</td>
                        <td>{user.identificationNumber}</td>
                        <td>{user.highestQualification}</td>

                        <td>
                        <Link to={`/viewuserdetails/${user._id}`}><button
                            className="btn btn-xs btn-success"
                            type="button">
                            View
                          </button></Link>
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

export default OwnClinicList;
