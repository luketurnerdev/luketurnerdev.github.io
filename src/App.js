import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ContactSection } from './ContactSection';
import MediaSection from './MediaSection';
import { AnimatePresence } from "framer-motion";
import MeditationPage from './projectPages/MeditationPage';
import EscapeVelocity from './EscapeVelocity';
import NewHeader from './NewHeader';
import NewProj from './NewProj';
import PageWrapper from './PageWrapper';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Home slides in from RIGHT */}
        <Route path="/" element={<PageWrapper direction="right"><MainPage /></PageWrapper>} />
        {/* Projects slide in from LEFT */}
        <Route path="/meditation" element={<PageWrapper direction="left"><MeditationPage /></PageWrapper>} />
        <Route path="/escapevelocity" element={<PageWrapper direction="left"><EscapeVelocity /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function MainPage() {
  return (
    <div>
      <Intro />
      <NewProj />
      <div id="media"><MediaSection /></div>
      <div id="contact"><ContactSection /></div>
    </div>
  );
}

function Intro() {
  return (
    <div className="intro-section">
      <img
        src={`${process.env.PUBLIC_URL}/img/me.jpg`}
        alt="Profile"
        className="profile-img"
      />
      <p className="intro-text">
        Howdy! I’m Luke, an experienced creative technologist and software developer who loves
        to build immersive and interactive experiences that blend art and technology. I design
        expressive systems that connect people with digital worlds, supported by clean, efficient
        code that brings stories to life. Unity is my primary tool, though my roots in web
        development keep me curious and adaptable across new technologies.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      {/* ✅ Header stays sticky and unaffected */}
      <NewHeader />
      <AnimatedRoutes />
    </Router>
  );
}
