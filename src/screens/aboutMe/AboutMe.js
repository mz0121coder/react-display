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
          I started my coding journey in mid 2021 and keep building on my
          skills. I love problem solving and also enjoy the creative side of
          coding. You can see more of my work on {""}
          <a href="https://github.com/mz0121coder">GitHub</a> and {""}
          <a href="https://github.com/mz0121coder">LinkedIn</a>.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
