import React from 'react';
import './ContactSection.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact</h2>
      <p className="contact-description">
        Feel free to reach out for collaborations, opportunities, or just to connect!
      </p>
      <div className="contact-icons">
        <a href="mailto:luke@lukedturner.com" className="contact-icon" aria-label="Email">
          <FaEnvelope size={30} />
        </a>
        <a href="https://linkedin.com/in/luke-turner-dev" target="_blank" rel="noopener noreferrer" className="contact-icon" aria-label="LinkedIn">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/luketurnerdev" target="_blank" rel="noopener noreferrer" className="contact-icon" aria-label="GitHub">
          <FaGithub size={30} />
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
