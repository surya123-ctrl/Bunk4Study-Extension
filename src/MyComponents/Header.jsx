import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../MyComponents/style/Navbar.css";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import Signin from "./Authintication/components/Signin";
// eslint-disable-next-line no-unused-vars
import Signout from "./Authintication/Signout";

function NavBar(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink
            className="navbar-brand d-flex justify-content-start me-auto fw-bold"
            to="/"
          >
            <img
              src="https://i.imgur.com/8w7Vp9R.png"
              alt="op"
              width="150"
              height="200"
              className="d-inline-block align-text-top"
            />
            Bunk4Study
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-link me-2"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-link me-2"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/question"
                activeClassName="active"
                className="nav-link me-2"
                onClick={handleClick}
              >
                Question
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/notes"
                activeClassName="active"
                className="nav-link me-2"
                onClick={handleClick}
              >
                Notes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contactus"
                activeClassName="active"
                className="nav-link me-2"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
            <i
              id="bell"
              className="bi bi-bell-fill text-dark me-3 fs-2 mx-4 d-inline-block align-text-top"
              onClick={handleClick}
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            ></i>

            {handleClick.User || props.User ? (
              <NavLink
                to="Signout"
                activeClassName="active"
                className="nav-link me-2"
                onClick={handleClick}
              >
                <i
                  id="userlog"
                  className="bx bx-user-check text-dark me-3 fs-2  d-inline-block align-text-top"
                ></i>
              </NavLink>
            ) : (
              <NavLink
                to="Signin"
                activeClassName="active"
                className="nav-link me-2"
                onClick={handleClick}
              >
                <i
                  id="userlog"
                  className="bx bx-user text-dark me-3 fs-2  d-inline-block align-text-top"
                ></i>
              </NavLink>
            )}
            {/* 

            {props.User ? (
              <NavLink to="Signout" title="Signout" activeClassName="active" className="nav-link me-2">
                <i id="userlog" className="bx bx-user-check text-dark me-3 fs-2  d-inline-block align-text-top"></i>
              </NavLink>
            ) : (
              <NavLink to="Signin" title="Signin" activeClassName="active" className="nav-link me-2">
                <i id="userlog" className="bx bx-user text-dark me-3 fs-2  d-inline-block align-text-top"></i>
              </NavLink>
            )} */}
          </ul>

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        style={{ backgroundColor: "#Dbe6ea" }}
      >
        <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel">Notifications</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <h6>
            <Link to={"/Event"}>
              * Go To Event Page For Some Amazing Giveaway
            </Link>
            <span class="badge bg-danger">New</span>
          </h6>
          <h6>* Every Month 5 Tshirt Giveaway</h6>
          <h6>* MDU CSE all semester paper are uploaded</h6>
          <h6>* KU is added</h6>
          <h6>* CDLU is added</h6>
          <h6>* DCRU is added</h6>
          <h6>* GJU is added</h6>
          <h6>* JCBU is added</h6>
          <h6>
            * Contribute to our site by uploading question papers and notes{" "}
            <Link to={"/upload"}>"Click Here"</Link>
          </h6>
        </div>
      </div>
    </>
  );
}
export default NavBar;
