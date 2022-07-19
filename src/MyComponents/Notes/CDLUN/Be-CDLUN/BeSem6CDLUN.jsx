import React from "react";
import "..//..//..//Branch/Style/Branch.css";

const BeSem6CDLUN = () => {
  return (
    <>
      <div style={{ backgroundColor: "#Dbe6ea" }}>
        <h1 class="mb-1">
          SEMESTER 6 <br />
          Select Your Subject
          <div class="spinner-grow text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </h1>
      </div>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              MATH
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" id="sub">
              <button type="button" class="btn btn-primary">
                2009
              </button>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BeSem6CDLUN;
