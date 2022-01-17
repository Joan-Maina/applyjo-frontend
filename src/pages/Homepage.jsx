import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getusers } from "../redux/actions";
function Homepage() {
  const { user } = JSON.parse(localStorage.getItem("user"));
  const email = user.email;
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchusers = async (email) => {
      try {
        const { data } = await axios.post(
          "http://localhost:9000/users/getusers",
          { email }
        );
        dispatch(getusers(data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchusers(email);
  }, [dispatch]);
  const { users } = useSelector((state) => state.auth);

  return (
    <div className="homepage">
      <Navbar />

      {user.isAdmin ? (
        <div className="welcome">
          <h3>Admin panel</h3>
          <h4>{user.fullname}, are an admin.</h4>
          <p>USERS</p>
          {users?.map((user) => (
            <div key={user.email} className="user">
              <p>{user.email}</p>
              <p>{user.fullname}</p>
              <p>{user.username}</p>
              {user.isAdmin && <p>admin</p>}
              {user.employer && <p>employer</p>}

              <button className="delete">Delete</button>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="welcome">
            <p>
              hey {user.fullname}.<br></br>
              Welcome to Applyjo. <br></br>Looking for a job? You are at the
              right place.<br></br>
              Looking to just network with the right people? Absolutely at the
              right place
            </p>
          </div>
        </>
      )}

      {/* <Footer /> */}
    </div>
  );
}

export default Homepage;
