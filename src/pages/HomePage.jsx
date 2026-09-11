import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import HeroProjectGallery from '../components/HeroProjectGallery';
import WorkSlideshow from '../components/WorkSlideshow';
import InteractiveServicesSection from '../components/InteractiveServicesSection';
import SEO from '../components/SEO';
import './HomePage.css';


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
              <Link to="/about" className="hero-cta-btn-secondary about-learn-more-btn">
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
            <div className="about-slideshow-box" style={{ flex: '1', position: 'relative', borderRadius: '32px', overflow: 'hidden', height: isMobile ? '320px' : '520px', width: isMobile ? '100%' : '50%' }}>
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

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
            gap: isMobile ? '3rem' : '5rem' 
          }}>
            {[
              { id: 'ug-src-welfare', title: 'UG SRC Welfare Scheme', category: 'Digital Platform', sub: 'UI/UX Design & Development', img: '/welfare-thumbnail-01.jpg' },
              { id: 'idbf', title: 'IDBF', category: 'Campaign & Event Design', img: '/cover-idbf-01.jpg' },
              { id: 'aasu-summit', title: 'AASU / Africa Students & Youth Summit', category: 'Campaign & Event Design', img: 'https://images.unsplash.com/photo-1540575861501-7ad0582371f3?auto=format&fit=crop&q=80&w=1000' },
              { id: 'vianexta', title: 'ViaNexta', category: 'Digital & Web', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000' },
              { id: 'foreign-africa', title: 'Foreign Africa', category: 'Digital & Web', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000' },
              { id: 'democrat-union', title: 'Democrat Union of Africa', category: 'Digital & Web', img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1000' },
              { id: 'global-student', title: 'Global Student Forum', category: 'Digital & Web', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000' },
              { id: 'lomokie', title: 'Lomokie', category: 'Fashion / Lifestyle', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1000' }
            ].map((proj) => (
              <div key={proj.id} className="project-card-refined" style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                <div style={{ 
                  width: '100%', 
                  aspectRatio: '16/11', 
                  borderRadius: '28px', 
                  overflow: 'hidden',
                  background: '#f0f0f0',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
                }}>
                  <img 
                    src={proj.img} 
                    alt={proj.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)' }} 
                    className="hover-zoom-trigger"
                  />
                </div>
                <div>
                  <span style={{ fontSize: '0.85rem', color: '#F43F5E', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>{proj.category}</span>
                  <h3 style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 600, marginTop: '0.5rem', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>{proj.title}</h3>
                  {proj.sub && <p style={{ color: '#888', fontSize: '0.95rem', margin: '0.25rem 0 0', fontWeight: 400 }}>{proj.sub}</p>}
                  <Link to={`/projects/${proj.id}`} style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '0.6rem', 
                    marginTop: '1.25rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    fontSize: '1rem',
                    borderBottom: '1px solid transparent',
                    paddingBottom: '2px'
                  }} className="view-project-link">
                    View Project <ArrowUpRight size={20} />
                  </Link>
                </div>
              </div>
            ))}
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
            <Link to="/contact" className="hero-cta-primary">
              Start a Project <ArrowRight size={18} />
            </Link>
            <Link to="/projects" className="hero-cta-secondary" style={{ border: '1px solid var(--border-color)' }}>
              View Work <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>


    </div>
  );
}
