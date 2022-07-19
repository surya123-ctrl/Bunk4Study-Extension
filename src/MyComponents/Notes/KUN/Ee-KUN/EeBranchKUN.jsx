import React from "react";
import "..//..//..//Branch/Style/Branch.css";
import { Link } from "react-router-dom";

const EeBranchKUN = () => {
  return (
    <div style={{ backgroundColor: "#Dbe6ea" }}>
      <h1>
        Electrical Engineering's Semester-wise Papers
        <div class="spinner-grow text-secondary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </h1>

      <div className="sem">
        <Link to={"/EeSem1KUN"}>
          <button type="button" class="btn btn-outline-secondary">
            Semester 1
          </button>
        </Link>

        <Link to={"/EeSem2KUN"}>
          <button type="button" class="btn btn-outline-secondary">
            Semester 2
          </button>
        </Link>

        <Link to={"/EeSem3KUN"}>
          <button type="button" class="btn btn-outline-secondary">
            Semester 3
          </button>
        </Link>

        <Link to={"/EeSem4KUN"}>
          <button type="button" class="btn btn-outline-secondary">
            Semester 4
          </button>
        </Link>

        <Link to={"/EeSem5KUN"}>
          <button type="button" class="btn btn-outline-secondary">
            Semester 5
          </button>
        </Link>

        <Link to={"/EeSem6KUN"}>
          <button type="button" class="btn btn-outline-secondary">
            Semester 6
          </button>
        </Link>

        <Link to={"/EeSem7KUN"}>
          <button type="button" class="btn btn-outline-secondary">
            Semester 7
          </button>
        </Link>

        <Link to={"/EeSem8KUN"}>
          <button type="button" class="btn btn-outline-secondary">
            Semester 8
          </button>
        </Link>


      </div>
    </div>
  );
};

export default EeBranchKUN;
