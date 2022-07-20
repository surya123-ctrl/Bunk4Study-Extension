import React from "react";
import "./style/Question.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Question = () => {
  return (
    <div style={{ backgroundColor: "#Dbe6ea" }}>
      <Helmet>
        <title>Question</title>
        <meta name="description" content="Question paper related to college exams" />
      </Helmet>
      <h1 class="mb-1">
        <b>Select Your College</b>
        <div class="spinner-grow text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </h1>
      <div className="Branch">
        <Link to={"/MDU"}>
          <button type="button" class="btn btn-outline-secondary">
            Maharshi Dayanand University
          </button>
        </Link>

        <Link to={"/DCRU"}>
          <button type="button" class="btn btn-outline-secondary">
            Deenbandhu Chhotu Ram University
          </button>
        </Link>

        <Link to={"/GJU"}>
          <button type="button" class="btn btn-outline-secondary">
            Guru Jambheshwar University
          </button>
        </Link>
        <Link to={"/JCBU"}>
          <button type="button" class="btn btn-outline-secondary">
            J.C. Bose University
          </button>
        </Link>

        <Link to={"/CDLU"}>
          <button type="button" class="btn btn-outline-secondary">
            Chaudhary Devi Lal University
          </button>
        </Link>

        <Link to={"/KU"}>
          <button type="button" class="btn btn-outline-secondary">
            Kurukshetra University
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Question;
