
import React from 'react';
import './MeditationApp.css';

const MeditationApp = () => {
  return (
    <div className="meditation-page">
      {/* <h1>Meditation Experience</h1> */}
      <iframe
        title="Breathe Slowly"
        src="https://neurogoblin-meditation.web.app"
        style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            border: 'none',
            margin: 0,
            padding: 0,
            overflow: 'hidden',
            zIndex: 9999,
        }}
  allowFullScreen
  scrolling="no"
/>
    </div>
  );
};

export default MeditationApp;


