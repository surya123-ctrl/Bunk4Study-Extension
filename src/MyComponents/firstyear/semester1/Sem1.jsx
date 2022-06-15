import React from "react";
import { Link } from "react-router-dom";

const Sem1 = () => {
  return (
    <div style={{ backgroundColor: "#Dbe6ea" }}>
      <h1 class="mb-1">
        <b>SEMESTER 1</b>
        <div class="spinner-grow text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </h1>

      <h2>
        <Link to={"/Sem12021"}>
          <button type="button" class="btn btn-primary">
            Semester 1 - 2021
          </button>
        </Link>
      </h2>

      <h2>
        <Link to={"/Sem12020"}>
          <button type="button" class="btn btn-primary">
            Semester 1 - 2020
          </button>
        </Link>
      </h2>

      <h2>
        <Link to={"/Sem12019"}>
          <button type="button" class="btn btn-primary">
            Semester 1 - 2019
          </button>
        </Link>
      </h2>
    </div>
  );
};

export default Sem1;
