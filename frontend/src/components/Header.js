import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Height of fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src="/images/icon.ico" alt="ImAged Icon" className="logo-icon" />
            <div className="logo-text">
              <h2>IMAGED</h2>
              <span className="logo-subtitle">TTL Image File Format</span>
            </div>
          </div>
          
          <nav className="nav">
            <button 
              className="nav-link" 
              onClick={() => scrollToSection('demo')}
            >
              Demo Video
            </button>
            <button 
              className="nav-link" 
              onClick={() => scrollToSection('installation')}
            >
              Download
            </button>
            <button 
              className="nav-link" 
              onClick={() => scrollToSection('connect')}
            >
              Try It Yourself
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
