import React from "react";
import "../styles/Sidenav.css";
import { Link, useHistory } from "react-router-dom";

function Sidenav() {
  const history = useHistory();
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    history.push("/");
  };
  return (
    <div className="sidebar">
      <div className="contents">
        <img
          src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt="joan"
        />
        <Link class="nav-link active" to="home">
          {/* <a class="nav-link active" aria-current="page" href="#"> */}
          Profile
        </Link>
        <Link class="nav-link" to="blog">
          {/* <a href="#"> */}
          Blog
        </Link>
        <Link class="nav-link" to="application">
          Application
        </Link>
        <p onClick={(e) => logout(e)}>Log out</p>
      </div>
    </div>
  );
}

export default Sidenav;
