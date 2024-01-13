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
import { Link } from "react-router-dom";
import Aos from "../AosComponent";

const Home = () => {
  return (
    <AnimatedPage>
      <div className="homeContainer">
        <div className="content">
          <div className="home-animation">
            <Lottie className="profil" animationData={portfolioAnimation} />
          </div>
          <div className="content-text">
            <h1><Aos data_aos={"fade-right"}>Hi</Aos></h1>
            <h1><Aos data_aos={"fade-left"}>I'm <span style={{color: "#0aff9d"}}>Yassine</span>,</Aos></h1>
            <h1><Aos data_aos={"fade-right"}>Web Developer</Aos></h1>
            <p><Aos data_aos={"zoom-out-left"}>I'm a passionate Web Developer from Morocco.</Aos></p>
            <div className="social">
              <div style={{ display: "flex", gap: "10px" }}>
                <a href="https://github.com/yassmtk21" target="_blank"><RiGithubLine className="icons"/></a>
                <a href="https://www.linkedin.com/in/yassine-moutik-35b275288/" target="_blank"><RiLinkedinBoxLine className="icons" /></a>
                <a href="https://www.facebook.com/" target="_blank"><RiTwitterXFill className="icons" /></a>
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
