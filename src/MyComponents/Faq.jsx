import React from "react";
import { Link } from "react-router-dom";
import "../MyComponents/style/Faq.css";
const Faq = () => {
  return (
    <div className="container">
      <p className="center-button">
        <Link to={"/Giveaway"} className="button">
          Giveaway
        </Link>
      </p>
    </div>
  );
};
export default Faq;
