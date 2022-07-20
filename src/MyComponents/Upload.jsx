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
      <h2>Click the button below</h2>
      <div className="upload-btn-wrapper">
        <a href="https://forms.gle/7K3mvafsxDsecFkVA" target="_blank" rel="noopener noreferrer">
        <button className="btn btn-dark mx-2 my-2">
          Upload Your Notes and Paper Here
        </button>
        </a>
        <p className="my-0">Note: You'll be redirected to a google form and there you can upload your Notes.</p>
      </div>
    </div>
  );
};

export default Upload;