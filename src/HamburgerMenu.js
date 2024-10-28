import React, { useState } from 'react';
import './HamburgerMenu.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="hamburger-menu">
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>

      <ul className={`menu-links ${isOpen ? 'show-menu' : ''}`}>
        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
        <li><a href="#media" onClick={toggleMenu}>Media</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default HamburgerMenu;
