import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

// Full-tile link with a circular CTA that gently follows the cursor.
// The circle drifts only within a small radius and eases back on leave.
// Disabled entirely for touch / no-hover devices and reduced motion.
export default function MagneticProjectLink({ to, label = 'View Case Study', projectTitle = 'this project', radius = 16 }) {
  const linkRef = useRef(null);
  const circleRef = useRef(null);
  const reduced = usePrefersReducedMotion();
  const stateRef = useRef({ targetX: 0, targetY: 0, x: 0, y: 0, raf: 0, hovering: false });

  useEffect(() => {
    if (reduced) return undefined;
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!canHover) return undefined;

    const link = linkRef.current;
    const circle = circleRef.current;
    if (!link || !circle) return undefined;
    const state = stateRef.current;

    const animate = () => {
      state.x += (state.targetX - state.x) * 0.16;
      state.y += (state.targetY - state.y) * 0.16;
      if (Math.abs(state.targetX - state.x) < 0.1) state.x = state.targetX;
      if (Math.abs(state.targetY - state.y) < 0.1) state.y = state.targetY;
      circle.style.transform = `translate3d(${state.x.toFixed(2)}px, ${state.y.toFixed(2)}px, 0)`;
      if (state.hovering || state.x !== 0 || state.y !== 0) {
        state.raf = requestAnimationFrame(animate);
      } else {
        state.raf = 0;
      }
    };

    const kick = () => {
      if (!state.raf) state.raf = requestAnimationFrame(animate);
    };

    const handleMove = (event) => {
      const circleRect = circle.getBoundingClientRect();
      const centerX = circleRect.left + circleRect.width / 2 - state.x;
      const centerY = circleRect.top + circleRect.height / 2 - state.y;
      let dx = event.clientX - centerX;
      let dy = event.clientY - centerY;
      const distance = Math.hypot(dx, dy);
      if (distance > radius) {
        dx = (dx / distance) * radius;
        dy = (dy / distance) * radius;
      }
      state.targetX = dx;
      state.targetY = dy;
      kick();
    };

    const handleEnter = () => { state.hovering = true; };
    const handleLeave = () => {
      state.hovering = false;
      state.targetX = 0;
      state.targetY = 0;
      kick();
    };

    link.addEventListener('pointermove', handleMove);
    link.addEventListener('pointerenter', handleEnter);
    link.addEventListener('pointerleave', handleLeave);
    return () => {
      link.removeEventListener('pointermove', handleMove);
      link.removeEventListener('pointerenter', handleEnter);
      link.removeEventListener('pointerleave', handleLeave);
      if (state.raf) cancelAnimationFrame(state.raf);
    };
  }, [reduced, radius]);

  return (
    <Link ref={linkRef} to={to} className="bento-magnetic-link" aria-label={`${label} — ${projectTitle}`}>
      <span ref={circleRef} className="bento-magnetic-circle" aria-hidden="true">
        <span className="bento-magnetic-text">
          {label}
          <ArrowUpRight size={16} strokeWidth={2.2} />
        </span>
      </span>
    </Link>
  );
}
