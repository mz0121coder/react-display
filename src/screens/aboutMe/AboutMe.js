import React from "react";
import "./aboutMe.css";
import person from "../../images/Coding.png";

function AboutMe() {
  return (
    <div className="about__container" id="about-me">
      <div>
        <img src={person} alt="person icon" />
      </div>
      <div className="about__text">
        <h1>ABOUT ME</h1>
        <p>
          I started my coding coding journey in mid 2021 via a full stack
          bootcamp at University of Birmingham. Problem solving and creative
          projects are my biggest interests in this field.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
