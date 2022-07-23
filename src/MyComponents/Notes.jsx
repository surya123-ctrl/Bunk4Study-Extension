import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "../MyComponents/style/Notes.css";

const Notes = () => {
  return (
    <div style={{ backgroundColor: "#Dbe6ea" }}>
      <Helmet>
        <title>Notes - Bunk4Study</title>
        <meta name="description" content="Notes and papers related to college and university exam prepration" />
      </Helmet>
      <h1>All Notes and Papers are Here!!!</h1>
      <Link to={"/upload"}>
        <button className="btn btn-info my-4">Upload Notes and Papers</button>
      </Link>
      <div className="Branch">
        <Link to={"/MDUN"}>
          <button type="button" class="btn btn-outline-secondary">
            Maharshi Dayanand University
          </button>
        </Link>

        <Link to={"/DCRUN"}>
          <button type="button" class="btn btn-outline-secondary">
            Deenbandhu Chhotu Ram University
          </button>
        </Link>

        <Link to={"/GJUN"}>
          <button type="button" class="btn btn-outline-secondary">
            Guru Jambheshwar University
          </button>
        </Link>
        <Link to={"/JCBUN"}>
          <button type="button" class="btn btn-outline-secondary">
            J.C. Bose University
          </button>
        </Link>

        <Link to={"/CDLUN"}>
          <button type="button" class="btn btn-outline-secondary">
            Chaudhary Devi Lal University
          </button>
        </Link>

        <Link to={"/KUN"}>
          <button type="button" class="btn btn-outline-secondary">
            Kurukshetra University
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Notes;
