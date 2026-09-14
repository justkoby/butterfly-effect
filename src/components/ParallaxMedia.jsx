import { useRef } from 'react';
import useScrollParallax from '../hooks/useScrollParallax';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

// Editorial media block with internal scroll parallax.
// The figure stays fixed in the layout; only the inner media drifts.
// Disabled on narrow viewports (parallaxOffBelow) and for reduced motion.
export default function ParallaxMedia({
  src,
  alt,
  ratio = '16 / 10',
  position = 'center',
  intensity = 30,
  eager = false,
  parallaxOffBelow = 768,
  className = '',
  children = null
}) {
  const figureRef = useRef(null);
  const mediaRef = useRef(null);
  const reduced = usePrefersReducedMotion();
  const disableParallax = reduced
    || (typeof window !== 'undefined' && window.innerWidth < parallaxOffBelow);

  useScrollParallax(figureRef, mediaRef, {
    intensity,
    disabled: disableParallax
  });

  return (
    <figure ref={figureRef} className={`cs-parallax-media ${className}`} style={{ aspectRatio: ratio, margin: 0 }}>
      <div ref={mediaRef} className="cs-parallax-inner">
        {children || (
          <img
            src={src}
            alt={alt}
            loading={eager ? 'eager' : 'lazy'}
            fetchPriority={eager ? 'high' : 'auto'}
            decoding="async"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: position, display: 'block' }}
          />
        )}
      </div>
    </figure>
  );
}
