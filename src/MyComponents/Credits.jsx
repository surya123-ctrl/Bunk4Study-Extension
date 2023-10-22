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
              src="https://media.licdn.com/dms/image/D4D35AQE3tMiQCTcuZQ/profile-framedphoto-shrink_400_400/0/1697486015971?e=1698562800&v=beta&t=Yneyec20fxw8duAeGmr7mAQ7VBtW5kEeU9DyFRg6ztg"
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
          <a
            target="_blank"
            href="https://github.com/devutkarshdixit/"
            rel="noreferrer"
          >
            <img
              id="user"
              src="https://media.licdn.com/dms/image/D4D35AQH3EOL2Nu9w2A/profile-framedphoto-shrink_400_400/0/1697957058917?e=1698562800&v=beta&t=DgsstykCLUMR-49QiC8A6GEMpbhvT6SFZBX4f1rp09s"
              alt="Dev"
            />

            <div class="card-content">
              <h4>Utkarsh Dixit</h4>
              <h5>Frontend Developer</h5>
              <p>O.P. Jindal University, Raigarh</p>
            </div>
          </a>
        </div>
        <div class="card">
          <a
            target="_blank"
            href="https://github.com/asmitaporwal/"
            rel="noreferrer"
          >
            <img id="user" src="https://media.licdn.com/dms/image/D5635AQFqciQM3SbzFw/profile-framedphoto-shrink_400_400/0/1640184848498?e=1698562800&v=beta&t=k3rialpMQEQsvREFV96tyYi89i-Jv4eFGRNdhvrcFYo" alt="Dev" />

            <div class="card-content">
              <h4>Asmita Porwal</h4>
              <h5>Frontend Developer</h5>
              <p>Jaypee University of engineering and technology, Guna</p>
            </div>
          </a>
        </div>
        <div class="card">
          <a
            href="http://github.com/pritomdutta89"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img id="user" src="https://media.licdn.com/dms/image/D4E35AQFeKvuAUfl0sg/profile-framedphoto-shrink_400_400/0/1690313324532?e=1698562800&v=beta&t=1dJZFiaWJ9lP_cdD9ZlgqiV21clWSSdqqb9yS8Bx6rg" alt="Dev" />

            <div class="card-content">
              <h4>Pritom Dutta</h4>
              <h5>Firebase Developer</h5>
              <p>Government College of Engineering and Leather Technology</p>
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
          <img id="user" src="https://i.imgur.com/ExsggMZ.png" alt="Dev" />

          <div class="card-content">
            <h4>Aditya Shivaji Devdhe</h4>
            <h5>UI Developer</h5>
            <p>Modern Education society's college of engineering pune </p>
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
