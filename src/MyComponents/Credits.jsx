import React from "react";
import "../MyComponents/style/Credits.css";
import Surya from "../Images/Surya.png";
import Kunal from "../Images/Kunal.png";
import Utkarsh from "../Images/Utkarsh.png";
import AdityaShivaji from "../Images/AdityaShivaji.png";
import Pritom from "../Images/Pritom.png";
import Shubham from "../Images/Shubham.png";
import Aditya from "../Images/Aditya.png";
import Asmita from "../Images/Asmita.png";
import Khushi from "../Images/Khushi.png";
import Pranay from "../Images/Pranay.png";
import Zafeer from "../Images/Zafeer.png";
const Credits = () => {
  return (
    <>
      <div class="container">
        <h1>
          Welcome to the <br />
          Bunk4Study
        </h1>
        <p class="text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit et
          facilis ullam iusto expedita eligendi repellendus architecto odit,
          itaque maiores, officia tenetur unde quia odio ipsa! At officiis
          pariatur ad. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Eveniet suscipit magni sed. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Deserunt, id voluptatibus distinctio amet mollitia
          assumenda. Aperiam, inventore. Est, omnis veritatis. Enim possimus
          quasi minus facere adipisci expedita provident aperiam! Accusamus,
          labore et!
        </p>
        <h1>Our Story</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sunt
          obcaecati error ducimus perferendis deserunt odio deleniti architecto
          laudantium reiciendis, reprehenderit dolores magni porro cumque quidem
          esse optio blanditiis cobaserporis alias! Assumenda! Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Possimus adipisci laboriosam
          obcaecati tenetur vero maiores, in asperiores exercitationem inventore
          qui accusamus?
        </p>
      </div>
      <h1>Our Team</h1>
      <p>
        Meet Our Founder, HR, Team Lead, Content writers, Designers and
        Developers
      </p>
      <div className="card-container">
        <div class="card">
          <a
            target="_blank"
            href="https://github.com/surya123-ctrl/"
            rel="noreferrer"
          >
            <img id="user" src={Surya} alt="HR" />

            <div class="card-content">
              <h4>Surya Pratap Singh</h4>
              <h5>Frontend Developer</h5>
              <p>Chandigarh University, Punjab</p>
            </div>
          </a>
        </div>

        <div class="card">
          <img id="user" src={Kunal} alt="Team Lead" />

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
            <img id="user" src={Utkarsh} alt="Dev" />

            <div class="card-content">
              <h4>Utkarsh Dixit</h4>
              <h5>Frontend Developer</h5>
              <p>O.P. Jindal University, Raigarh</p>
            </div>
          </a>
        </div>

        <div class="card">
          <img id="user" src={AdityaShivaji} alt="Dev" />

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
            <img id="user" src={Pritom} alt="Dev" />

            <div class="card-content">
              <h4>Pritom Dutta</h4>
              <h5>Frontend Developer</h5>
              <p>Government College of Engineering and Leather Technology</p>
            </div>
          </a>
        </div>

        <div class="card">
          <img id="user" src={Shubham} alt="Dev" />

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
            <img id="user" src={Aditya} alt="Dev" />

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
            <img id="user" src={Asmita} alt="Dev" />

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
            <img id="user" src={Khushi} alt="Dev" />

            <div class="card-content">
              <h4>Khushi Agrawal</h4>
              <h5>Frontend Developer</h5>
              <p>Veer Surendra Sai University Technology, Burla</p>
            </div>
          </a>
        </div>

        <div class="card">
          <img id="user" src={Pranay} alt="Dev" />

          <div class="card-content">
            <h4>Pranay Shah</h4>
            <h5>Frontend Developer</h5>
            <p>Indus University</p>
          </div>
        </div>

        <div class="card">
          <img id="user" src={Zafeer} alt="Dev" />

          <div class="card-content">
            <h4>Zafeer Rangoonwala </h4>
            <h5>Frontend Developer</h5>
            <p>Indus University</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Credits;
