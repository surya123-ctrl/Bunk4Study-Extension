import React from "react";
import "..//..//Style/Branch.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const EeBranchCDLU = () => {
  return (
    <div style={{ backgroundColor: "#Dbe6ea" }}>
     <Helmet>
        <title>EeBranchCDLU</title>
        <meta name="description" content="CDLU's Electrical Engineering's Semester-wise Papers" />
      </Helmet>
      <h1>
        Electrical Engineering's Semester-wise Papers
        <div class="spinner-grow text-secondary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </h1>

      <div className="sem">
        <Link to={"/EeSem1CDLU"}>
          <button type="button" class="btn btn-outline-secondary">
            Semester 1
          </button>
        </Link>

        <Link to={"/EeSem2CDLU"}>
          <button type="button" class="btn btn-outline-secondary">
            Semester 2
          </button>
        </Link>

        <Link to={"/EeSem3CDLU"}>
          <button type="button" class="btn btn-outline-secondary">
            Semester 3
          </button>
        </Link>

        <Link to={"/EeSem4CDLU"}>
          <button type="button" class="btn btn-outline-secondary">
            Semester 4
          </button>
        </Link>

        <Link to={"/EeSem5CDLU"}>
          <button type="button" class="btn btn-outline-secondary">
            Semester 5
          </button>
        </Link>

        <Link to={"/EeSem6CDLU"}>
          <button type="button" class="btn btn-outline-secondary">
            Semester 6
          </button>
        </Link>

        <Link to={"/EeSem7CDLU"}>
          <button type="button" class="btn btn-outline-secondary">
            Semester 7
          </button>
        </Link>

        <Link to={"/EeSem8CDLU"}>
          <button type="button" class="btn btn-outline-secondary">
            Semester 8
          </button>
        </Link>


      </div>
    </div>
  );
};

export default EeBranchCDLU;
