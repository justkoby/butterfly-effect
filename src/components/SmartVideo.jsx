import { useEffect, useRef } from 'react';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

// Muted, inline, loop-friendly video that only plays while substantially
// visible in the viewport. Never autoplays under prefers-reduced-motion —
// the poster frame remains visible instead.
export default function SmartVideo({
  src,
  poster,
  ariaLabel,
  className = '',
  style,
  loop = true,
  threshold = 0.25,
  objectPosition = 'center'
}) {
  const videoRef = useRef(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduced || typeof IntersectionObserver === 'undefined') return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= threshold) {
          video.play().catch(() => { /* autoplay blocked — poster remains */ });
        } else {
          video.pause();
        }
      },
      { threshold: [0, threshold, 0.6] }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [reduced, threshold]);

  return (
    <video
      ref={videoRef}
      className={className}
      style={{ objectFit: 'cover', objectPosition, ...style }}
      src={src}
      poster={poster}
      muted
      playsInline
      loop={loop}
      autoPlay={!reduced}
      preload="metadata"
      aria-label={ariaLabel}
      tabIndex={-1}
    />
  );
}
