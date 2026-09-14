import { useEffect, useRef, useState } from 'react';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';
import useScrollParallax from '../hooks/useScrollParallax';
import SmartVideo from './SmartVideo';

// One tile of the featured-project bento grid.
// type: 'image' | 'video' | 'crossfade'
// The tile boundary never moves; parallax drifts only the inner media.
export default function BentoMediaTile({ tile, revealIndex = 0, revealed = true, children = null }) {
  const containerRef = useRef(null);
  const mediaRef = useRef(null);
  const reduced = usePrefersReducedMotion();
  useScrollParallax(containerRef, mediaRef, {
    intensity: tile.parallax || 0,
    disabled: !tile.parallax
  });

  const frames = tile.frames || [];
  const [frameIndex, setFrameIndex] = useState(0);
  useEffect(() => {
    if (tile.type !== 'crossfade' || reduced || frames.length < 2) return undefined;
    const id = window.setInterval(() => {
      setFrameIndex((index) => (index + 1) % frames.length);
    }, tile.interval || 4600);
    return () => window.clearInterval(id);
  }, [tile.type, frames.length, tile.interval, reduced]);

  return (
    <div
      ref={containerRef}
      className={`bento-tile bento-tile--${tile.type}${tile.dominant ? ' bento-tile--dominant' : ''}${tile.fit === 'contain' ? ' bento-tile--contain' : ''}`}
      style={{ gridArea: tile.area, '--reveal-delay': `${revealIndex * 70}ms` }}
      data-revealed={revealed || reduced ? 'true' : undefined}
    >
      <div ref={mediaRef} className="bento-tile-media">
        {tile.type === 'video' && (
          <SmartVideo
            src={tile.asset.src}
            poster={tile.poster}
            ariaLabel={tile.asset.alt}
            className="bento-tile-el"
            objectPosition={tile.position || 'center'}
          />
        )}

        {tile.type === 'image' && (
          <img
            src={tile.asset.src}
            alt={tile.asset.alt}
            className="bento-tile-el"
            style={{ objectPosition: tile.position || 'center', objectFit: tile.fit || 'cover' }}
            loading={tile.dominant ? 'eager' : 'lazy'}
            decoding="async"
          />
        )}

        {tile.type === 'crossfade' && frames.map((frame, index) => (
          <img
            key={frame.src}
            src={frame.src}
            alt={index === 0 ? frame.alt : ''}
            aria-hidden={index === 0 ? undefined : 'true'}
            className={`bento-tile-el bento-tile-frame${index === frameIndex ? ' is-active' : ''}`}
            style={{ objectPosition: frame.position || tile.position || 'center', objectFit: tile.fit || 'cover' }}
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>
      {children}
    </div>
  );
}
