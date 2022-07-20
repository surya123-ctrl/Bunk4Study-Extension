import React from "react";
import "..//..//Style/Branch.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


const CeBranchJCBU = () => {
  return (
    <div style={{ backgroundColor: "#Dbe6ea" }}>
    <Helmet>
        <title>CeBranchJCBU</title>
        <meta name="description" content="JCBU's Civil Engineering's Semester-wise Papers" />
      </Helmet>
      <h1>
        Civil Engineering's Semester-wise Papers
        <div class="spinner-grow text-info" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </h1>

      <div className="sem">
        <Link to={"/CeSem1JCBU"}>
          <button type="button" class="btn btn-outline-info">
            Semester 1
          </button>
        </Link>

        <Link to={"/CeSem2JCBU"}>
          <button type="button" class="btn btn-outline-info">
            Semester 2
          </button>
        </Link>

        <Link to={"/CeSem3JCBU"}>
          <button type="button" class="btn btn-outline-info">
            Semester 3
          </button>
        </Link>

        <Link to={"/CeSem4JCBU"}>
          <button type="button" class="btn btn-outline-info">
            Semester 4
          </button>
        </Link>

        <Link to={"/CeSem5JCBU"}>
          <button type="button" class="btn btn-outline-info">
            Semester 5
          </button>
        </Link>

        <Link to={"/CeSem6JCBU"}>
          <button type="button" class="btn btn-outline-info">
            Semester 6
          </button>
        </Link>

        <Link to={"/CeSem7JCBU"}>
          <button type="button" class="btn btn-outline-info">
            Semester 7
          </button>
        </Link>

        <Link to={"/CeSem8JCBU"}>
          <button type="button" class="btn btn-outline-info">
            Semester 8
          </button>
        </Link>


      </div>
    </div>
  );
};

export default CeBranchJCBU;
