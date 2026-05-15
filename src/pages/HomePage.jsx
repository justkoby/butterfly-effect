import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, CheckCircle2, Award, Briefcase, Eye, Move, Palette, Sparkles, MessageCircle } from 'lucide-react';
import FireWallSimulation from '../components/FireWallSimulation';
import WorkSlideshow from '../components/WorkSlideshow';


export default function HomePage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="homepage" style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)', minHeight: '100vh', fontSmooth: 'always' }}>
      
      {/* 1. HERO SECTION */}
      <section style={{ padding: isMobile ? '120px 16px 32px' : '120px 24px 64px' }}>
        <div className="section-container" style={{
          background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.96), rgba(20, 20, 20, 0.98)), url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '24px',
          padding: isMobile ? '48px 24px' : '96px 80px 80px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1.2fr 0.8fr',
          gap: isMobile ? '2.5rem' : '3rem',
          alignItems: 'start',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <FireWallSimulation />
          {/* Left-to-right gradient overlay */}
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.05) 100%)',
            zIndex: 1, pointerEvents: 'none', borderRadius: '24px'
          }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', zIndex: 2, position: 'relative' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span style={{ color: '#F43F5E', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>
                Butterfly Effect Concepts
              </span>
              <h1 style={{
                fontSize: isMobile ? '32px' : '40px',
                fontWeight: 600,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: '#ffffff',
                margin: 0
              }}>
                We design brands, campaigns, and digital experiences that people notice and remember.
              </h1>
            </div>

            <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.15rem', lineHeight: 1.55, maxWidth: '600px', margin: 0 }}>
              From product packaging to digital platforms, we design experiences that bring clarity and presence to brands.
            </p>


            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
              <Link to="/contact" className="hero-cta-primary">
                Start a Project <ArrowRight size={18} />
              </Link>
              <Link to="/projects" className="hero-cta-secondary">
                View Work <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>

          {!isMobile && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'start', gap: '1.5rem', zIndex: 2, position: 'relative' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'flex-end', maxWidth: '400px' }}>
                {['UI/UX Design', 'Web Design', 'Motion Graphics', 'Product Design', 'Brand Strategy'].map((tag, idx) => (
                  <span key={idx} style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#ffffff',
                    padding: '0.65rem 1.25rem',
                    borderRadius: '100px',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    whiteSpace: 'nowrap'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 2. ABOUT SNAPSHOT */}
      <section style={{ padding: isMobile ? '64px 16px' : '120px 0', background: 'var(--bg-primary)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="section-container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : '1.4fr 0.6fr', 
            gap: '3rem', 
            alignItems: 'center',
            marginBottom: isMobile ? '3rem' : '6rem'
          }}>
            <h2 style={{ 
              fontSize: isMobile ? '32px' : '58px', 
              fontWeight: 600, 
              lineHeight: 1.1, 
              color: 'var(--text-primary)',
              maxWidth: '900px',
              letterSpacing: '-0.02em'
            }}>
              Small details. Big effect.
            </h2>
            <div style={{ display: 'flex', justifyContent: isMobile ? 'flex-start' : 'flex-end' }}>
              <Link to="/about" className="hero-cta-secondary" style={{ border: '1px solid var(--border-color)', color: 'var(--text-primary)' }}>
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
            <div style={{ flex: '1', position: 'relative', borderRadius: '32px', overflow: 'hidden', height: isMobile ? '320px' : '520px', background: 'var(--bg-tertiary)', width: isMobile ? '100%' : '50%' }}>
              <WorkSlideshow />
            </div>
            <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '2rem', width: isMobile ? '100%' : '50%' }}>
              <p style={{ 
                fontSize: isMobile ? '1.25rem' : '1.85rem', 
                lineHeight: 1.3, 
                color: 'var(--text-primary)',
                fontWeight: 600,
                letterSpacing: '-0.01em',
                margin: 0
              }}>
                We are a team of people who love to create things! Think of us as your partners for making your business look great and get noticed.
              </p>
              
              <div style={{ marginTop: '1rem' }}>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', display: 'block', marginBottom: '1.25rem', fontWeight: 500 }}>Trusted by brands</span>
                <div className="logo-marquee-container" style={{ padding: '0', background: 'transparent' }}>
                  <div className="logo-marquee-track">
                    {[
                      'ugsrcwelfare.png', 
                      'duaa-logo-color.png', 
                      'cosmotech-logo.png', 
                      'logo with black text.png', 
                      '@5 FULL LOGO GREEN.png', 
                      'bagsgopgh.png', 
                      'AMS LOGO WITH TEXT.png', 
                      'dukari-Logo (BreakFast).png',
                      'winwin-logo new.png'
                    ].map((logo, idx) => (
                      <div key={idx} className="logo-slide-card">
                        <img src={`/${logo}`} alt="Brand Logo" />
                      </div>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {[
                      'ugsrcwelfare.png', 
                      'duaa-logo-color.png', 
                      'cosmotech-logo.png', 
                      'logo with black text.png', 
                      '@5 FULL LOGO GREEN.png', 
                      'bagsgopgh.png', 
                      'AMS LOGO WITH TEXT.png', 
                      'dukari-Logo (BreakFast).png',
                      'winwin-logo new.png'
                    ].map((logo, idx) => (
                      <div key={`dup-${idx}`} className="logo-slide-card">
                        <img src={`/${logo}`} alt="Brand Logo" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STATS SECTION */}
      <section style={{ padding: isMobile ? '60px 16px' : '100px 0', background: 'var(--bg-primary)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="section-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1.1fr 1fr',
            gap: isMobile ? '1.5rem' : '2rem',
            alignItems: 'center'
          }}>
            {/* Stat: Experience */}
            <div style={{
              background: 'var(--bg-secondary)',
              borderRadius: '24px',
              padding: '2.5rem 2rem',
              height: isMobile ? 'auto' : '280px',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
            }}>
              <span style={{ fontSize: '3.5rem', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-primary)', lineHeight: 1 }}>6+</span>
              <div>
                <p style={{ fontWeight: 700, fontSize: '1.05rem', margin: '0 0 0.5rem', color: 'var(--text-primary)' }}>Years Experience</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>Working across brands, campaigns, and digital platforms.</p>
              </div>
            </div>

            {/* Centre Feature Card */}
            <div style={{
              background: 'linear-gradient(160deg, #1a1a1a 0%, #0A0A0A 100%)',
              borderRadius: '24px',
              padding: '2.5rem 2rem',
              height: isMobile ? 'auto' : '340px',
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
            }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                background: 'radial-gradient(circle at 70% 30%, rgba(244, 63, 94, 0.2) 0%, transparent 60%)',
                zIndex: 0
              }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <p style={{ fontWeight: 600, fontSize: '1.05rem', margin: '0', color: '#ffffff', lineHeight: 1.6 }}>
                  Small details,<br/>big effect.

                </p>
                <Link to="/contact" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                  marginTop: '1.5rem',
                  background: '#F43F5E', color: '#fff',
                  padding: '0.85rem 1.6rem', borderRadius: '100px',
                  fontWeight: 600, fontSize: '0.95rem'
                }}>
                  Get in Touch <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Stat: Projects */}
            <div style={{
              background: 'var(--bg-secondary)',
              borderRadius: '24px',
              padding: '2.5rem 2rem',
              height: isMobile ? 'auto' : '280px',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
            }}>
              <span style={{ fontSize: '3.5rem', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-primary)', lineHeight: 1 }}>50+</span>
              <div>
                <p style={{ fontWeight: 700, fontSize: '1.05rem', margin: '0 0 0.5rem', color: 'var(--text-primary)' }}>Projects Delivered</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>Clients across brands, events, and organizations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT WE BUILD */}
      <section style={{ padding: isMobile ? '64px 16px' : '120px 0', background: 'var(--bg-secondary)' }}>
        <div className="section-container">
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '3rem' : '5rem' }}>
            <span style={{ color: '#F43F5E', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '3px' }}>Services</span>
            <h2 style={{ fontSize: isMobile ? '38px' : '60px', fontWeight: 700, marginTop: '1rem', letterSpacing: '-0.03em', color: '#0A0A0A' }}>What We Build</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? '1.5rem' : '2rem'
          }}>
            {[
              {
                num: '01',
                title: 'Brand Identity & Packaging',
                desc: 'Logos, product labels, and visual systems that define how your brand shows up.',
                features: ['Logo Design', 'Brand Guidelines', 'Product Packaging'],
                link: '/services'
              },
              {
                num: '02',
                title: 'Campaign & Graphic Design',
                desc: 'Posters, event visuals, social media, and promotional design that grabs attention.',
                features: ['Event Posters', 'Social Media Design', 'Promotional Collateral'],
                link: '/services'
              },
              {
                num: '03',
                title: 'Website Design',
                desc: 'Clean, functional websites built to communicate clearly and perform.',
                features: ['UI/UX Design', 'Responsiveness', 'Project-Based Deliverables'],
                link: '/services'
              }
            ].map((svc, i) => (
              <div key={i} style={{
                background: 'var(--bg-card)',
                borderRadius: '24px',
                padding: '2.5rem 2rem',
                border: '1px solid var(--border-color)',
                display: 'flex', flexDirection: 'column', gap: '1.5rem',
                transition: 'all 0.3s ease'
              }} className="service-card-home">
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>{svc.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.97rem', lineHeight: 1.6, margin: 0 }}>{svc.desc}</p>
                </div>
                <Link to={svc.link} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                  background: 'var(--bg-tertiary)', color: 'var(--text-primary)',
                  padding: '0.7rem 1.4rem', borderRadius: '100px',
                  fontWeight: 600, fontSize: '0.9rem', width: 'fit-content',
                  border: '1px solid var(--border-color)'
                }}>
                  Read More <ArrowUpRight size={15} />
                </Link>
                <div style={{ borderTop: '1px solid #F0F0F0', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {svc.features.map((f, fi) => (
                    <span key={fi} style={{ fontSize: '0.9rem', color: '#777', borderBottom: fi < svc.features.length - 1 ? '1px solid #F5F5F5' : 'none', paddingBottom: fi < svc.features.length - 1 ? '0.75rem' : '0' }}>{f}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link to="/services" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
              background: 'var(--text-primary)', color: 'var(--bg-primary)',
              padding: '1rem 2.25rem', borderRadius: '100px',
              fontWeight: 600, fontSize: '1rem'
            }}>
              View All Services <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

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
