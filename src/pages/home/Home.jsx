import React, { useEffect, useRef } from "react";
import "./home.css";
import AnimatedPage from "../AnimatedPage";
import {
  RiGithubLine,
  RiLinkedinBoxLine,
  RiTwitterXFill,
} from "react-icons/ri";
import Lottie from "lottie-react";
import portfolioAnimation from "../../Animation/portfolioAnimation.json";
import CV from "./CV-MOUTIK-YASSINE.pdf";
import Reveal from "../Reveal";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <AnimatedPage>
      <div className="homeContainer">
        <div className="content">
          <div className="home-animation">
            <Lottie className="profil" animationData={portfolioAnimation} />
          </div>
          <div className="content-text">
            <h1>Hi,</h1>
            <h1>I'm Yassine,</h1>
            <h1>Web Developer</h1>
            <p>I'm a passionate Web Developer from Morocco.</p>
            <div className="social">
              <div style={{ display: "flex", gap: "10px" }}>
                <RiGithubLine className="icons" />
                <RiLinkedinBoxLine className="icons" />
                <RiTwitterXFill className="icons" />
              </div>
              <div className="resume">
                <Link to="/contact">Contact Me</Link>
              </div>
            </div>

            <div className="contact&cv"></div>
            <div className="content-skills">
              <div className="title">
                <h3 style={{ color: "white" }}>Tech Stack</h3>
              </div>
              <div className="skills">
                <img src="https://skillicons.dev/icons?i=html,css" alt="#" />
                <img src="https://skillicons.dev/icons?i=js,react" alt="#" />
                <img
                  src="https://skillicons.dev/icons?i=laravel,mysql"
                  alt="#"
                />
                <img src="https://skillicons.dev/icons?i=tailwind,bootstrap" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Home;
