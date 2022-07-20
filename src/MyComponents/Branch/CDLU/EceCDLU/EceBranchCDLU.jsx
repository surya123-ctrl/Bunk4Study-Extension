import React from "react";
import "..//..//Style/Branch.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const EceBranchCDLU = () => {
  return (
    <div style={{ backgroundColor: "#Dbe6ea" }}>
     <Helmet>
        <title>EceBranchCDLU</title>
        <meta name="description" content="CDLU's Electronics & Communications Engineering's Semester-wise Papers" />
      </Helmet>
      <h1>
        Electronics & Communications Engineering's Semester-wise Papers
        <div class="spinner-grow text-success" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </h1>

      <div className="sem">
        <Link to={"/EceSem1CDLU"}>
          <button type="button" class="btn btn-outline-success">
            Semester 1
          </button>
        </Link>

        <Link to={"/EceSem2CDLU"}>
          <button type="button" class="btn btn-outline-success">
            Semester 2
          </button>
        </Link>

        <Link to={"/EceSem3CDLU"}>
          <button type="button" class="btn btn-outline-success">
            Semester 3
          </button>
        </Link>

        <Link to={"/EceSem4CDLU"}>
          <button type="button" class="btn btn-outline-success">
            Semester 4
          </button>
        </Link>

        <Link to={"/EceSem5CDLU"}>
          <button type="button" class="btn btn-outline-success">
            Semester 5
          </button>
        </Link>

        <Link to={"/EceSem6CDLU"}>
          <button type="button" class="btn btn-outline-success">
            Semester 6
          </button>
        </Link>

        <Link to={"/EceSem7CDLU"}>
          <button type="button" class="btn btn-outline-success">
            Semester 7
          </button>
        </Link>

        <Link to={"/EceSem8CDLU"}>
          <button type="button" class="btn btn-outline-success">
            Semester 8
          </button>
        </Link>


      </div>
    </div>
  );
};

export default EceBranchCDLU;
