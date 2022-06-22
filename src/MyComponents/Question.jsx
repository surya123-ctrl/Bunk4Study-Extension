import React from "react";
import "./style/Question.css";
import { Link } from "react-router-dom";

const Question = () => {
  return (
    <div style={{ backgroundColor: "#Dbe6ea" }}>
      <h1 class="mb-1">
        <b>DOWNLOAD YOUR QUESTIONS PAPERS</b>
        <div class="spinner-grow text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </h1>
      <div className="Branch">
        <Link to={"/CseBranch"}>
          <button type="button" class="btn btn-primary">
            Computer Science Engineering
          </button>
        </Link>

        <Link to={"/EceBranch"}>
          <button type="button" class="btn btn-success">
            Electronics & Communications Engineering
          </button>
        </Link>

        <Link to={"/MeBranch"}>
          <button type="button" class="btn btn-danger">
            Mechanical Engineering
          </button>
        </Link>

        <Link to={"/EeBranch"}>
          <button type="button" class="btn btn-secondary">
            Electrical Engineering
          </button>
        </Link>

        <Link to={"/CeBranch"}>
          <button type="button" class="btn btn-info">
            Civil Engineering
          </button>
        </Link>

        <Link to={"/BeBranch"}>
          <button type="button" class="btn btn-warning">
            Bio - Tech Engineering
          </button>
        </Link>

        <Link to={""}>
          <button type="button" class="btn btn-light">
            Coming Soon.....
            <div class="spinner-border text-danger" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Question;
