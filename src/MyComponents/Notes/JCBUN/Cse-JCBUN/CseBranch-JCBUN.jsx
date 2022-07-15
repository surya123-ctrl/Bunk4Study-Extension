import React from "react";
import "..//..//..//Branch/Style/Branch.css";
import { Link } from "react-router-dom";

const CseBranchJCBUN = () => {
  return (
    <div style={{ backgroundColor: "#Dbe6ea" }}>
      <h1>
        CSE's Semester-wise Papers
        <div class="spinner-grow text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </h1>

      <div className="sem">
        <Link to={"/CseSem1JCBUN"}>
          <button type="button" class="btn btn-outline-primary">
            Semester 1
          </button>
        </Link>

        <Link to={"/CseSem2JCBUN"}>
          <button type="button" class="btn btn-outline-primary">
            Semester 2
          </button>
        </Link>

        <Link to={"/CseSem3JCBUN"}>
          <button type="button" class="btn btn-outline-primary">
            Semester 3
          </button>
        </Link>

        <Link to={"/CseSem4JCBUN"}>
          <button type="button" class="btn btn-outline-primary">
            Semester 4
          </button>
        </Link>

        <Link to={"/CseSem5JCBUN"}>
          <button type="button" class="btn btn-outline-primary">
            Semester 5
          </button>
        </Link>

        <Link to={"/CseSem6JCBUN"}>
          <button type="button" class="btn btn-outline-primary">
            Semester 6
          </button>
        </Link>

        <Link to={"/CseSem7JCBUN"}>
          <button type="button" class="btn btn-outline-primary">
            Semester 7
          </button>
        </Link>

        <Link to={"/CseSem8JCBUN"}>
          <button type="button" class="btn btn-outline-primary">
            Semester 8
          </button>
        </Link>


      </div>
    </div>
  );
};

export default CseBranchJCBUN;
