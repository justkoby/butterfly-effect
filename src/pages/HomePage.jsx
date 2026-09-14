import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import HeroProjectGallery from '../components/HeroProjectGallery';
import WorkSlideshow from '../components/WorkSlideshow';
import InteractiveServicesSection from '../components/InteractiveServicesSection';
import PinnedFeaturedProject from '../components/PinnedFeaturedProject';
import { portfolioProjects } from '../data/portfolioProjects';
import SEO from '../components/SEO';
import './HomePage.css';

// The four supporting projects shown under the flagship showcases, ordered by
// discipline. Details (title, image, role, route) resolve from the canonical
// portfolioProjects source, so reordering or swapping is a one-line change.
const SUPPORTING_WORK = [
  { id: 'e-waste-management-report', category: 'Report Design' },
  { id: 'all-africa-students-union', category: 'Brand Identity' },
  { id: 'idbf', category: 'Campaign & Event' },
  { id: 'ug-src-welfare-scheme', category: 'Website Design' }
];


export default function HomePage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="homepage" style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)', minHeight: '100vh', fontSmooth: 'always' }}>
      <SEO 
        title="Butterfly Effect Concepts — Branding &amp; Visual Design Studio in Accra, Ghana"
        description="Butterfly Effect Concepts is a premier creative design studio based in Accra, Ghana. We build high-impact visual identity systems, packaging, campaigns, websites, and digital experiences."
        path="/"
        keywords="Butterfly Effect Concepts, Butterfly Effect, Butterfly Effect Ghana, branding studio Accra, visual identity design Accra, graphic design studio Ghana, packaging design Accra, creative agency Accra, brand design studio Ghana, butterfly effect concepts instagram"
      />
      
      {/* 1. HERO SECTION WITH ENDLESS SCROLL GALLERY & SEARCHABLE H1 */}
      <section className="hero-revamp-section">
        <HeroProjectGallery />

        {/* Searchable Homepage H1 & Studio Badge */}
        <div className="hero-seo-headline-wrap">
          <div className="section-container">
            <div className="hero-seo-badge">
              <span className="hero-badge-glow" />
              Creative Studio &bull; Accra, Ghana
            </div>
            <h1 className="hero-seo-h1">
              Butterfly Effect Concepts
              <span className="hero-seo-sub">Visual Systems for Brands</span>
            </h1>
            <p className="hero-seo-tagline">
              We build distinctive brand identities, packaging, campaigns, and digital platforms with strategic clarity.
            </p>
          </div>
        </div>

        {/* Bottom gradient blending smoothly into near-black (#0a0a0a) */}
        <div className="hero-bottom-gradient" />
      </section>

      {/* 2. ABOUT SNAPSHOT - SEAMLESS BLEND SECTION */}
      <section className="about-seamless-section">
        <div className="section-container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : '1.4fr 0.6fr', 
            gap: '3rem', 
            alignItems: 'center',
            marginBottom: isMobile ? '3rem' : '6rem'
          }}>
            <h2 className="about-title" style={{ 
              fontSize: isMobile ? '32px' : '58px', 
              fontWeight: 600, 
              lineHeight: 1.1, 
              color: '#ffffff',
              maxWidth: '900px',
              letterSpacing: '-0.02em',
              margin: 0
            }}>
              Small details. Big effect.
            </h2>
            <div style={{ display: 'flex', justifyContent: isMobile ? 'flex-start' : 'flex-end' }}>
              <Link to="/about" className="outline-button button-on-dark">
                Learn More <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>

          <div style={{ 
            display: 'flex', 
            flexDirection: isMobile ? 'column' : 'row', 
            gap: isMobile ? '3rem' : '6rem',
            alignItems: 'center'
          }}>
            <div className="about-slideshow-box" style={{ flex: isMobile ? 'none' : '1', position: 'relative', borderRadius: '32px', overflow: 'hidden', height: isMobile ? '320px' : '520px', width: isMobile ? '100%' : '50%' }}>
              <WorkSlideshow />
            </div>
            <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '2rem', width: isMobile ? '100%' : '50%' }}>
              <p className="about-desc" style={{ 
                fontSize: isMobile ? '1.25rem' : '1.85rem', 
                lineHeight: 1.3, 
                color: 'rgba(255, 255, 255, 0.9)',
                fontWeight: 600,
                letterSpacing: '-0.01em',
                margin: 0
              }}>
                We are a creative studio based in Accra, Ghana. Think of us as your partners for making your brand look extraordinary and stand out in any market.
              </p>
              
              <div style={{ marginTop: '1rem' }}>
                <span className="about-trusted-label" style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.55)', display: 'block', marginBottom: '1.25rem', fontWeight: 500 }}>Trusted by brands</span>
                <div className="logo-marquee-container" style={{ padding: '0', background: 'transparent' }}>
                  <div className="logo-marquee-track">
                    {[
                      { src: 'ugsrcwelfare.png', name: 'UG SRC Welfare Scheme' }, 
                      { src: 'duaa-logo-color.png', name: 'Duaa Brand Identity' }, 
                      { src: 'cosmotech-logo.png', name: 'Cosmotech' }, 
                      { src: 'logo with black text.png', name: 'Partner Brand' }, 
                      { src: '@5 FULL LOGO GREEN.png', name: '@5 Brand' }, 
                      { src: 'bagsgopgh.png', name: 'Bags Go Ghana' }, 
                      { src: 'AMS LOGO WITH TEXT.png', name: 'AMS Global' }, 
                      { src: 'dukari-Logo (BreakFast).png', name: 'Dukari Breakfast' },
                      { src: 'winwin-logo new.png', name: 'Win Win Coffee' }
                    ].map((brand, idx) => (
                      <div key={idx} className="logo-slide-card">
                        <img src={`/${brand.src}`} alt={`Butterfly Effect Concepts Client — ${brand.name}`} />
                      </div>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {[
                      { src: 'ugsrcwelfare.png', name: 'UG SRC Welfare Scheme' }, 
                      { src: 'duaa-logo-color.png', name: 'Duaa Brand Identity' }, 
                      { src: 'cosmotech-logo.png', name: 'Cosmotech' }, 
                      { src: 'logo with black text.png', name: 'Partner Brand' }, 
                      { src: '@5 FULL LOGO GREEN.png', name: '@5 Brand' }, 
                      { src: 'bagsgopgh.png', name: 'Bags Go Ghana' }, 
                      { src: 'AMS LOGO WITH TEXT.png', name: 'AMS Global' }, 
                      { src: 'dukari-Logo (BreakFast).png', name: 'Dukari Breakfast' },
                      { src: 'winwin-logo new.png', name: 'Win Win Coffee' }
                    ].map((brand, idx) => (
                      <div key={`dup-${idx}`} className="logo-slide-card">
                        <img src={`/${brand.src}`} alt={`Butterfly Effect Concepts Client — ${brand.name}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE SERVICES SECTION */}
      <InteractiveServicesSection />


      {/* 5. SELECTED WORK */}
      <section style={{ padding: isMobile ? '64px 16px' : '120px 0', background: 'var(--bg-primary)' }}>
        <div className="section-container">
          <div style={{ marginBottom: isMobile ? '3.5rem' : '6rem', textAlign: 'center' }}>
            <span style={{ color: '#F43F5E', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '3px' }}>Portfolio</span>
            <h2 style={{ fontSize: isMobile ? '38px' : '64px', fontWeight: 700, marginTop: '1rem', letterSpacing: '-0.03em' }}>Selected Work</h2>
          </div>
        </div>

        {/* Flagship showcase: a scroll-pinned sequence that runs nearly
            edge-to-edge, outside the centred container. */}
        <PinnedFeaturedProject />

        <div className="section-container">
          <div className="sw-grid">
            {SUPPORTING_WORK.map(({ id, category }) => {
              const proj = portfolioProjects.find((p) => p.id === id);
              if (!proj) return null;
              const to = proj.route || `/projects/${proj.id}`;
              return (
                <Link key={id} to={to} className="sw-card">
                  <div className="sw-card-media">
                    <img src={proj.image} alt={proj.title} loading="lazy" decoding="async" />
                  </div>
                  <div className="sw-card-body">
                    <span className="sw-card-category">{category}</span>
                    <h3 className="sw-card-title">{proj.title}</h3>
                    {proj.role && <p className="sw-card-role">{proj.role}</p>}
                    <span className="sw-card-link">
                      View Project <ArrowUpRight size={16} className="sw-card-arrow" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <Link to="/projects" className="cta-button">
              Explore More Projects <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section style={{ padding: isMobile ? '80px 16px' : '140px 0', background: 'var(--bg-tertiary)', color: 'var(--text-primary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="section-container" style={{ textAlign: 'center', maxWidth: '900px' }}>
          <span style={{ color: '#F43F5E', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '3px' }}>Get Started</span>
          <h2 style={{ fontSize: isMobile ? '36px' : '64px', color: 'var(--text-primary)', margin: '1.5rem 0 2rem', letterSpacing: '-0.03em', lineHeight: 1.1 }}>Have an idea that needs shape?</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', margin: '0 auto 3.5rem', maxWidth: '600px', lineHeight: 1.6 }}>
            Let’s build a visual system that helps your brand show up clearly.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
            <Link to="/contact" className="cta-button">
              Start a Project <ArrowRight size={18} />
            </Link>
            <Link to="/projects" className="outline-button">
              View Work <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>


    </div>
  );
}
