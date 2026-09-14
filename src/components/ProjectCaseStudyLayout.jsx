import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import SEO from './SEO';
import ParallaxMedia from './ParallaxMedia';
import SmartVideo from './SmartVideo';
import useInView from '../hooks/useInView';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';
import './ProjectCaseStudyLayout.css';

// Reusable editorial case-study renderer. Consumes a data object
// (see src/data/fieProject.js) so future flagships reuse the same system.

function RevealSection({ children, className = '', ariaLabelledBy }) {
  // Small threshold: tall sections can never reach a high visibility ratio.
  const [ref, inView] = useInView({ threshold: 0.02, rootMargin: '0px 0px -6% 0px' });
  const reduced = usePrefersReducedMotion();
  return (
    <section
      ref={ref}
      className={`cs-section ${className}`}
      data-revealed={inView || reduced ? 'true' : undefined}
      aria-labelledby={ariaLabelledBy}
    >
      {children}
    </section>
  );
}

function SectionHeader({ eyebrow, heading, id }) {
  return (
    <div className="cs-section-header">
      {eyebrow && <span className="cs-eyebrow">{eyebrow}</span>}
      <h2 id={id} className="cs-heading">{heading}</h2>
    </div>
  );
}

function CaseStudyHero({ hero }) {
  const heroRef = useRef(null);
  const mediaRef = useRef(null);
  const contentRef = useRef(null);
  const overlayRef = useRef(null);
  const rafRef = useRef(0);
  const tickingRef = useRef(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return undefined;
    const isMobile = window.innerWidth < 768;
    if (isMobile) return undefined;
    const hero = heroRef.current;
    if (!hero) return undefined;

    const update = () => {
      tickingRef.current = false;
      const rect = hero.getBoundingClientRect();
      if (rect.bottom < 0) return;
      // progress: 0 when hero top hits viewport top → 1 when hero leaves
      const progress = Math.min(1, Math.max(0, -rect.top / rect.height));
      if (mediaRef.current) {
        // Media drifts slower than the page scroll
        mediaRef.current.style.transform = `translate3d(0, ${(progress * rect.height * 0.22).toFixed(2)}px, 0) scale(1.12)`;
      }
      if (overlayRef.current) {
        overlayRef.current.style.opacity = (0.45 + progress * 0.35).toFixed(3);
      }
      if (contentRef.current) {
        contentRef.current.style.transform = `translate3d(0, ${(-progress * rect.height * 0.1).toFixed(2)}px, 0)`;
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
  }, [reduced]);

  return (
    <header ref={heroRef} className="cs-hero">
      <div ref={mediaRef} className="cs-hero-media">
        <img src={hero.media.src} alt={hero.media.alt} loading="eager" fetchPriority="high" decoding="async" />
      </div>
      <div ref={overlayRef} className="cs-hero-overlay" aria-hidden="true" />
      <div ref={contentRef} className="cs-hero-content section-container">
        <span className="cs-hero-kicker">Case Study</span>
        <h1 className="cs-hero-title">{hero.title}</h1>
        <p className="cs-hero-descriptor">{hero.descriptor}</p>
        <dl className="cs-hero-meta">
          {hero.meta.map((item) => (
            <div key={item.label} className="cs-hero-meta-item">
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </header>
  );
}

function OverviewSection({ section }) {
  return (
    <RevealSection className="cs-overview" ariaLabelledBy="cs-overview-heading">
      <div className="cs-overview-grid">
        <div>
          <span className="cs-eyebrow">{section.eyebrow}</span>
          <h2 id="cs-overview-heading" className="cs-heading">{section.heading}</h2>
          <p className="cs-lead">{section.lead}</p>
        </div>
        <dl className="cs-meta-card" aria-label="Project details">
          {section.meta.map((item) => (
            <div key={item.label} className="cs-meta-row">
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </RevealSection>
  );
}

function TextSection({ section, index }) {
  const id = `cs-section-${index}`;
  return (
    <RevealSection ariaLabelledBy={id}>
      <div className="cs-text-block">
        <SectionHeader eyebrow={section.eyebrow} heading={section.heading} id={id} />
        <div className="cs-text-columns">
          {section.paragraphs.map((copy, idx) => (
            <p key={idx}>{copy}</p>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

function IdentitySection({ section, index }) {
  const id = `cs-section-${index}`;
  return (
    <RevealSection ariaLabelledBy={id}>
      <SectionHeader eyebrow={section.eyebrow} heading={section.heading} id={id} />
      {section.intro && <p className="cs-section-intro">{section.intro}</p>}

      {/* Identity lockups side by side — kept separate from event photography */}
      <div className="cs-pair">
        {section.identityPair.map((asset, idx) => (
          <figure key={idx} className="cs-framed">
            <img src={asset.src} alt={asset.alt} width={asset.width} height={asset.height} loading="lazy" decoding="async" />
          </figure>
        ))}
      </div>

      {/* Full-width campaign feature */}
      <div className="cs-feature-wrap">
        <ParallaxMedia
          src={section.feature.src}
          alt={section.feature.alt}
          ratio="21 / 9"
          position="center 30%"
          intensity={26}
        />
        {section.feature.caption && <p className="cs-caption">{section.feature.caption}</p>}
      </div>

      {/* Campaign graphics — square social formats */}
      <div className="cs-trio">
        {section.campaignGrid.map((asset, idx) => (
          <figure key={idx} className="cs-framed">
            <img src={asset.src} alt={asset.alt} width={asset.width} height={asset.height} loading="lazy" decoding="async" />
            {asset.caption && <figcaption className="cs-caption">{asset.caption}</figcaption>}
          </figure>
        ))}
      </div>

      {/* Asymmetric poster row: tall poster + square workshop graphic */}
      <div className="cs-asymmetric">
        <figure className="cs-framed">
          <img src={section.posterPair[0].src} alt={section.posterPair[0].alt} width={section.posterPair[0].width} height={section.posterPair[0].height} loading="lazy" decoding="async" />
          <figcaption className="cs-caption">{section.posterPair[0].caption}</figcaption>
        </figure>
        <figure className="cs-framed">
          <img src={section.posterPair[1].src} alt={section.posterPair[1].alt} width={section.posterPair[1].width} height={section.posterPair[1].height} loading="lazy" decoding="async" />
          <figcaption className="cs-caption">{section.posterPair[1].caption}</figcaption>
        </figure>
      </div>
    </RevealSection>
  );
}

function ExperienceSection({ section, index }) {
  const id = `cs-section-${index}`;
  const reduced = usePrefersReducedMotion();
  return (
    <RevealSection ariaLabelledBy={id}>
      <SectionHeader eyebrow={section.eyebrow} heading={section.heading} id={id} />
      <div className="cs-text-columns">
        {section.paragraphs.map((copy, idx) => (
          <p key={idx}>{copy}</p>
        ))}
      </div>

      {/* Vertical venue clips — muted loops, poster fallbacks, viewport-paused */}
      <div className="cs-video-trio">
        {section.videos.map((video, idx) => (
          <div key={idx} className="cs-video-vertical">
            <SmartVideo
              src={video.src}
              poster={video.poster}
              ariaLabel={video.alt}
              loop
              threshold={reduced ? 1 : 0.3}
            />
          </div>
        ))}
      </div>
    </RevealSection>
  );
}

function PhotographySection({ section, index }) {
  const id = `cs-section-${index}`;
  const [feature, ...rest] = section.photos;
  return (
    <RevealSection ariaLabelledBy={id}>
      <SectionHeader eyebrow={section.eyebrow} heading={section.heading} id={id} />

      {/* Full-width feature photograph */}
      <div className="cs-feature-wrap">
        <ParallaxMedia
          src={feature.src}
          alt={feature.alt}
          ratio="16 / 9"
          position="center 30%"
          intensity={34}
        />
        {feature.caption && <p className="cs-caption">{feature.caption}</p>}
      </div>

      {/* Two-column pairing */}
      <div className="cs-pair">
        {rest.map((photo, idx) => (
          <figure key={idx} className="cs-framed">
            <ParallaxMedia
              src={photo.src}
              alt={photo.alt}
              ratio="3 / 2"
              position="center 25%"
              intensity={18}
            />
            {photo.caption && <figcaption className="cs-caption">{photo.caption}</figcaption>}
          </figure>
        ))}
      </div>
    </RevealSection>
  );
}

function MotionSection({ section, index }) {
  const id = `cs-section-${index}`;
  return (
    <RevealSection ariaLabelledBy={id}>
      <SectionHeader eyebrow={section.eyebrow} heading={section.heading} id={id} />
      <div className="cs-text-columns">
        {section.paragraphs.map((copy, idx) => (
          <p key={idx}>{copy}</p>
        ))}
      </div>

      {/* Wide motion piece */}
      <div className="cs-feature-wrap">
        <div className="cs-video-wide">
          <SmartVideo
            src={section.video.src}
            poster={section.video.poster}
            ariaLabel={section.video.alt}
            loop
          />
        </div>
      </div>
    </RevealSection>
  );
}

function ReflectionSection({ section, index }) {
  const id = `cs-section-${index}`;
  return (
    <RevealSection className="cs-reflection" ariaLabelledBy={id}>
      <span className="cs-eyebrow">{section.eyebrow}</span>
      <h2 id={id} className="cs-heading">{section.heading}</h2>
      {section.paragraphs.map((copy, idx) => (
        <p key={idx} className="cs-reflection-copy">{copy}</p>
      ))}
    </RevealSection>
  );
}

function RelatedSection({ section, index }) {
  const id = `cs-section-${index}`;
  return (
    <RevealSection className="cs-related" ariaLabelledBy={id}>
      <span className="cs-eyebrow">Next</span>
      <h2 id={id} className="cs-heading">{section.heading}</h2>
      <div className="cs-related-links">
        <Link to="/work/e-waste-management-report" className="outline-button">
          E-Waste Report <ArrowUpRight size={16} />
        </Link>
        <Link to="/work/aasu-2025-annual-report" className="outline-button">
          AASU 2025 Report <ArrowUpRight size={16} />
        </Link>
        <Link to="/projects" className="cta-button">
          <ArrowLeft size={16} /> Back to Selected Work
        </Link>
      </div>
    </RevealSection>
  );
}

export default function ProjectCaseStudyLayout({ data }) {
  if (!data) return null;
  const { seo, hero, sections = [] } = data;

  return (
    <div className="cs-page">
      <SEO
        title={seo.title}
        description={seo.description}
        image={seo.image}
        path={seo.path}
        type="article"
        keywords={seo.keywords}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          'name': hero.title,
          'headline': `${hero.title} — ${hero.descriptor}`,
          'description': seo.description,
          'image': `https://butterflyeffectconcepts.com${seo.image}`,
          'url': `https://butterflyeffectconcepts.com${seo.path}`,
          'datePublished': '2023',
          'author': {
            '@type': 'Organization',
            'name': 'Butterfly Effect Concepts',
            'url': 'https://butterflyeffectconcepts.com'
          },
          'publisher': {
            '@type': 'Organization',
            'name': 'University of Professional Studies, Accra (UPSA)'
          },
          'inLanguage': 'en'
        }}
      />

      <CaseStudyHero hero={hero} />

      <div className="cs-body section-container">
        {sections.map((section, index) => {
          switch (section.type) {
            case 'overview': return <OverviewSection key={index} section={section} />;
            case 'text': return <TextSection key={index} section={section} index={index} />;
            case 'identity': return <IdentitySection key={index} section={section} index={index} />;
            case 'experience': return <ExperienceSection key={index} section={section} index={index} />;
            case 'photography': return <PhotographySection key={index} section={section} index={index} />;
            case 'motion': return <MotionSection key={index} section={section} index={index} />;
            case 'reflection': return <ReflectionSection key={index} section={section} index={index} />;
            case 'related': return <RelatedSection key={index} section={section} index={index} />;
            default: return null;
          }
        })}
      </div>
    </div>
  );
}
