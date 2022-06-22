import React from "react";
import "../MyComponents/style/Upload.css";
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
        <button className="btn btn-outline-dark mx-2 my-2">
          Upload Your Notes Here
        </button>
        <input type="file" name="mynotes" id="myfile" />
        <button className="btn btn-outline-dark mx-2 my-2">
          Upload Your Papers Here
        </button>
        <input type="file" name="mypapers" id="myfile" />
      </div>
    </div>
  );
};

export default Upload;
