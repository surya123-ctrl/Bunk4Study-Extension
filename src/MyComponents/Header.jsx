import React from "react";
import { NavLink } from "react-router-dom";
import navlogo from "../Images/navlogo.png";
import { Link } from "react-router-dom";
import Signin from "./Authintication/components/Signin";
import Signout from "./Authintication/Signout";

const Header = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid">
          <NavLink
            className="navbar-brand d-flex justify-content-start me-auto fw-bold"
            to="/"
          >
            <img
              src={navlogo}
              alt="op"
              width="150"
              height="200"
              className="d-inline-block align-text-top"
            />
            Bunk4Study
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bx bx-menu open fw-bold text-dark"></i>
            <i className="bx bx-x close fw-bold text-dark"></i>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link me-2" exact="true" to="/" >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link me-2" to="About">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link me-2" to="Question">
                  Question
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link me-2" to="Notes">
                  Notes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link me-2" to="ContactUs">
                  ContactUs
                </NavLink>
              </li>
            </ul>
            <i
              className="bi bi-bell-fill text-dark me-3 fs-2 mx-4 d-inline-block align-text-top"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            ></i>

            {props.User ? (
              <NavLink to="Signout">
                <i className="bx bx-user-check text-dark me-3 fs-2  d-inline-block align-text-top"></i>
              </NavLink>
            ) : (
              <NavLink to="Signin">
                <i className="bx bx-user text-dark me-3 fs-2  d-inline-block align-text-top"></i>
              </NavLink>
            )}
          </div>
        </div>
      </nav>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
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
              1. Go To Event Page For Some Amazing Giveaway
            </Link>
            <span class="badge bg-danger">New</span>
          </h6>
          <h6>2. Every Month 5 Tshirt Giveaway</h6>
          <h6>3. CSE Semester 1 Question Paper Uploaded</h6>
          <h6>4. CSE Semester 2 Question Paper Uploaded</h6>
        </div>
      </div>
    </>
  );
};
export default Header;
