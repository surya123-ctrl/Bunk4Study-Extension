import React from "react";
import { Link } from "react-router-dom";
import "../MyComponents/style/Faq.css";
const Faq = () => {
  return (
    <div style={{ backgroundColor: "#Dbe6ea" }}>
      <p className="center-button mb-0 pb-4">
        <h1>The FAQ Page</h1>
        <Link to={"/Giveaway"} className="btn btn-primary short-button">
          Giveaway Questions
        </Link>
      </p>
    </div>
  );
};
export default Faq;
