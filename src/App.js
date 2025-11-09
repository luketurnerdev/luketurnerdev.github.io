import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ContactSection } from './ContactSection';
import MediaSection from './MediaSection';
import { AnimatePresence } from "framer-motion";
import MeditationPage from './projectPages/MeditationPage';
import MeditationApp from './apps/MeditationApp';
import EscapeVelocity from './EscapeVelocity';
import NewHeader from './NewHeader';
import NewProj from './NewProj';
import PageWrapper from './PageWrapper';
import { useEffect, useRef } from "react";
import RSIPage from './projectPages/RSIPage';

function AnimatedRoutes() {
  const location = useLocation();
  const firstLoad = useRef(true);

  useEffect(() => {
    // mark that we’ve animated once already
    if (firstLoad.current) firstLoad.current = false;
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* ✅ Only skip animation on first load */}
        <Route
          path="/"
          element={
            <PageWrapper
              direction="right"
              skip={firstLoad.current && location.pathname === "/"}
            >
              <MainPage />
            </PageWrapper>
          }
        />
        <Route
          path="/meditation"
          element={<PageWrapper direction="left"><MeditationPage /></PageWrapper>}
        />
        <Route
          path="/rsi"
          element={<PageWrapper direction="left"><RSIPage /></PageWrapper>}
        />
        <Route
          path="/space-breathwork"
          element={<MeditationApp />}
        />
        <Route
          path="/escapevelocity"
          element={<PageWrapper direction="left"><EscapeVelocity /></PageWrapper>}
        />
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
        to build immersive and interactive experiences that blend art and technology. My experience spans across VR, Ed-tech, Med-tech and Tech-art / installation work. Unity (C#) is my primary tool, but
        I genuinely love learning new technologies and paradigms as a means to express creative storytelling.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <NewHeader /> {/* ✅ Sticky header */}
      <AnimatedRoutes />
    </Router>
  );
}
