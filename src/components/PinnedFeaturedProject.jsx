import { useEffect, useRef } from 'react';
import { FIE_BENTO_TILES, FIE_PROJECT } from '../data/fieProject';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';
import useScrollProgress, { smoothstep } from '../hooks/useScrollProgress';
import FeaturedProjectBento from './FeaturedProjectBento';
import './PinnedFeaturedProject.css';

// ---------------------------------------------------------------------------
// PinnedFeaturedProject — scroll-driven, pinned flagship sequence.
//
// A tall section (260vh desktop / shorter on mobile) holds a sticky, viewport-
// tall stage. The bento mosaic stays pinned while scroll progress drives four
// phases:
//   1. 0.00–0.35  visual showcase (mosaic + CTA only)
//   2. 0.35–0.60  title rises from below, metadata follows, gradient deepens
//   3. 0.60–0.80  title/metadata hold over the pinned visuals
//   4. 0.80–1.00  text fades up & out, mosaic fades / scales down / drifts up
//
// Progress is turned into CSS custom properties on the section (see
// useScrollProgress) so no React state updates fire per scroll frame.
//
// Reusable: pass a different `project`, `tiles`, `accent` and `ctaLabel` to
// build the next flagship (e.g. AMACE 2023) with the same interaction.
// ---------------------------------------------------------------------------

// Phase timing (normalised 0..1 of the pinned scroll distance), documented in
// the header above and implemented in progressToVars():
//   showcase 0.00–0.35 · textEntrance 0.35–0.60 · hold 0.60–0.80 · exit 0.80–1.00

function progressToVars(p) {
  const titleEnter = smoothstep(0.35, 0.54, p);
  const metaEnter = smoothstep(0.44, 0.62, p);
  const exit = smoothstep(0.82, 1.0, p);
  const keep = 1 - exit;

  const titleOpacity = titleEnter * keep;
  const metaOpacity = metaEnter * keep;
  const titleY = (1 - titleEnter) * 72 - exit * 48;
  const metaY = (1 - metaEnter) * 52 - exit * 48;

  // Lower gradient deepens slightly as the title arrives (readability).
  const gradBoost = smoothstep(0.32, 0.56, p) * 0.5;

  // Phase 4 mosaic exit.
  const mosaicFade = smoothstep(0.80, 1.0, p);
  const mosaicOpacity = 1 - mosaicFade * 0.9;
  const mosaicScale = 1 - mosaicFade * 0.05;
  const mosaicY = -mosaicFade * 48;

  // CTA stays for the showcase + text phases, then fades before the handoff.
  const ctaOpacity = 1 - smoothstep(0.74, 0.92, p);

  return {
    '--pp-title-opacity': titleOpacity.toFixed(3),
    '--pp-title-y': `${titleY.toFixed(2)}px`,
    '--pp-meta-opacity': metaOpacity.toFixed(3),
    '--pp-meta-y': `${metaY.toFixed(2)}px`,
    '--pp-grad-boost': gradBoost.toFixed(3),
    '--pp-mosaic-opacity': mosaicOpacity.toFixed(3),
    '--pp-mosaic-scale': mosaicScale.toFixed(4),
    '--pp-mosaic-y': `${mosaicY.toFixed(2)}px`,
    '--pp-cta-opacity': ctaOpacity.toFixed(3)
  };
}

export default function PinnedFeaturedProject({
  project = FIE_PROJECT,
  tiles = FIE_BENTO_TILES,
  accent = '#F43F5E',
  ctaLabel = 'View Case Study'
}) {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const mosaicRef = useRef(null);
  const reduced = usePrefersReducedMotion();

  useScrollProgress(sectionRef, progressToVars, { disabled: reduced });

  // Fit the whole mosaic inside the sticky stage so nothing overflows and the
  // title always has room over the lower gradient. Runs on resize + as media
  // loads (ResizeObserver), never per scroll frame.
  useEffect(() => {
    if (reduced) return undefined;
    const stage = stageRef.current;
    const mosaic = mosaicRef.current;
    if (!stage || !mosaic) return undefined;
    const frame = mosaic.querySelector('.featured-project-frame');

    const compute = () => {
      const stageHeight = stage.clientHeight;
      const frameHeight = frame ? frame.offsetHeight : stageHeight;
      const fit = frameHeight > 0 ? Math.min(1, (stageHeight * 0.9) / frameHeight) : 1;
      if (sectionRef.current) sectionRef.current.style.setProperty('--pp-fit', fit.toFixed(4));
    };

    compute();
    let ro;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(compute);
      ro.observe(stage);
      if (frame) ro.observe(frame);
    }
    window.addEventListener('resize', compute);
    return () => {
      if (ro) ro.disconnect();
      window.removeEventListener('resize', compute);
    };
  }, [reduced]);

  // Reduced motion: no pin, no gradient — plain grid with title/metadata below.
  if (reduced) {
    return (
      <section
        className="pinned-project pinned-project--reduced"
        aria-label={`Featured project — ${project.title}`}
      >
        <FeaturedProjectBento project={project} tiles={tiles} variant="static" accent={accent} ctaLabel={ctaLabel} />
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="pinned-project"
      style={{ '--pp-accent': accent }}
      aria-label={`Featured project — ${project.title}`}
    >
      <div ref={stageRef} className="pinned-project-stage">
        <div ref={mosaicRef} className="pinned-project-mosaic">
          <FeaturedProjectBento project={project} tiles={tiles} variant="pinned" accent={accent} ctaLabel={ctaLabel} />
        </div>

        {/* Bottom dissolve: transparent through the CTA band, opaque at the
            very bottom so tiles melt into the page background. The boost layer
            deepens slightly as the title enters. */}
        <div className="pinned-project-gradient" aria-hidden="true" />
        <div className="pinned-project-gradient pinned-project-gradient--boost" aria-hidden="true" />

        <div className="pinned-project-text">
          <h2 className="pinned-project-title">{project.title}</h2>
          <p className="pinned-project-meta">{project.metaLine}</p>
          <p className="pinned-project-disciplines">{project.disciplines}</p>
        </div>
      </div>
    </section>
  );
}
