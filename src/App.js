// src/App.js
import React from 'react';
import './App.css';
import ModelViewer from './ModelViewer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectSection from './ProjectSection';
import {ContactSection, Links} from './ContactSection';
import MediaSection from './MediaSection';
import HamburgerMenu from './HamburgerMenu';
import CTASection from './CTASection';
import AboutSection from './AboutSection';
import AutoPlayVideo from './AutoPlayVideo';
import MeditationPage from './MeditationPage';
import EscapeVelocity from './EscapeVelocity';
import NewHeader from './NewHeader';
import NewProj from './NewProj';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/meditation" element={<MeditationPage />} />
        <Route path="/escapevelocity" element={<EscapeVelocity />} />
      </Routes>
    </Router>
  );
}


function MainPage() {
  return (
    <div className="App">
      {/* Add the HamburgerMenu at the top for easy navigatio */}
      {/* <HamburgerMenu /> */}

      {/* <header className="app-header">
        <img className="logo" src={`${process.env.PUBLIC_URL}/img/LTLogo.png`} alt="Logo" />
      </header> */}

       {/* <div id="contact"> */}
        {/* <Links /> */}
      {/* </div> */}

      {/* <div className="viewer-container" id="home">
        <div className="model-viewer">
          <ModelViewer />
        </div>
        <div className="video-viewer">
          <AutoPlayVideo />
        </div>
      </div> */}

      <NewHeader />

      {/* <div id="about">
        <AboutSection />
      </div>
      <CTASection /> */}

      {/* <div id="projects"> */}
        <NewProj />
      {/* </div> */}

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
