import React from 'react';
import './Installation.css';

const Installation = () => {
  return (
    <section id="installation" className="installation section">
      <div className="container">
        <h2 className="section-title">Download & Resources</h2>
        <p className="section-subtitle">
          Get started with IMAGED by downloading the application and user manual
        </p>

        <div className="download-grid">
          {/* Installation Card */}
          <div className="download-card">
            <div className="card-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </div>
            <h3>Download IMAGED</h3>
            <p>Windows 10/11 compatible</p>
            <a 
              href="https://drive.google.com/file/d/17jT2J0rZPC6Nq5CHmqIpssxXS2AOboNy/view?usp=drive_link" 
              className="btn btn-primary btn-large download-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Application
            </a>
            <div className="download-note">
              <small>Windows Installer • Google Drive</small>
            </div>
          </div>

          {/* User Manual Card */}
          <div id="manual" className="download-card">
            <div className="card-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10,9 9,9 8,9"/>
              </svg>
            </div>
            <h3>User Manual</h3>
            <p>Complete documentation and guide</p>
            <a 
              href="/UserManual.pdf" 
              className="btn btn-secondary btn-large download-btn"
              download="IMAGED_UserManual.pdf"
            >
              Download Manual
            </a>
            <div className="download-note">
              <small>PDF Format • Comprehensive Guide</small>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Installation;