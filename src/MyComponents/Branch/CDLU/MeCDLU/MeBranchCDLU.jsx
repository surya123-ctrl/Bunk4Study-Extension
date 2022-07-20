import React from "react";
import "..//..//Style/Branch.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const MeBranchCDLU = () => {
  return (
    <div style={{ backgroundColor: "#Dbe6ea" }}>
    <Helmet>
        <title>MeBranchCDLU</title>
        <meta name="description" content="CDLU's Mechanical Engineering's Semester-wise Papers" />
      </Helmet>
      <h1>
        Mechanical Engineering's Semester-wise Papers
        <div class="spinner-grow text-danger" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </h1>

      <div className="sem">
        <Link to={"/MeSem1CDLU"}>
          <button type="button" class="btn btn-outline-danger">
            Semester 1
          </button>
        </Link>

        <Link to={"/MeSem2CDLU"}>
          <button type="button" class="btn btn-outline-danger">
            Semester 2
          </button>
        </Link>

        <Link to={"/MeSem3CDLU"}>
          <button type="button" class="btn btn-outline-danger">
            Semester 3
          </button>
        </Link>

        <Link to={"/MeSem4CDLU"}>
          <button type="button" class="btn btn-outline-danger">
            Semester 4
          </button>
        </Link>

        <Link to={"/MeSem5CDLU"}>
          <button type="button" class="btn btn-outline-danger">
            Semester 5
          </button>
        </Link>

        <Link to={"/MeSem6CDLU"}>
          <button type="button" class="btn btn-outline-danger">
            Semester 6
          </button>
        </Link>

        <Link to={"/MeSem7CDLU"}>
          <button type="button" class="btn btn-outline-danger">
            Semester 7
          </button>
        </Link>

        <Link to={"/MeSem8CDLU"}>
          <button type="button" class="btn btn-outline-danger">
            Semester 8
          </button>
        </Link>


      </div>
    </div>
  );
};

export default MeBranchCDLU;
