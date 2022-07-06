import React from "react";

const Sem3 = () => {
  return (
    <>
      <div style={{ backgroundColor: "#Dbe6ea" }}>
        <h1 class="mb-1">
          SEMESTER 3 <br />
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
              DBMS
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
                href="https://drive.google.com/file/d/1uWM134ekaSHUlK-wwSrWtx_hCT55AsvW/view?usp=sharing"
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
              DSA
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
                href="https://drive.google.com/file/d/1vVZNEjt_B_pcJ7eqRdmJWHfq1jspgkxF/view?usp=sharing"
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
              DE
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
                href="https://drive.google.com/file/d/1xqGFtCplNeKMCjH4vf_oKI3LHEm2IAY2/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" class="btn btn-primary">
                  2021
                </button>
              </a>
              <br />
              
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
              Python
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
                href="https://drive.google.com/file/d/1uMnzCw2zLS1bcwh-mt4aIl9LUtxdgyUf/view?usp=sharing"
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
          <h2 class="accordion-header" id="headingFive">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Math
            </button>
          </h2>
          <div
            id="collapseFive"
            class="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" id="sub">
              <a
                href="https://drive.google.com/file/d/155llctnyjbsVygJ8Q_aXNU_9eeKTC-vI/view?usp=sharing"
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
          <h2 class="accordion-header" id="headingSix">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              Digital Analog Communication
            </button>
          </h2>
          <div
            id="collapseSix"
            class="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" id="sub">
              <a
                href="https://drive.google.com/file/d/16qXXMvnPqTIDiTX3vaNyzK-NQustWC__/view?usp=sharing"
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

export default Sem3;
