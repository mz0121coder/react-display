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
          <a href="https://github.com/mz0121coder/" target="_blank">
            GitHub
          </a>{" "}
          and {""}
          <a
            href="https://www.linkedin.com/in/mohammad-zafar-218579218/"
            target="_blank"
          >
            LinkedIn
          </a>
          .
        </p>
        <p>
          <a
            href="https://drive.google.com/file/d/1nizZ__xPKMwGDOs5guHD4AO5yVokkkjM/view?usp=sharing"
            target="_blank"
          >
            View CV/Resume
          </a>
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
