import React from "react";
import "..//..//Style/Branch.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const MeBranchDCRU = () => {
  return (
    <div style={{ backgroundColor: "#Dbe6ea" }}>
    <Helmet>
        <title>MeBranchDCRU</title>
        <meta name="description" content="DCRU's Mechanical Engineering's Semester-wise Papers" />
      </Helmet>
      <h1>
        Mechanical Engineering's Semester-wise Papers
        <div class="spinner-grow text-danger" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </h1>

      <div className="sem">
        <Link to={"/MeSem1DCRU"}>
          <button type="button" class="btn btn-outline-danger">
            Semester 1
          </button>
        </Link>

        <Link to={"/MeSem2DCRU"}>
          <button type="button" class="btn btn-outline-danger">
            Semester 2
          </button>
        </Link>

        <Link to={"/MeSem3DCRU"}>
          <button type="button" class="btn btn-outline-danger">
            Semester 3
          </button>
        </Link>

        <Link to={"/MeSem4DCRU"}>
          <button type="button" class="btn btn-outline-danger">
            Semester 4
          </button>
        </Link>

        <Link to={"/MeSem5DCRU"}>
          <button type="button" class="btn btn-outline-danger">
            Semester 5
          </button>
        </Link>

        <Link to={"/MeSem6DCRU"}>
          <button type="button" class="btn btn-outline-danger">
            Semester 6
          </button>
        </Link>

        <Link to={"/MeSem7DCRU"}>
          <button type="button" class="btn btn-outline-danger">
            Semester 7
          </button>
        </Link>

        <Link to={"/MeSem8DCRU"}>
          <button type="button" class="btn btn-outline-danger">
            Semester 8
          </button>
        </Link>


      </div>
    </div>
  );
};

export default MeBranchDCRU;
