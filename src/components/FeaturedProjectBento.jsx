import { FIE_BENTO_TILES, FIE_PROJECT } from '../data/fieProject';
import useInView from '../hooks/useInView';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';
import BentoMediaTile from './BentoMediaTile';
import MagneticProjectLink from './MagneticProjectLink';
import './FeaturedProjectBento.css';

// Flagship bento showcase for the Selected Work section.
// Dark-framed asymmetric grid; the dominant tile is fully clickable and
// carries the magnetic circular CTA.
//
// Rendered two ways:
//   variant="static" (default) — mosaic + the permanent information footer.
//   variant="pinned"           — mosaic only; PinnedFeaturedProject supplies
//                                the scroll-driven title/metadata overlay, so
//                                the static info bar is suppressed here.
// `project` and `tiles` are props so a future flagship (e.g. AMACE 2023) can
// reuse the exact same mosaic renderer with different content and accents.
export default function FeaturedProjectBento({
  project = FIE_PROJECT,
  tiles = FIE_BENTO_TILES,
  variant = 'static',
  accent = null,
  ctaLabel = 'View Case Study'
}) {
  // 0.15 keeps the reveal reachable even on short landscape viewports:
  // the frame is ~1400px tall on mobile, so a 0.2 threshold could require
  // more pixels than a very short viewport can ever show at once.
  const [frameRef, inView] = useInView({ threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
  const reduced = usePrefersReducedMotion();
  const revealed = inView || reduced;
  const pinned = variant === 'pinned';
  const accentStyle = accent ? { '--bento-accent': accent } : undefined;

  return (
    <div
      className={`featured-project${pinned ? ' featured-project--pinned' : ''}`}
      style={accentStyle}
      aria-label={pinned ? undefined : `Featured project — ${project.title}`}
    >
      <div ref={frameRef} className="featured-project-frame" data-revealed={revealed ? 'true' : undefined}>
        <div className="bento-grid">
          {tiles.map((tile, index) => (
            <BentoMediaTile key={tile.id} tile={tile} revealIndex={index} revealed={revealed}>
              {tile.dominant && (
                <MagneticProjectLink to={project.route} label={ctaLabel} projectTitle={project.title} />
              )}
            </BentoMediaTile>
          ))}
        </div>

        {!pinned && (
          <div className="featured-project-info">
            <div className="featured-project-heading">
              <h3 className="featured-project-title">{project.title}</h3>
              <p className="featured-project-meta">{project.metaLine}</p>
            </div>
            <p className="featured-project-disciplines">{project.disciplines}</p>
          </div>
        )}
      </div>
    </div>
  );
}
