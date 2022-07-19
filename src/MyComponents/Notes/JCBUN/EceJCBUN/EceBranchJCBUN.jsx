import React from "react";
import "..//..//..//Branch/Style/Branch.css";
import { Link } from "react-router-dom";

const EceBranchJCBUN = () => {
  return (
    <div style={{ backgroundColor: "#Dbe6ea" }}>
      <h1>
        Electronics & Communications Engineering's Semester-wise Papers
        <div class="spinner-grow text-success" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </h1>

      <div className="sem">
        <Link to={"/EceSem1JCBUN"}>
          <button type="button" class="btn btn-outline-success">
            Semester 1
          </button>
        </Link>

        <Link to={"/EceSem2JCBUN"}>
          <button type="button" class="btn btn-outline-success">
            Semester 2
          </button>
        </Link>

        <Link to={"/EceSem3JCBUN"}>
          <button type="button" class="btn btn-outline-success">
            Semester 3
          </button>
        </Link>

        <Link to={"/EceSem4JCBUN"}>
          <button type="button" class="btn btn-outline-success">
            Semester 4
          </button>
        </Link>

        <Link to={"/EceSem5JCBUN"}>
          <button type="button" class="btn btn-outline-success">
            Semester 5
          </button>
        </Link>

        <Link to={"/EceSem6JCBUN"}>
          <button type="button" class="btn btn-outline-success">
            Semester 6
          </button>
        </Link>

        <Link to={"/EceSem7JCBUN"}>
          <button type="button" class="btn btn-outline-success">
            Semester 7
          </button>
        </Link>

        <Link to={"/EceSem8JCBUN"}>
          <button type="button" class="btn btn-outline-success">
            Semester 8
          </button>
        </Link>


      </div>
    </div>
  );
};

export default EceBranchJCBUN;
