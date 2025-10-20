import React from 'react';
import './Hero.css';
import Carousel from './Carousel';

function Hero() {
  const scrollToConnect = () => {
    const element = document.getElementById('connect');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  // images in public/images/
  const images = [
    '/images/page1.png',
    '/images/page2.png',
    '/images/page3.png',
    '/images/convertandwait.png',
    '/images/selectimage.png',
    '/images/settime.png',
    '/images/viewconvertedimage.png',
  ];

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              IMAGED: An Image File Format with Integrated TTL for File-Level Controlled Access
            </h1>
            <p className="hero-description">
              A research project introducing a proprietary image file format (.ttl) with built-in 
              expiration metadata. This capstone project from IndieSIS implements 
              AES-256-GCM encryption, HKDF key derivation, and NTP time synchronization to 
              enforce time-based access control for digital images.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary btn-large" onClick={scrollToConnect}>
                Try Live Demo
              </button>
              <button
                className="btn btn-secondary btn-large"
                onClick={() => {
                  const el = document.getElementById('demo');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Watch Video
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <Carousel images={images} autoPlay={true} autoPlayInterval={3000} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
