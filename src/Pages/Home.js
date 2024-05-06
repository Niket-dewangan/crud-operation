import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
export default function Home() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);
  const {roll} = useParams()
  const loadUser = async () => {
    const result = await axios.get("http://localhost:8080/users/");
    console.log(result)
    setUser(result.data);
  };


  const deleteUser = async (roll) => {
    console.log(roll)
    await axios.delete(`http://localhost:8080/users/${roll}`)
    loadUser();
  }

  return (
    <>
      <div className="container">
        <div className="py-4">
          <table class="table border shadow">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {user.map((user, index) => (
                <tr>
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                  <td>{user.fname}</td>
                  <td>{user.lname}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link  className="btn btn-primary mx-3"
                    to={`/viewuser/${user.roll}`}
                    >View</Link>
                    <Link className="btn btn-outline-primary mx-3"
                      to={`/edituser/${user.roll}`}
                    >Edit</Link>
                    <button onClick={()=>deleteUser(user.roll)} className="btn btn-danger mx-3">Delete</button>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
