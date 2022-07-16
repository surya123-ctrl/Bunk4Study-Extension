import React from "react";
import { Link } from "react-router-dom";

const Upload = () => {
  return (
    <div style={{ backgroundColor: "#Dbe6ea" }}>
      <Link to={"/notes"}>
        <button className="btn btn-info my-4">
          &lt;-- Go Back to Notes Page
        </button>
      </Link>
      <h1>Upload Your Own Notes and Papers here!!</h1>
      <div className="upload-btn-wrapper">
        <a href="https://forms.gle/" target="_blank" rel="noopener noreferrer">
        <button className="btn btn-outline-dark mx-2 my-2">
          Upload Your Notes Here
        </button>
        </a>
        <a href="https://forms.gle/" target="_blank" rel="noopener noreferrer">
        <button className="btn btn-outline-dark mx-2 my-2">
          Upload Your Papers Here
        </button>
        </a>
      </div>
    </div>
  );
};

export default Upload;
