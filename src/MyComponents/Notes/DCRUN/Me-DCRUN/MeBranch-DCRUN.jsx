import React from "react";
import "..//..//..//Branch/Style/Branch.css";
import { Link } from "react-router-dom";

const MeBranchDCRUN = () => {
  return (
    <div style={{ backgroundColor: "#Dbe6ea" }}>
      <h1>
        Mechanical Engineering's Semester-wise Papers
        <div class="spinner-grow text-danger" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </h1>

      <div className="sem">
        <Link to={"/MeSem1DCRUN"}>
          <button type="button" class="btn btn-outline-danger">
            Semester 1
          </button>
        </Link>

        <Link to={"/MeSem2DCRUN"}>
          <button type="button" class="btn btn-outline-danger">
            Semester 2
          </button>
        </Link>

        <Link to={"/MeSem3DCRUN"}>
          <button type="button" class="btn btn-outline-danger">
            Semester 3
          </button>
        </Link>

        <Link to={"/MeSem4DCRUN"}>
          <button type="button" class="btn btn-outline-danger">
            Semester 4
          </button>
        </Link>

        <Link to={"/MeSem5DCRUN"}>
          <button type="button" class="btn btn-outline-danger">
            Semester 5
          </button>
        </Link>

        <Link to={"/MeSem6DCRUN"}>
          <button type="button" class="btn btn-outline-danger">
            Semester 6
          </button>
        </Link>

        <Link to={"/MeSem7DCRUN"}>
          <button type="button" class="btn btn-outline-danger">
            Semester 7
          </button>
        </Link>

        <Link to={"/MeSem8DCRUN"}>
          <button type="button" class="btn btn-outline-danger">
            Semester 8
          </button>
        </Link>


      </div>
    </div>
  );
};

export default MeBranchDCRUN;
