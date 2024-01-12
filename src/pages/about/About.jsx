import React from "react";
import "./about.css";
import AnimatedPage from "../AnimatedPage";
import aboutMe from "./aboutMe.jpg";

const About = () => {
  return (
    <AnimatedPage>
      <div className="aboutContainer">
        <div className="about-content">
          <div className="description-About">
            <span>About Me</span>
            <br />
            <h1>A dedicated Web Developer Morocco</h1>
            <p>
              Hello, and welcome to my web development portfolio! I'm{" "}
              <span>Moutik Yassine</span> a junior web developer with a passion
              for creating interactive and user-friendly websites. In this
              digital space, I strive to blend creativity with technical skills
              to bring ideas to life.
            </p>
          </div>
          <div className="image-about">
            <div className="scroll-image">
              <div className="srolling"></div>
              <img src={aboutMe} alt="" />
            </div>
          </div>
        </div>
        <div className="parts">
          <div className="parts-descr">
            <span>01</span>
            <h2>Skills</h2>
            <p>
              I specialize in HTML, CSS, JavaScript, React, Tailwind, and
              PHP, Laravel and MySql
            </p>
          </div>
          <div className="parts-descr">
            <span>02</span>
            <h2>Passion</h2>
            <p>
              What drives me in the world of web development is the constant
              evolution of technology and the endless possibilities it offers.
            </p>
          </div>
          <div className="parts-descr">
            <span>03</span>
            <h2>Collaboration</h2>
            <p>
              I believe in the power of collaboration and am open to working
              with clients, developers to bring visions to reality.
            </p>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default About;
