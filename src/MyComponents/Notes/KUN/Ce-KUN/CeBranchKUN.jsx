import React from "react";
import "..//..//..//Branch/Style/Branch.css";
import { Link } from "react-router-dom";

const CeBranchKUN = () => {
  return (
    <div style={{ backgroundColor: "#Dbe6ea" }}>
      <h1>
        Civil Engineering's Semester-wise Papers
        <div class="spinner-grow text-info" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </h1>

      <div className="sem">
        <Link to={"/CeSem1KUN"}>
          <button type="button" class="btn btn-outline-info">
            Semester 1
          </button>
        </Link>

        <Link to={"/CeSem2KUN"}>
          <button type="button" class="btn btn-outline-info">
            Semester 2
          </button>
        </Link>

        <Link to={"/CeSem3KUN"}>
          <button type="button" class="btn btn-outline-info">
            Semester 3
          </button>
        </Link>

        <Link to={"/CeSem4KUN"}>
          <button type="button" class="btn btn-outline-info">
            Semester 4
          </button>
        </Link>

        <Link to={"/CeSem5KUN"}>
          <button type="button" class="btn btn-outline-info">
            Semester 5
          </button>
        </Link>

        <Link to={"/CeSem6KUN"}>
          <button type="button" class="btn btn-outline-info">
            Semester 6
          </button>
        </Link>

        <Link to={"/CeSem7KUN"}>
          <button type="button" class="btn btn-outline-info">
            Semester 7
          </button>
        </Link>

        <Link to={"/CeSem8KUN"}>
          <button type="button" class="btn btn-outline-info">
            Semester 8
          </button>
        </Link>


      </div>
    </div>
  );
};

export default CeBranchKUN;
