// src/AboutSection.js
import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-text">
        <h2>About</h2>
        <p>
      Luke Turner is a passionate and experienced gameplay programmer based in Montreal, QC. He has over 6 years of professional experience with Unity (C#) and loves creating dynamic deeply engaging gameplay systems and VR experiences.
      When Luke's not coding or gaming, you can generally find him meditating or playing heavy metal guitar!
      </p>
      </div>
      <div className="about-image">
        <img src={`${process.env.PUBLIC_URL}/img/me.jpg`} alt="Luke Turner - Gameplay Programmer" />
      </div>
    </section>
  );
};

export default AboutSection;
