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
          Frontend developer, leveraging background in Economics to analyse &
          solve problems. Earned a certificate from the University of Birmingham
          Coding and Web Development Boot Camp. Continually building proficiency
          in JavaScript, frameworks such as React, and databases including
          MongoDB. Target driven and motivated to learn new technologies.
          Passionate about creating aesthetic, user-friendly applications in an
          agile, collaborative environment. You can see more of my work on {""}
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
            href="https://drive.google.com/file/d/12EmcgHhDbyfshOq5Gwcv24RbN7_8hgyz/view?usp=sharing"
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
