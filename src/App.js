// src/App.js
import React from 'react';
import './App.css';
import ModelViewer from './ModelViewer';
import ProjectSection from './ProjectSection';
import ContactSection from './ContactSection';
import MediaSection from './MediaSection';
import HamburgerMenu from './HamburgerMenu';
import CTASection from './CTASection';
import AboutSection from './AboutSection';
import AutoPlayVideo from './AutoPlayVideo';

function App() {
  return (
    <div className="App">
      {/* Add the HamburgerMenu at the top for easy navigatio */}
      <HamburgerMenu />

      <header className="app-header">
        {/* <h1>Neurogoblin Studios</h1> */}
        <img className="logo" src={`${process.env.PUBLIC_URL}/img/goblogo1.png`} alt="Logo" />
      </header>

      <div className="viewer-container" id="home">
        <div className="model-viewer">
          <ModelViewer />
        </div>
        <div className="video-viewer">
          <AutoPlayVideo />
        </div>
      </div>
      <CTASection />

      <div id="about">
        <AboutSection />
      </div>

      <div id="projects">
        <ProjectSection />
      </div>

      <div id="media">
        <MediaSection />
      </div>

      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
}

export default App;
