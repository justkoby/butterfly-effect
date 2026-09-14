import { useEffect, useRef } from 'react';
import usePrefersReducedMotion from './usePrefersReducedMotion';

// Moves mediaRef content vertically inside containerRef as the page scrolls.
// The container never moves — only the inner media drifts, slightly
// oversized so the drift never exposes empty edges.
// intensity: max translate in px at the viewport edges (positive = slower media).
export default function useScrollParallax(containerRef, mediaRef, { intensity = 24, disabled = false } = {}) {
  const reduced = usePrefersReducedMotion();
  const rafRef = useRef(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    if (disabled || reduced || !intensity) return undefined;
    const container = containerRef.current;
    const media = mediaRef.current;
    if (!container || !media) return undefined;

    // Small screens get a shorter drift so the pinned sequence stays calm
    // and touch scrolling never feels like the media is fighting the finger.
    const isSmall = window.innerWidth <= 768;
    const effectiveIntensity = isSmall ? intensity * 0.5 : intensity;

    const update = () => {
      tickingRef.current = false;
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      if (rect.bottom < -100 || rect.top > viewportHeight + 100) return;
      const progress = (viewportHeight / 2 - (rect.top + rect.height / 2)) / (viewportHeight + rect.height);
      const clamped = Math.max(-0.5, Math.min(0.5, progress));
      // Oversize just enough to cover the maximum drift in both directions.
      const scale = 1 + (Math.abs(effectiveIntensity) * 2 + 4) / rect.height;
      media.style.transform = `translate3d(0, ${(clamped * effectiveIntensity * 2).toFixed(2)}px, 0) scale(${scale.toFixed(4)})`;
    };

    const requestUpdate = () => {
      if (!tickingRef.current) {
        tickingRef.current = true;
        rafRef.current = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      cancelAnimationFrame(rafRef.current);
    };
  }, [containerRef, mediaRef, intensity, disabled, reduced]);
}
