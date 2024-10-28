// src/AboutSection.js
import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-text">
        <h2>About</h2>
        <p>
          Neurogoblin Studios is a VR and immersive technology company based in Sydney, Australia. Its founder is Luke Turner, a passionate software engineer and XR enthusiast who loves creating unforgettable XR experiences across the entertainment, gaming, and medical industries.
        </p>
      </div>
      <div className="about-image">
        <img src={`${process.env.PUBLIC_URL}/img/me.jpg`} alt="Neurogoblin Studios" />
      </div>
    </section>
  );
};

export default AboutSection;
