import React from "react";
import "..//..//Style/Branch.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const EceBranchDCRU = () => {
  return (
    <div style={{ backgroundColor: "#Dbe6ea" }}>
     <Helmet>
        <title>EceBranchDCRU</title>
        <meta name="description" content="DCRU's Electronics & Communications Engineering's Semester-wise Papers" />
      </Helmet>
      <h1>
        Electronics & Communications Engineering's Semester-wise Papers
        <div class="spinner-grow text-success" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </h1>

      <div className="sem">
        <Link to={"/EceSem1DCRU"}>
          <button type="button" class="btn btn-outline-success">
            Semester 1
          </button>
        </Link>

        <Link to={"/EceSem2DCRU"}>
          <button type="button" class="btn btn-outline-success">
            Semester 2
          </button>
        </Link>

        <Link to={"/EceSem3DCRU"}>
          <button type="button" class="btn btn-outline-success">
            Semester 3
          </button>
        </Link>

        <Link to={"/EceSem4DCRU"}>
          <button type="button" class="btn btn-outline-success">
            Semester 4
          </button>
        </Link>

        <Link to={"/EceSem5DCRU"}>
          <button type="button" class="btn btn-outline-success">
            Semester 5
          </button>
        </Link>

        <Link to={"/EceSem6DCRU"}>
          <button type="button" class="btn btn-outline-success">
            Semester 6
          </button>
        </Link>

        <Link to={"/EceSem7DCRU"}>
          <button type="button" class="btn btn-outline-success">
            Semester 7
          </button>
        </Link>

        <Link to={"/EceSem8DCRU"}>
          <button type="button" class="btn btn-outline-success">
            Semester 8
          </button>
        </Link>


      </div>
    </div>
  );
};

export default EceBranchDCRU;
