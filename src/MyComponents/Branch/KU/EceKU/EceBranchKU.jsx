import React from "react";
import "..//..//Style/Branch.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


const EceBranchKU = () => {
  return (
    <div style={{ backgroundColor: "#Dbe6ea" }}>
    <Helmet>
        <title>EceBranchKU</title>
        <meta name="description" content="KU's Electronics & Communications Engineering's Semester-wise Papers" />
      </Helmet>
      <h1>
        Electronics & Communications Engineering's Semester-wise Papers
        <div class="spinner-grow text-success" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </h1>

      <div className="sem">
        <Link to={"/EceSem1KU"}>
          <button type="button" class="btn btn-outline-success">
            Semester 1
          </button>
        </Link>

        <Link to={"/EceSem2KU"}>
          <button type="button" class="btn btn-outline-success">
            Semester 2
          </button>
        </Link>

        <Link to={"/EceSem3KU"}>
          <button type="button" class="btn btn-outline-success">
            Semester 3
          </button>
        </Link>

        <Link to={"/EceSem4KU"}>
          <button type="button" class="btn btn-outline-success">
            Semester 4
          </button>
        </Link>

        <Link to={"/EceSem5KU"}>
          <button type="button" class="btn btn-outline-success">
            Semester 5
          </button>
        </Link>

        <Link to={"/EceSem6KU"}>
          <button type="button" class="btn btn-outline-success">
            Semester 6
          </button>
        </Link>

        <Link to={"/EceSem7KU"}>
          <button type="button" class="btn btn-outline-success">
            Semester 7
          </button>
        </Link>

        <Link to={"/EceSem8KU"}>
          <button type="button" class="btn btn-outline-success">
            Semester 8
          </button>
        </Link>


      </div>
    </div>
  );
};

export default EceBranchKU;
