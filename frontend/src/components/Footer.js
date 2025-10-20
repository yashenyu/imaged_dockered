import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>IMAGED</h3>
              <p className="footer-tagline">TTL Image File Format</p>
            </div>
            <p className="footer-description">
              An Image File Format with Integrated TTL for File-Level Controlled Access
            </p>
          </div>

          <div className="footer-section">
            <h4>Project</h4>
            <p className="footer-info">Research Project</p>
            <p className="footer-info">IndieSIS</p>
            <p className="footer-info">2024</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <button className="footer-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</button>
            <button className="footer-link" onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}>Demo Video</button>
            <button className="footer-link" onClick={() => document.getElementById('installation')?.scrollIntoView({ behavior: 'smooth' })}>Download</button>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p>&copy; 2024 IMAGED Research Project. All rights reserved.</p>
            </div>
            <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
              <span>↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
