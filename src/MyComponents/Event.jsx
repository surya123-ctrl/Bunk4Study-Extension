import React from "react";
import "../MyComponents/style/Event.css";
import logo from "../Images/Tshirt.jpeg";
// import MovingText from "react-moving-text";
import MovingComponent from "react-moving-text";
const Event = () => {
  return (
    <div>
      <h1 className="giveaway">
        {" "}
        <span class="giveaway">
          Giveaway <span style={{ fontSize: "30px" }}>&hearts;</span>
        </span>
      </h1>
      {/* <div class="alert alert-danger" role="alert">
        All 10% Of Total Registered Student will Get TShirt
      </div> */}
      <MovingComponent
        type="slideInFromLeft"
        duration="2000ms"
        delay="1s"
        direction="alternate"
        timing="ease"
        iteration="5"
        fillMode="backwards"
        style={{
          color: "red",
        }}
      >
        All 10% Of Total Registered Student will Get TShirt
      </MovingComponent>
      <div className="image">
        <img src={logo} alt="Logo" class="w3-grayscale-min w3-opacity-min  " />
      </div>
      <h4>Rules:-</h4>
      <p className="para">
        1. Register On Google Form By Clicking Below Blue Button <br />
        2. Follow Below Social handle
        <br />
        a) Instagram -{" "}
        <a
          href="https://instagram.com/bunk4study?utm_medium=copy_link"
          target="_blank"
          rel="noreferrer"
        >
          Follow
        </a>
        <br />
        b) Twitter -
        <a
          href="https://twitter.com/Bunk4Study?t=9MGpXgxPPs7TvQ0xWATLhQ&s=09"
          target="_blank"
          rel="noreferrer"
        >
          Follow
        </a>
        <br />
        c) Facebook -{" "}
        <a
          href="https://www.facebook.com/Bunk4Study-100731219267632"
          target="_blank"
          rel="noreferrer"
        >
          Follow
        </a>
        <br />
        3. If Any Student Who does not follow above link then he/she will not
        able to participate in Giveaway
        <br />
        4. After Registration We will cross check that student follow all the
        rules properly or not.
        <br />
        5. After successful Registration, every month 5 student will able to get
        T-shirt.
        <br />
        6. For Getting Update for Giveaway, check notification section.
        <br />
        7. We will notify The winner through email.
        <br />
        8. We will send form to winner, they have to fill within 15 days.
        <br />
      </p>
      <div className="margin">
        <a
          href="https://forms.gle/PVDmNis9Y7V4tAMFA"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <button type="button" class="btn btn-primary">
            Registration Form
          </button>
        </a>
      </div>
    </div>
  );
};

export default Event;
