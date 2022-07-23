import React from "react";
import { Helmet } from "react-helmet";
import "../MyComponents/style/Credits.css";
const Credits = () => {
  return (
    <div style={{ backgroundColor: "#Dbe6ea" }}>
      <Helmet>
        <title>Credits - Bunk4Study</title>
        <meta name="description" content="Details about our team members" />
      </Helmet>
      <div class="container">

        <h1>
          Welcome to the <br />
          Bunk4Study
        </h1>
        <p class="text-start">
          Bunk4Study welcome all the students and helps them to secure his/her
          bright future. It is commonly named as Bunk for Study. For avoidance
          of study, Students bunk the classes in school days so to maintain the
          decorum of students i.e. for study of placements and student’s study
          in the class don’t be affected, Bunk4Study site is there. Students
          bunk the classes and side by side there college study don’t be loss,
          all the things will get smoother either their college study as well as
          placements. If anyone face any problem regarding study materials,
          notes, question papers then warm welcome to the site of Bunk4Study.
        </p>
        <h1>Our Story</h1>
        <p>
          Our team members have worked across this site of Bunk4Study. All the
          interns who work here are freshers, graduates. They are newbies to the
          world without any proper exposure to the wholesome battleground into
          which they are entering. By offer an internship makes them feel
          flexible and work on it. It makes them a good fit for field into which
          they want to go and grab an opportunity in career.
        </p>
      </div>
      <h1>Our Team</h1>
      <div className="card-container">
        <div class="card">
          <a
            target="_blank"
            href="https://github.com/surya123-ctrl/"
            rel="noreferrer"
          >
            <img
              id="user"
              src="https://i.imgur.com/Qiqe0a4.jpg"
              alt="Team Lead"
            />

            <div class="card-content">
              <h4>Surya Pratap Singh</h4>
              <h5>Frontend Developer</h5>
              <p>Chandigarh University, Punjab</p>
            </div>
          </a>
        </div>

        <div class="card">
          <img id="user" src="https://i.imgur.com/eVCnHDX.png" alt="Dev" />

          <div class="card-content">
            <h4>Kunal Bhardwaj</h4>
            <h5>UI Developer</h5>
            <p>Gautam Buddha University, Noida</p>
          </div>
        </div>

        <div class="card">
          <a
            target="_blank"
            href="https://github.com/utkarsh-dixit-git/"
            rel="noreferrer"
          >
            <img id="user" src="https://i.imgur.com/yUqCsJd.jpg" alt="Dev" />

            <div class="card-content">
              <h4>Utkarsh Dixit</h4>
              <h5>Frontend Developer</h5>
              <p>O.P. Jindal University, Raigarh</p>
            </div>
          </a>
        </div>

        <div class="card">
          <img id="user" src="https://i.imgur.com/ExsggMZ.png" alt="Dev" />

          <div class="card-content">
            <h4>Aditya Shivaji Devdhe</h4>
            <h5>UI Developer</h5>
            <p>Modern Education society's college of engineering pune </p>
          </div>
        </div>

        <div class="card">
          <a
            href="http://github.com/pritomdutta89"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img id="user" src="https://i.imgur.com/XjOM7KA.png" alt="Dev" />

            <div class="card-content">
              <h4>Pritom Dutta</h4>
              <h5>Frontend Developer</h5>
              <p>Government College of Engineering and Leather Technology</p>
            </div>
          </a>
        </div>

        <div class="card">
          <img id="user" src="https://i.imgur.com/RTq5O0o.jpg" alt="Dev" />

          <div class="card-content">
            <h4>Shubham</h4>
            <h5>Head Content Writer</h5>
            <p>Rohtak, Haryana</p>
          </div>
        </div>

        <div class="card">
          <a
            href="http://github.com/aditya9855"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img id="user" src="https://i.imgur.com/KOpFNqB.png" alt="Dev" />

            <div class="card-content">
              <h4>Aditya Singh</h4>
              <h5>Frontend Developer</h5>
              <p>Dr B R Ambedkar National Institute of Technology, Jalandhar</p>
            </div>
          </a>
        </div>

        <div class="card">
          <a
            target="_blank"
            href="https://github.com/asmitaporwal/"
            rel="noreferrer"
          >
            <img id="user" src="https://i.imgur.com/gzlxQF1.png" alt="Dev" />

            <div class="card-content">
              <h4>Asmita Porwal</h4>
              <h5>Frontend Developer</h5>
              <p>Jaypee University of engineering and technology, Guna</p>
            </div>
          </a>
        </div>

        <div class="card">
          <a
            target="_blank"
            href="https://github.com/Khushi340/"
            rel="noreferrer"
          >
            <img id="user" src="https://i.imgur.com/y1OeApM.png" alt="Dev" />

            <div class="card-content">
              <h4>Khushi Agrawal</h4>
              <h5>Frontend Developer</h5>
              <p>Veer Surendra Sai University Technology, Burla</p>
            </div>
          </a>
        </div>

        <div class="card">
          <img id="user" src="https://i.imgur.com/ZUUpvvX.png" alt="Dev" />

          <div class="card-content">
            <h4>Pranay Shah</h4>
            <h5>Frontend Developer</h5>
            <p>Indus University</p>
          </div>
        </div>

        <div class="card">
          <img id="user" src="https://i.imgur.com/NJGIbwy.png" alt="Dev" />

          <div class="card-content">
            <h4>Zafeer Rangoonwala </h4>
            <h5>Frontend Developer</h5>
            <p>Indus University</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credits;
