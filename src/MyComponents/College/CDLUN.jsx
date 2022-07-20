import React from "react";
import "../style/Question.css";
import { Link } from "react-router-dom";

const CDLUN = () => {
  return (
    <div style={{ backgroundColor: "#Dbe6ea" }}>
  
      <h1 class="mb-1">
        <b>Chaudhary Devi Lal University Notes</b>
        <div class="spinner-grow text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </h1>
      <div className="Branch">
        <Link to={"/CseBranchCDLUN"}>
          <button type="button" class="btn btn-primary">
            Computer Science Engineering
          </button>
        </Link>

        <Link to={"/EceBranchCDLUN"}>
          <button type="button" class="btn btn-success">
            Electronics & Communications Engineering
          </button>
        </Link>

        <Link to={"/MeBranchCDLUN"}>
          <button type="button" class="btn btn-danger">
            Mechanical Engineering
          </button>
        </Link>

        <Link to={"/EeBranchCDLUN"}>
          <button type="button" class="btn btn-secondary">
            Electrical Engineering
          </button>
        </Link>

        <Link to={"/CeBranchCDLUN"}>
          <button type="button" class="btn btn-info">
            Civil Engineering
          </button>
        </Link>

        <Link to={"/BeBranchCDLUN"}>
          <button type="button" class="btn btn-warning">
            Bio - Tech Engineering
          </button>
        </Link>
        
      </div>
    </div>
  );
};

export default CDLUN;
