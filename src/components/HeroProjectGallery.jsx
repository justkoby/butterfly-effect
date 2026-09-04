import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Play, Pause } from 'lucide-react';
import { heroMediaCollection } from '../data/heroMedia';
import './HeroProjectGallery.css';

// Individual Card Component with optimized video intersection and playback handling
function GalleryCard({ item, isPaused, isReducedMotion, heightClass, isDuplicate }) {
  const cardRef = useRef(null);
  const videoRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);

  // IntersectionObserver to only play video when visible in viewport
  useEffect(() => {
    if (item.type !== 'video' || isReducedMotion || hasVideoError) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: '100px 0px', // Pre-load slightly before entering viewport
        threshold: 0.15
      }
    );

    const target = cardRef.current;
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) observer.unobserve(target);
      observer.disconnect();
    };
  }, [item.type, isReducedMotion, hasVideoError]);

  // Video playback controller
  useEffect(() => {
    const video = videoRef.current;
    if (!video || item.type !== 'video' || isReducedMotion || hasVideoError) return;

    const shouldPlay = isIntersecting && !isPaused && !document.hidden;

    if (shouldPlay) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Gracefully handle browser autoplay policies
        });
      }
    } else {
      video.pause();
    }
  }, [isIntersecting, isPaused, isReducedMotion, hasVideoError, item.type]);

  // Handle browser tab switching (Page Visibility API)
  useEffect(() => {
    if (item.type !== 'video' || isReducedMotion || hasVideoError) return;

    const handleVisibilityChange = () => {
      const video = videoRef.current;
      if (!video) return;

      if (document.hidden) {
        video.pause();
      } else if (isIntersecting && !isPaused) {
        video.play().catch(() => {});
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [isIntersecting, isPaused, isReducedMotion, hasVideoError, item.type]);

  const cardContent = (
    <>
      {item.type === 'video' ? (
        (isReducedMotion || hasVideoError) ? (
          <img
            src={item.poster || '/cover-idbf-01.jpg'}
            alt={item.title}
            className="hero-gallery-media"
            loading="lazy"
          />
        ) : (
          <>
            <video
              ref={videoRef}
              src={item.src}
              poster={item.poster}
              muted
              playsInline
              loop
              preload={isDuplicate ? 'none' : 'metadata'}
              onError={() => setHasVideoError(true)}
              className="hero-gallery-media"
              aria-label={item.title}
            />
            <div className="hero-gallery-video-badge">
              <span className="hero-gallery-video-dot" />
              Motion
            </div>
          </>
        )
      ) : (
        <img
          src={item.src}
          alt={item.title}
          className="hero-gallery-media"
          loading="lazy"
        />
      )}

      {/* Ambient Gradient overlay */}
      <div className="hero-gallery-card-overlay" />

      {/* Card Details */}
      <div className="hero-gallery-card-info">
        {item.category && <span className="hero-gallery-card-tag">{item.category}</span>}
        <h3 className="hero-gallery-card-title">{item.title}</h3>
      </div>
    </>
  );

  const containerClasses = `hero-gallery-card ${heightClass}`;

  if (item.route) {
    return (
      <Link
        ref={cardRef}
        to={item.route}
        className={containerClasses}
        aria-label={`View project: ${item.title}`}
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <div ref={cardRef} className={containerClasses}>
      {cardContent}
    </div>
  );
}

export default function HeroProjectGallery() {
  const [columnCount, setColumnCount] = useState(() => {
    if (typeof window === 'undefined') return 4;
    const width = window.innerWidth;
    if (width <= 768) return 2;
    if (width <= 1024) return 3;
    return 4;
  });

  const [isPaused, setIsPaused] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  // Check prefers-reduced-motion media query
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    if (mediaQuery.matches) {
      setIsPaused(true);
    }

    const handleChange = (e) => {
      setIsReducedMotion(e.matches);
      if (e.matches) setIsPaused(true);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Update column count on window resize
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setColumnCount(2);
      } else if (width <= 1024) {
        setColumnCount(3);
      } else {
        setColumnCount(4);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Divide media items across columns dynamically
  const columns = useMemo(() => {
    const cols = Array.from({ length: columnCount }, () => []);
    heroMediaCollection.forEach((item, index) => {
      cols[index % columnCount].push(item);
    });
    return cols;
  }, [columnCount]);

  // Height variation array to create organic staggered layout
  const heightClasses = ['card-h-md', 'card-h-lg', 'card-h-sm', 'card-h-md', 'card-h-lg', 'card-h-sm'];

  return (
    <div className={`hero-gallery-wrapper ${isPaused ? 'is-paused' : ''}`}>
      <div className="hero-gallery-columns">
        {columns.map((colItems, colIdx) => {
          // Even columns (0, 2) scroll up; Odd columns (1, 3) scroll down
          const isScrollUp = colIdx % 2 === 0;
          const directionClass = isScrollUp ? 'scroll-up' : 'scroll-down';

          return (
            <div
              key={`col-${colIdx}`}
              className={`hero-gallery-column ${directionClass}`}
            >
              <div className="hero-gallery-track">
                {/* 1st copy of column items */}
                {colItems.map((item, itemIdx) => {
                  const hClass = heightClasses[(colIdx * 2 + itemIdx) % heightClasses.length];
                  return (
                    <GalleryCard
                      key={`original-${item.id}-${itemIdx}`}
                      item={item}
                      isPaused={isPaused}
                      isReducedMotion={isReducedMotion}
                      heightClass={hClass}
                      isDuplicate={false}
                    />
                  );
                })}

                {/* 2nd duplicated copy for seamless continuous infinite loop */}
                {colItems.map((item, itemIdx) => {
                  const hClass = heightClasses[(colIdx * 2 + itemIdx) % heightClasses.length];
                  return (
                    <GalleryCard
                      key={`dup-${item.id}-${itemIdx}`}
                      item={item}
                      isPaused={isPaused}
                      isReducedMotion={isReducedMotion}
                      heightClass={hClass}
                      isDuplicate={true}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Accessible Floating Pause/Play Gallery Motion Control */}
      <button
        type="button"
        className="hero-gallery-control-btn"
        onClick={() => setIsPaused((prev) => !prev)}
        aria-label={isPaused ? 'Resume gallery motion' : 'Pause gallery motion'}
      >
        {isPaused ? (
          <>
            <Play size={14} fill="currentColor" />
            <span>Play Motion</span>
          </>
        ) : (
          <>
            <Pause size={14} fill="currentColor" />
            <span>Pause Motion</span>
          </>
        )}
      </button>
    </div>
  );
}
