import React, { useState, useEffect, useRef } from 'react';
import './WorkSlideshow.css';

const slideshowItems = [
  {
    type: 'video',
    url: 'https://res.cloudinary.com/justkoby/video/upload/v1778845497/stillwaters_bdybr2.mp4',
    duration: 'auto', // Play full length
  },
  {
    type: 'image',
    url: '/adonteng-eid v2.jpg',
    duration: 4000, // 4 seconds
  },
  {
    type: 'video',
    url: 'https://res.cloudinary.com/justkoby/video/upload/v1778845759/0120_qi5blb.mp4',
    duration: 5000, // 5 seconds
  }
];

export default function WorkSlideshow({ height = '100%', borderRadius = '0px', marginBottom = '0px' }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const timerRef = useRef(null);
  const videoRef = useRef(null);

  const nextSlide = () => {
    setIsExiting(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % slideshowItems.length);
      setIsExiting(false);
    }, 800);
  };

  useEffect(() => {
    const currentItem = slideshowItems[currentIndex];
    
    if (currentItem.type === 'video' && currentItem.duration === 'auto') {
      return;
    }

    const duration = currentItem.duration || 6000;
    timerRef.current = setTimeout(nextSlide, duration);

    return () => clearTimeout(timerRef.current);
  }, [currentIndex]);

  const handleVideoEnded = () => {
    const currentItem = slideshowItems[currentIndex];
    if (currentItem.type === 'video' && currentItem.duration === 'auto') {
      nextSlide();
    }
  };

  const handleDotClick = (index) => {
    if (index === currentIndex) return;
    setIsExiting(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsExiting(false);
    }, 800);
    clearTimeout(timerRef.current);
  };

  const currentItem = slideshowItems[currentIndex];

  return (
    <div 
      className="work-slideshow-container" 
      style={{ height, borderRadius, marginBottom }}
    >
      <div className={`slideshow-content ${isExiting ? 'fade-out' : 'fade-in'}`}>
        {currentItem.type === 'video' ? (
          <video
            ref={videoRef}
            key={currentItem.url}
            src={currentItem.url}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnded}
            className="slideshow-media"
          />
        ) : (
          <img
            src={currentItem.url}
            alt="Showcase work"
            className="slideshow-media"
          />
        )}
      </div>

      <div className="slideshow-controls">
        {slideshowItems.map((_, idx) => (
          <button
            key={idx}
            className={`slideshow-dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      <div className="slideshow-overlay">
        <div className="overlay-content">
          <span className="featured-tag">Featured Work</span>
        </div>
      </div>
    </div>
  );
}
