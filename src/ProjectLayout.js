import React from "react";
import { Link } from "react-router-dom";
import "./ProjectPage.css";

export default function ProjectLayout({ 
  title, 
  role, 
  team, 
  duration, 
  engine, 
  about, 
  videoSrc, 
  playLink,
  playText,
  children 
}) {
  return (
    <div className="project-container">
      <header className="project-header">
        <Link to="/" className="go-back">← Go Back</Link>
        <h1 className="project-title">{title}</h1>
        <p className="project-role">{role}</p>
      </header>

      <div className="project-video-wrapper">
        <video 
          src={videoSrc} 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="project-video"
        />
      </div>

      {playLink && <section className="cta-section">
        <a
          href={playLink}
          target="_blank"
          rel="noopener noreferrer"
          className="play-now-button"
        >
          {playText}
        </a>
      </section> }


      <div className="project-info-section">
        {/* <div className="project-about">
          <h2>About</h2>
          <p>{about}</p>
        </div> */}
        <div className="project-info">
          <h2>Project Info</h2>
          <ul>
            <li><strong>Role:</strong> {role}</li>
            <li><strong>Team Size:</strong> {team}</li>
            <li><strong>Time frame:</strong> {duration}</li>
            <li><strong>Engine:</strong> {engine}</li>
          </ul>
        </div>
      </div>

      <div className="project-content">{children}</div>
    </div>
  );
}
