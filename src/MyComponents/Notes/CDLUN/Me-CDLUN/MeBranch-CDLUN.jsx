import React from "react";
import "..//..//..//Branch/Style/Branch.css";
import { Link } from "react-router-dom";

const MeBranchCDLUN = () => {
  return (
    <div style={{ backgroundColor: "#Dbe6ea" }}>
      <h1>
        Mechanical Engineering's Semester-wise Papers
        <div class="spinner-grow text-danger" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </h1>

      <div className="sem">
        <Link to={"/MeSem1CDLUN"}>
          <button type="button" class="btn btn-outline-danger">
            Semester 1
          </button>
        </Link>

        <Link to={"/MeSem2CDLUN"}>
          <button type="button" class="btn btn-outline-danger">
            Semester 2
          </button>
        </Link>

        <Link to={"/MeSem3CDLUN"}>
          <button type="button" class="btn btn-outline-danger">
            Semester 3
          </button>
        </Link>

        <Link to={"/MeSem4CDLUN"}>
          <button type="button" class="btn btn-outline-danger">
            Semester 4
          </button>
        </Link>

        <Link to={"/MeSem5CDLUN"}>
          <button type="button" class="btn btn-outline-danger">
            Semester 5
          </button>
        </Link>

        <Link to={"/MeSem6CDLUN"}>
          <button type="button" class="btn btn-outline-danger">
            Semester 6
          </button>
        </Link>

        <Link to={"/MeSem7CDLUN"}>
          <button type="button" class="btn btn-outline-danger">
            Semester 7
          </button>
        </Link>

        <Link to={"/MeSem8CDLUN"}>
          <button type="button" class="btn btn-outline-danger">
            Semester 8
          </button>
        </Link>


      </div>
    </div>
  );
};

export default MeBranchCDLUN;
