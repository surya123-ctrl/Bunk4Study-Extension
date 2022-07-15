import React from "react";
import "../style/Question.css";
import { Link } from "react-router-dom";

const KUN = () => {
  return (
    <div style={{ backgroundColor: "#Dbe6ea" }}>
      <h1 class="mb-1">
        <b>Kurukshetra University Notes</b>
        <div class="spinner-grow text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </h1>
      <div className="Branch">
        <Link to={"/CseBranchKUN"}>
          <button type="button" class="btn btn-primary">
            Computer Science Engineering
          </button>
        </Link>

        <Link to={"/EceBranchKUN"}>
          <button type="button" class="btn btn-success">
            Electronics & Communications Engineering
          </button>
        </Link>

        <Link to={"/MeBranchKUN"}>
          <button type="button" class="btn btn-danger">
            Mechanical Engineering
          </button>
        </Link>

        <Link to={"/EeBranchKUN"}>
          <button type="button" class="btn btn-secondary">
            Electrical Engineering
          </button>
        </Link>

        <Link to={"/CeBranchKUN"}>
          <button type="button" class="btn btn-info">
            Civil Engineering
          </button>
        </Link>

        <Link to={"/BeBranchKUN"}>
          <button type="button" class="btn btn-warning">
            Bio - Tech Engineering
          </button>
        </Link>
        
      </div>
    </div>
  );
};

export default KUN;
