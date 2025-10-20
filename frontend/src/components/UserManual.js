import React from 'react';
import './UserManual.css';

const UserManual = () => {
  return (
    <section id="manual" className="user-manual section">
      <div className="container">
        <h2 className="section-title">User Manual</h2>
        <p className="section-subtitle">
          Download the complete user manual for detailed instructions
        </p>

        <div className="manual-content">
          <div className="manual-card">
            <div className="manual-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10,9 9,9 8,9"/>
              </svg>
            </div>
            <h3>Imaged User Manual</h3>
            <p>
              Complete documentation for the ImAged application.
            </p>
            <a 
              href="https://example.com/imaged-user-manual.pdf" 
              className="btn btn-primary btn-large"
              download
            >
              Download Manual
            </a>
            <div className="download-note">
              <small>* This is a demo link. Replace with your actual PDF URL.</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserManual;