import React from "react";
import { Link } from "react-router-dom";

const EceBranch = () => {
  return (
    <div style={{ backgroundColor: "#Dbe6ea" }}>
      <h1>
        <b>ECE Semesters Paper</b>
        <div class="spinner-grow text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </h1>

      <h2>
        <Link to={"/Sem1"}>
          <button type="button" class="btn btn-primary">
            Semester 1
          </button>
        </Link>
      </h2>

      <h2>
        <Link to={"/EceBranch"}>
          <button type="button" class="btn btn-primary">
            Semester 2
          </button>
        </Link>
      </h2>

      <h2>
        <Link to={"/EceBranch"}>
          <button type="button" class="btn btn-primary">
            Semester 3
          </button>
        </Link>
      </h2>
    </div>
  );
};

export default EceBranch;
