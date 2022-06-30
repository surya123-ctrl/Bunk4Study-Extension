import React from "react";
import { Link } from "react-router-dom";
import "../MyComponents/style/Giveaway.css";
const Giveaway = () => {
  return (
    <div style={{ backgroundColor: "#Dbe6ea" }}>
      <div className="questions-bank">
        <p>
          <Link to={"/Q1"}>What is the Eligibility?</Link>
        </p>
        <p>
          <Link to={"/Q2"}>Who is sponsor?</Link>
        </p>
        <p>
          <Link to={"/Q3"}>What are agreement to rules?</Link>
        </p>
        <p>
          <Link to={"/Q4"}>What is T-Shirt giveaway entry period?</Link>
        </p>
        <p>
          <Link to={"/Q5"}>How to enter?</Link>
        </p>
        <p>
          <Link to={"/Q6"}>What are the prizes?</Link>
        </p>
        <p>
          <Link to={"/Q7"}>What are odds?</Link>
        </p>
        <p>
          <Link to={"/Q8"}>Selection and Notification of Winner?</Link>
        </p>
        <p>
          <Link to={"/Q9"}>What are rights granted by you?</Link>
        </p>
        <p>
          <Link to={"/Q10"}>What are terms & conditions?</Link>
        </p>
        <p>
          <Link to={"/Q11"}>What are Limitations of Liability?</Link>
        </p>
        <p>
          <Link to={"/Q12"}>Any Disputes?</Link>
        </p>
        <p>
          <Link to={"/Q13"}>What are Privacy Policy?</Link>
        </p>
        <p>
          The Giveaway hosted by Bunk4Study is in no way sponsored, endorsed,
          administered by, or associated with any Of Social Media.
        </p>
        <p>
          ___ By checking here, You, the Entrant, have affirmatively reviewed,
          accepted, and agreed to all of the Official Rules.
        </p>
      </div>
    </div>
  );
};

export default Giveaway;
