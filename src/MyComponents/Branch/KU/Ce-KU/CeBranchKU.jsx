import React from "react";
import "..//..//Style/Branch.css";
import { Link } from "react-router-dom";

const CeBranchKU = () => {
  return (
    <div style={{ backgroundColor: "#Dbe6ea" }}>
      <h1>
        Civil Engineering's Semester-wise Papers
        <div class="spinner-grow text-info" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </h1>

      <div className="sem">
        <Link to={"/CeSem1KU"}>
          <button type="button" class="btn btn-outline-info">
            Semester 1
          </button>
        </Link>

        <Link to={"/CeSem2KU"}>
          <button type="button" class="btn btn-outline-info">
            Semester 2
          </button>
        </Link>

        <Link to={"/CeSem3KU"}>
          <button type="button" class="btn btn-outline-info">
            Semester 3
          </button>
        </Link>

        <Link to={"/CeSem4KU"}>
          <button type="button" class="btn btn-outline-info">
            Semester 4
          </button>
        </Link>

        <Link to={"/CeSem5KU"}>
          <button type="button" class="btn btn-outline-info">
            Semester 5
          </button>
        </Link>

        <Link to={"/CeSem6KU"}>
          <button type="button" class="btn btn-outline-info">
            Semester 6
          </button>
        </Link>

        <Link to={"/CeSem7KU"}>
          <button type="button" class="btn btn-outline-info">
            Semester 7
          </button>
        </Link>

        <Link to={"/CeSem8KU"}>
          <button type="button" class="btn btn-outline-info">
            Semester 8
          </button>
        </Link>


      </div>
    </div>
  );
};

export default CeBranchKU;
