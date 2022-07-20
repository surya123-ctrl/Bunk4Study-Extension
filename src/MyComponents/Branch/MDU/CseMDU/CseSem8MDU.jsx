import React from "react";

const CseSem8MDU = () => {
  return (
    <>
      <div style={{ backgroundColor: "#Dbe6ea" }}>
        <h1 class="mb-1">
          SEMESTER 8 <br />
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
              Advanced Java
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" id="sub">
              <a
                href="https://drive.google.com/file/d/12CpL1hqC8apPmH3dpP2Xmk38Sc3zqXxA/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" class="btn btn-primary">
                  2019
                </button>
              </a>
              <br />
              <a
                href="https://drive.google.com/file/d/1dHIRmey5CKhWjZ8HXrLJxq1R4QUAmLO6/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" class="btn btn-primary">
                  2021
                </button>
              </a>
              <br />
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Computer Software Testing
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" id="sub">
              <a
                href="https://drive.google.com/file/d/1mtIk6yB8rCgvPyRbhsSJnoQ8c6E-nw7I/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" class="btn btn-primary">
                  2019
                </button>
              </a>
              <br />
              <a
                href="https://drive.google.com/file/d/1MiOT0zvqpEAOu_c-FrwBwYfutRs5Oqkk/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" class="btn btn-primary">
                  2021
                </button>
              </a>
              <br />
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Mobile Communication
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" id="sub">
              <a
                href="https://drive.google.com/file/d/1f44w4U8ymCOWqW-jElP8PIWtbihHNPgv/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" class="btn btn-primary">
                  2019
                </button>
              </a>
              <br />
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Network Technology
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" id="sub">
              <a
                href="https://drive.google.com/file/d/1Ko8QvLmGo2r5auLUnl_lTCBYuG0Hxq27/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" class="btn btn-primary">
                  2021
                </button>
              </a>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CseSem8MDU;
