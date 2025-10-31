import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

import "./NewHeader.css";

export default function NewHeader() {
  return (
    <div className="header-container">
      <header className="top-bar">
        <div className="name-block">
          <h1>Luke Turner</h1>
          <p>Creative Technologist | Unity C#</p>
        </div>
        <div className="icon-block">
          <a href="https://linkedin.com/in/luke-turner-dev" className="icon"><FaLinkedin size={15} /></a>
         <a href="mailto:luke@lukedturner.com" className="icon"><FaEnvelope size={15} /></a>
          <a href="https://github.com/luketurnerdev" className="icon"><FaGithub size={15} /></a>
         <button
  className="resume-btn"
  onClick={() =>
    window.open(`${process.env.PUBLIC_URL}/pdf/Resume.pdf`, "_blank")
  }
>
  Resume ↓
</button>
        </div>
      </header>

      {/* <div className="intro-section">
        <img src={`${process.env.PUBLIC_URL}/img/me.jpg`} alt="Profile" className="profile-img" />
        <p className="intro-text">
Howdy! I’m Luke, an experienced creative technologist and software developer who loves to build immersive and interactive experiences that blend art and technology.
I design expressive systems that connect people with digital worlds, supported by clean, efficient code that brings stories to life.
Unity is my primary tool, though my roots in web development keep me curious and adaptable across new technologies. 
      </p>
      </div> */}
    </div>
  );
}
