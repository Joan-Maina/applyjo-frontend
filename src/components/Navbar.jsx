import React, { useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
import Sidenav from "./Sidenav";
import "../App.css";

function Navbar() {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    history.push("/");
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          {/* <Link class="navbar-brand" to="home"> */}
          {/* <a class="navbar-brand" href="home"> */}
          <h2 className="navbar-brand">Apply</h2>
          {/* </Link> */}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => handleShow()}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <NavLink
                className="navlink"
                activeClassName="active"
                to={"/home"}
              >
                <h5>Profile</h5>
              </NavLink>
              <NavLink
                className="navlink"
                activeClassName="active"
                to={"/blog"}
              >
                Blog
              </NavLink>
              <NavLink
                className="navlink"
                activeClassName="active"
                to={"/appplication"}
              >
                Application
              </NavLink>
              <button className="logout" onClick={(e) => logout(e)}>
                Log out
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="sidenav">
        {show && (
          <div className="side">
            <Sidenav />
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
