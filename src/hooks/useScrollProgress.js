import { useEffect, useRef } from 'react';

// Scroll-progress driver for the pinned flagship project scene.
//
// Rather than animating with React state (which would re-render on every
// scroll frame), this hook measures how far the tall section has travelled
// through the viewport and writes a set of normalised CSS custom properties
// straight onto the section element. All visual phases are then expressed in
// CSS from those variables, so the work stays on the compositor.
//
// Progress model:
//   progress = -rect.top / (sectionHeight - viewportHeight), clamped 0..1
//   0 -> section top meets viewport top (pin begins)
//   1 -> section bottom meets viewport bottom (pin releases)
//
// `onFrame` receives the raw progress and returns a plain object of
// { '--var': value } pairs to publish for that frame.
export default function useScrollProgress(sectionRef, onFrame, { disabled = false } = {}) {
  const rafRef = useRef(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    if (disabled) return undefined;
    const section = sectionRef.current;
    if (!section) return undefined;

    const update = () => {
      tickingRef.current = false;
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const total = section.offsetHeight - viewportHeight;
      const progress = total > 0
        ? Math.min(1, Math.max(0, -rect.top / total))
        : 0;

      // Skip work while the section is nowhere near the viewport.
      if (rect.bottom < -viewportHeight || rect.top > viewportHeight * 2) return;

      const vars = onFrame ? onFrame(progress) : null;
      if (vars) {
        for (const key in vars) {
          section.style.setProperty(key, vars[key]);
        }
      }
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
  }, [sectionRef, onFrame, disabled]);
}

// Smoothstep easing used to map progress sub-ranges onto 0..1 ramps.
export function smoothstep(edge0, edge1, x) {
  if (edge1 === edge0) return x < edge0 ? 0 : 1;
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}
