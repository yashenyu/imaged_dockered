import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';

function Carousel({ images = [], autoPlay = true, autoPlayInterval = 3000 }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const length = images.length;

  useEffect(() => {
    if (!autoPlay || length <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex(prev => (prev + 1) % length);
    }, autoPlayInterval);
    return () => clearInterval(timerRef.current);
  }, [autoPlay, autoPlayInterval, length]);

  const goTo = (i) => {
    clearInterval(timerRef.current);
    setIndex(((i % length) + length) % length);
  };

  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  const handleMouseEnter = () => clearInterval(timerRef.current);
  const handleMouseLeave = () => {
    if (!autoPlay || length <= 1) return;
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex(prev => (prev + 1) % length);
    }, autoPlayInterval);
  };

  if (length === 0) return null;

  return (
    <div
      className="hero-carousel"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-roledescription="carousel"
    >
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div className="carousel-slide" key={i}>
            <img src={src} alt={`App screenshot ${i + 1}`} className="carousel-image" />
          </div>
        ))}
      </div>

      {length > 1 && (
        <>
          <button className="carousel-arrow left" onClick={prev} aria-label="Previous slide">
            ‹
          </button>
          <button className="carousel-arrow right" onClick={next} aria-label="Next slide">
            ›
          </button>

          <div className="carousel-dots" role="tablist" aria-label="Slides">
            {images.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === index ? 'active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-selected={i === index}
                role="tab"
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Carousel;
