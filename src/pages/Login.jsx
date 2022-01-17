import React, { useState, useEffect, useSelector } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import "../styles/Signup.css";
import { login } from "../redux/actions";
import { useHistory } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post("http://localhost:9000/users/login", {
        userDetails,
      });
      localStorage.setItem("user", JSON.stringify(data));

      setLoading(false);
      dispatch(login());
      history.push("/home");
    } catch (error) {
      setLoading(false);

      setError("error occurred");
    }
    console.log(error);
  };
  const handle = (e) => {
    const loginDetails = { ...userDetails };
    loginDetails[e.target.id] = e.target.value;
    setUserDetails(loginDetails);
  };
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user")) !== null) {
      dispatch(login());
    }
  }, []);

  return (
    <div className="signupform">
      <h1>LOG IN FORM</h1>
      {error !== null && <h4 style={{ color: "red" }}>{error}</h4>}

      <form onSubmit={(e) => submit(e)} className="loginform">
        <label htmlFor="email">Enter email</label>
        <input
          value={userDetails.email}
          id="email"
          placeholder="Enter email"
          type="text"
          required
          onChange={(e) => handle(e)}
        />
        <label htmlFor="password">Enter password</label>
        <input
          value={userDetails.password}
          id="password"
          placeholder="Enter password"
          type="password"
          required
          onChange={(e) => handle(e)}
        />
        {loading ? (
          <button style={{ backgroundColor: "greenyellow" }}>logging in</button>
        ) : (
          <button>LOG IN</button>
        )}
        <Link to="register">
          <h5>Go to register</h5>
        </Link>
      </form>
    </div>
  );
}

export default Login;
