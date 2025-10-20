import React, { useState } from 'react';
import './VideoDemo.css';

const VideoDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Extract video ID from YouTube URL
  const videoUrl = "https://www.youtube.com/watch?v=vqY4db9L7jA";
  const videoId = videoUrl.split('v=')[1]?.split('&')[0] || 'vqY4db9L7jA';
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section id="demo" className="video-demo section">
      <div className="container">
        <h2 className="section-title">Demo Video</h2>
        <p className="section-subtitle">
          Watch a demonstration of the ImAged system
        </p>
        
        <div className="video-content">
          <div className="video-player-wrapper">
            {!isPlaying ? (
              <div className="video-thumbnail" onClick={handlePlayClick}>
                <img src={thumbnailUrl} alt="Video Thumbnail" className="thumbnail-image" />
                <div className="video-overlay">
                  <div className="play-button">
                    <div className="play-icon">▶</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="video-container">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                  title="ImAged Demo Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;
