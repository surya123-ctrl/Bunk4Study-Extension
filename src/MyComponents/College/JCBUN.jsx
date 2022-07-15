import React from "react";
import "../style/Question.css";
import { Link } from "react-router-dom";

const JCBUN = () => {
  return (
    <div style={{ backgroundColor: "#Dbe6ea" }}>
      <h1 class="mb-1">
        <b>J.C. Bose University Notes</b>
        <div class="spinner-grow text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </h1>
      <div className="Branch">
        <Link to={"/CseBranchJCBUN"}>
          <button type="button" class="btn btn-primary">
            Computer Science Engineering
          </button>
        </Link>

        <Link to={"/EceBranchJCBUN"}>
          <button type="button" class="btn btn-success">
            Electronics & Communications Engineering
          </button>
        </Link>

        <Link to={"/MeBranchJCBUN"}>
          <button type="button" class="btn btn-danger">
            Mechanical Engineering
          </button>
        </Link>

        <Link to={"/EeBranchJCBUN"}>
          <button type="button" class="btn btn-secondary">
            Electrical Engineering
          </button>
        </Link>

        <Link to={"/CeBranchJCBUN"}>
          <button type="button" class="btn btn-info">
            Civil Engineering
          </button>
        </Link>

        <Link to={"/BeBranchJCBUN"}>
          <button type="button" class="btn btn-warning">
            Bio - Tech Engineering
          </button>
        </Link>
        
      </div>
    </div>
  );
};

export default JCBUN;
