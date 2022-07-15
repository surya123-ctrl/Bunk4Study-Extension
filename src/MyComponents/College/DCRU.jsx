import React from "react";
import "../style/Question.css";
import { Link } from "react-router-dom";

const DCRU = () => {
  return (
    <div style={{ backgroundColor: "#Dbe6ea" }}>
      <h1 class="mb-1">
        <b>Deenbandhu Chhotu Ram University</b>
        <div class="spinner-grow text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </h1>
      <div className="Branch">
        <Link to={"/CseBranchDCRU"}>
          <button type="button" class="btn btn-primary">
            Computer Science Engineering
          </button>
        </Link>

        <Link to={"/EceBranchDCRU"}>
          <button type="button" class="btn btn-success">
            Electronics & Communications Engineering
          </button>
        </Link>

        <Link to={"/MeBranchDCRU"}>
          <button type="button" class="btn btn-danger">
            Mechanical Engineering
          </button>
        </Link>

        <Link to={"/EeBranchDCRU"}>
          <button type="button" class="btn btn-secondary">
            Electrical Engineering
          </button>
        </Link>

        <Link to={"/CeBranchDCRU"}>
          <button type="button" class="btn btn-info">
            Civil Engineering
          </button>
        </Link>

        <Link to={"/BeBranchDCRU"}>
          <button type="button" class="btn btn-warning">
            Bio - Tech Engineering
          </button>
        </Link>
        
      </div>
    </div>
  );
};

export default DCRU;
