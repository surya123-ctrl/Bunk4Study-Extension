import React from "react";
import "..//..//Style/Branch.css";
import { Link } from "react-router-dom";

const BeBranchJCBU = () => {
  return (
    <div style={{ backgroundColor: "#Dbe6ea" }}>
      <h1>
        Bio - Tech Engineering's Semester-wise Papers
        <div class="spinner-grow text-warning" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </h1>

      <div className="sem">
        <Link to={"/BeSem1JCBU"}>
          <button type="button" class="btn btn-warning">
            Semester 1
          </button>
        </Link>

        <Link to={"/BeSem2JCBU"}>
          <button type="button" class="btn btn-warning">
            Semester 2
          </button>
        </Link>

        <Link to={"/BeSem3JCBU"}>
          <button type="button" class="btn btn-warning">
            Semester 3
          </button>
        </Link>

        <Link to={"/BeSem4JCBU"}>
          <button type="button" class="btn btn-warning">
            Semester 4
          </button>
        </Link>

        <Link to={"/BeSem5JCBU"}>
          <button type="button" class="btn btn-warning">
            Semester 5
          </button>
        </Link>

        <Link to={"/BeSem6JCBU"}>
          <button type="button" class="btn btn-warning">
            Semester 6
          </button>
        </Link>

        <Link to={"/BeSem7JCBU"}>
          <button type="button" class="btn btn-warning">
            Semester 7
          </button>
        </Link>

        <Link to={"/BeSem8JCBU"}>
          <button type="button" class="btn btn-warning">
            Semester 8
          </button>
        </Link>


      </div>
    </div>
  );
};

export default BeBranchJCBU;
