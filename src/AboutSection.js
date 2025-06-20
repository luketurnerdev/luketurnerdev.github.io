// src/AboutSection.js
import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-text">
        <h2>About</h2>
        <p>
Luke Turner is a passionate software engineer and XR enthusiast based in Sydney, Australia. With a deep love for creating unforgettable virtual and immersive experiences, he works across the entertainment, gaming, and medical industries—pushing the boundaries of what’s possible in XR.        </p>
      </div>
      <div className="about-image">
        <img src={`${process.env.PUBLIC_URL}/img/me.jpg`} alt="Neurogoblin Studios" />
      </div>
    </section>
  );
};

export default AboutSection;
