import React from 'react';
import './CTASection.css';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-buttons">
        <a href="#projects" className="cta-button">My Projects</a>
        <a 
          href={`${process.env.PUBLIC_URL}/pdf/Resume.pdf`} // Updated path for GitHub Pages
          target="_blank" 
          rel="noopener noreferrer" 
          className="cta-button"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default CTASection;
