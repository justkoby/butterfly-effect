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
  const transitionRef = useRef(null);
  const requestedIndexRef = useRef(0);
  const videoRef = useRef(null);

  const clearTimer = (ref) => {
    if (ref.current) {
      clearTimeout(ref.current);
      ref.current = null;
    }
  };

  const goToSlide = (index) => {
    const target = ((index % slideshowItems.length) + slideshowItems.length) % slideshowItems.length;
    // Latest selection wins: ignore repeats of the already-requested slide
    if (target === requestedIndexRef.current) return;
    requestedIndexRef.current = target;

    // Cancel any pending autoplay tick and in-flight transition
    clearTimer(timerRef);
    clearTimer(transitionRef);

    setIsExiting(true);
    transitionRef.current = setTimeout(() => {
      transitionRef.current = null;
      setCurrentIndex(requestedIndexRef.current);
      setIsExiting(false);
    }, 800);
  };

  const nextSlide = () => {
    goToSlide(requestedIndexRef.current + 1);
  };

  useEffect(() => {
    const currentItem = slideshowItems[currentIndex];

    if (currentItem.type === 'video' && currentItem.duration === 'auto') {
      return;
    }

    const duration = currentItem.duration || 6000;
    timerRef.current = setTimeout(nextSlide, duration);

    return () => clearTimer(timerRef);
  }, [currentIndex]);

  // Clean up all timers on unmount
  useEffect(() => {
    return () => {
      clearTimer(timerRef);
      clearTimer(transitionRef);
    };
  }, []);

  const handleVideoEnded = () => {
    const currentItem = slideshowItems[currentIndex];
    // Ignore stale ended events from a slide the user has already navigated away from
    if (requestedIndexRef.current !== currentIndex) return;
    if (currentItem.type === 'video' && currentItem.duration === 'auto') {
      nextSlide();
    }
  };

  const handleDotClick = (index) => {
    goToSlide(index);
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
