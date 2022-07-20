import React from "react";
import "..//..//Style/Branch.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


const CseBranchMDU = () => {
  return (
    <div style={{ backgroundColor: "#Dbe6ea" }}>
    <Helmet>
        <title>CseBranchMDU</title>
        <meta name="description" content="MDU's CSE's Semester-wise Papers" />
      </Helmet>
      <h1>
        CSE's Semester-wise Papers
        <div class="spinner-grow text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </h1>

      <div className="sem">
        <Link to={"/CseSem1MDU"}>
          <button type="button" class="btn btn-outline-primary">
            Semester 1
          </button>
        </Link>

        <Link to={"/CseSem2MDU"}>
          <button type="button" class="btn btn-outline-primary">
            Semester 2
          </button>
        </Link>

        <Link to={"/CseSem3MDU"}>
          <button type="button" class="btn btn-outline-primary">
            Semester 3
          </button>
        </Link>

        <Link to={"/CseSem4MDU"}>
          <button type="button" class="btn btn-outline-primary">
            Semester 4
          </button>
        </Link>

        <Link to={"/CseSem5MDU"}>
          <button type="button" class="btn btn-outline-primary">
            Semester 5
          </button>
        </Link>

        <Link to={"/CseSem6MDU"}>
          <button type="button" class="btn btn-outline-primary">
            Semester 6
          </button>
        </Link>

        <Link to={"/CseSem7MDU"}>
          <button type="button" class="btn btn-outline-primary">
            Semester 7
          </button>
        </Link>

        <Link to={"/CseSem8MDU"}>
          <button type="button" class="btn btn-outline-primary">
            Semester 8
          </button>
        </Link>


      </div>
    </div>
  );
};

export default CseBranchMDU;
