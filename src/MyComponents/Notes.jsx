import React from "react";
import { Link } from "react-router-dom";
import "../MyComponents/style/Notes.css";

const Notes = () => {
  return (
    <div style={{ backgroundColor: "#Dbe6ea" }}>
      <h1>All Notes and Papers are Here!!!</h1>
      <Link to={"/upload"}>
        <button className="btn btn-info my-4">Upload Notes and Papers</button>
      </Link>
    </div>
  );
};

export default Notes;
