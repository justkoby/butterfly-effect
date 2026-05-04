import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, CheckCircle2, Award, Briefcase, Eye, Move, Palette, Sparkles, MessageCircle } from 'lucide-react';


export default function HomePage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="homepage" style={{ background: '#FFFFFF', color: '#0A0A0A', minHeight: '100vh', fontSmooth: 'always' }}>
      
      {/* 1. HERO SECTION */}
      <section style={{ padding: isMobile ? '48px 16px 32px' : '80px 24px 64px' }}>
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
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', zIndex: 2 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span style={{ color: '#F43F5E', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>
                Butterfly Effect Concepts
              </span>
              <h1 style={{
                fontSize: isMobile ? '38px' : '64px',
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: '-0.02em',
                color: '#ffffff',
                margin: 0
              }}>
                We build visual systems for brands.
              </h1>
            </div>

            <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.15rem', lineHeight: 1.55, maxWidth: '600px', margin: 0 }}>
              From packaging to websites, we design experiences that bring clarity and presence to brands.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
              <Link to="/contact" className="cta-button" style={{ background: '#ffffff', color: '#0A0A0A', border: '1px solid #ffffff' }}>
                Start a Project <ArrowRight size={18} />
              </Link>
              <Link to="/projects" className="outline-button" style={{ border: '1px solid rgba(255, 255, 255, 0.25)', color: '#ffffff' }}>
                View Work
              </Link>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'flex-start' : 'flex-end', justifyContent: 'center', gap: '1.5rem', zIndex: 2 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: isMobile ? 'flex-start' : 'flex-end', maxWidth: '400px' }}>
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
        </div>
      </section>

      {/* 2. WORK PREVIEW / COLLAGE */}
      <section style={{ padding: isMobile ? '16px 16px' : '32px 0' }}>
        <div className="section-container">
          <div style={{ width: '100%', height: isMobile ? '220px' : '450px', borderRadius: '16px', overflow: 'hidden' }}>
            <img 
              src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200" 
              alt="Studio collage" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
        </div>
      </section>

      {/* 3. SHORT POSITIONING STATEMENT */}
      <section style={{ padding: isMobile ? '48px 16px' : '80px 0', background: '#F5F5F5', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="section-container" style={{ maxWidth: '900px' }}>
          <span className="section-subtitle" style={{ color: '#E11D48', marginBottom: '8px' }}>Identity</span>
          <h2 style={{ fontSize: isMobile ? '28px' : '42px', fontWeight: 600, lineHeight: 1.35, color: '#111111', margin: 0 }}>
            We build systems that help brands stay consistent, recognizable, and effective across platforms.
          </h2>
        </div>
      </section>

      {/* 4. SELECTED WORK */}
      <section style={{ padding: isMobile ? '64px 16px' : '100px 0' }}>
        <div className="section-container">
          <div style={{ marginBottom: isMobile ? '2.5rem' : '4rem' }}>
            <span className="section-subtitle" style={{ color: '#E11D48' }}>Portfolio</span>
            <h2 className="section-title">Selected Work</h2>
            <p style={{ color: '#444444', fontSize: '1.05rem', maxWidth: '600px', margin: 0 }}>
              A showcase of recent high-impact creative deliverables.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2.5rem' }}>
            {[
              { id: 'vianexta', title: 'ViaNexta', category: 'Digital Platform', role: 'UI/UX Design & Development', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600' },
              { id: 'global-student-forum', title: 'Global Student Forum', category: 'Digital Platform', role: 'UI/UX Design', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600' },
              { id: 'foreign-africa', title: 'Foreign Africa', category: 'Digital Platform', role: 'UI/UX Design & Development', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600' },
              { id: 'democrat-union-of-africa', title: 'Democrat Union of Africa', category: 'Digital Platform', role: 'UI/UX Design & Development', img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=600' },
              { id: 'win-win-coffee', title: 'Win Win Coffee', category: 'E-commerce', role: 'UI/UX Design & Branding', img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600' },
              { id: 'rxnetwork', title: 'RxNetwork', category: 'Digital Platform', role: 'UI/UX Design & Development', img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600' }
            ].map((proj) => (
              <div className="glass-card" key={proj.id} style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
                <div style={{ width: '100%', height: '230px', overflow: 'hidden' }}>
                  <img src={proj.img} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} className="zoom-on-hover" />
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1, gap: '0.75rem' }}>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: '#888888', textTransform: 'uppercase', letterSpacing: '1px' }}>{proj.category}</span>
                    <h3 style={{ fontSize: '1.35rem', color: '#111111', fontWeight: 600, margin: '0.25rem 0' }}>{proj.title}</h3>
                    <span style={{ fontSize: '0.85rem', color: '#444444' }}>{proj.role}</span>
                  </div>
                  <div style={{ marginTop: 'auto', paddingTop: '1rem', display: 'flex', justifyContent: 'flex-start' }}>
                    <Link to={`/projects/${proj.id}`} className="outline-button" style={{ padding: '10px 16px', fontSize: '0.9rem' }}>
                      View Project <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHAT WE BUILD */}
      <section style={{ padding: isMobile ? '64px 16px' : '100px 0', background: '#F5F5F5', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="section-container">
          <div style={{ marginBottom: isMobile ? '2.5rem' : '4rem', textAlign: 'center' }}>
            <span className="section-subtitle" style={{ color: '#E11D48' }}>Capabilities</span>
            <h2 className="section-title">What We Build</h2>
            <p style={{ color: '#444444', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto' }}>
              Direct creative services to meet your brand, packaging, print, and interactive digital needs.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: <Palette size={26} />, title: 'Brand Identity & Packaging', desc: 'Custom visuals, packaging, and brand systems designed for maximum presence.' },
              { icon: <Eye size={26} />, title: 'Campaign & Graphic Design', desc: 'Strategic print and digital promotional content deployed globally.' },
              { icon: <Move size={26} />, title: 'Website Design & Development', desc: 'Clean, lightning-fast interactive experiences built for any viewport.' },
              { icon: <Sparkles size={26} />, title: 'Creative Direction', desc: 'Cohesive and visual-first guidance across all product and digital platforms.' }
            ].map((serv, idx) => (
              <div className="glass-card" key={idx} style={{ padding: '2rem', background: '#FFFFFF' }}>
                <div style={{ color: '#E11D48', marginBottom: '1rem' }}>{serv.icon}</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#111111', margin: '0 0 0.5rem' }}>{serv.title}</h3>
                <p style={{ fontSize: '0.95rem', color: '#444444', margin: 0, lineHeight: 1.5 }}>{serv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PROCESS */}
      <section style={{ padding: isMobile ? '64px 16px' : '100px 0' }}>
        <div className="section-container">
          <div style={{ marginBottom: isMobile ? '2.5rem' : '4rem' }}>
            <span className="section-subtitle" style={{ color: '#E11D48' }}>Methodology</span>
            <h2 className="section-title">Process</h2>
            <p style={{ color: '#444444', fontSize: '1.05rem', maxWidth: '600px', margin: 0 }}>
              A structured and minimal approach from discover to long-term tracking.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {[
              { num: '01', title: 'Discover', desc: 'We research your goals and map specific functional requirements.' },
              { num: '02', title: 'Design', desc: 'Our team crafts high-end prototypes to build strategic visual resonance.' },
              { num: '03', title: 'Build', desc: 'We construct and test functionality across all standard viewports.' },
              { num: '04', title: 'Refine', desc: 'Successful product deployment and ongoing tracking for visual impact.' }
            ].map((step) => (
              <div className="glass-card" key={step.num} style={{ padding: '2rem', background: '#FFFFFF', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#E11D48' }}>{step.num}</span>
                <h3 style={{ fontSize: '1.15rem', color: '#111111', fontWeight: 600, margin: 0 }}>{step.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#444444', margin: 0, lineHeight: 1.45 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CREDIBILITY STATS */}
      <section style={{ padding: isMobile ? '48px 16px' : '80px 0', background: '#F5F5F5', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '1.5rem' }}>
            <div className="glass-card" style={{ padding: '2.5rem 2rem', textAlign: 'center', background: '#FFFFFF' }}>
              <h3 style={{ fontSize: '3.2rem', color: '#111111', fontWeight: 700, margin: '0 0 0.5rem' }}>6+</h3>
              <p style={{ color: '#444444', fontSize: '0.95rem', fontWeight: 600, margin: 0 }}>Years of Experience</p>
            </div>
            <div className="glass-card" style={{ padding: '2.5rem 2rem', textAlign: 'center', background: '#FFFFFF' }}>
              <h3 style={{ fontSize: '3.2rem', color: '#111111', fontWeight: 700, margin: '0 0 0.5rem' }}>50+</h3>
              <p style={{ color: '#444444', fontSize: '0.95rem', fontWeight: 600, margin: 0 }}>Completed Projects</p>
            </div>
            <div className="glass-card" style={{ padding: '2.5rem 2rem', textAlign: 'center', background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <p style={{ color: '#111111', fontSize: '1.45rem', fontWeight: 700, margin: 0 }}>Accra, Ghana</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <section style={{ padding: isMobile ? '64px 16px' : '100px 0' }}>
        <div className="section-container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="section-subtitle" style={{ color: '#E11D48' }}>Get Started</span>
          <h2 style={{ fontSize: isMobile ? '32px' : '44px', color: '#111111', margin: '0.5rem 0 1rem' }}>Have an idea that needs shape?</h2>
          <p style={{ color: '#444444', fontSize: '1.15rem', margin: '0 auto 2.5rem', maxWidth: '600px' }}>
            Let’s build a visual system that helps your brand show up clearly.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <Link to="/contact" className="cta-button">
              Start a Project <ArrowRight size={18} />
            </Link>
            <Link to="/projects" className="outline-button">
              View Work
            </Link>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer style={{ background: '#0A0A0A', color: '#FFFFFF', padding: isMobile ? '48px 16px 32px' : '80px 0 40px' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.5fr 1fr 1fr', gap: '3rem', marginBottom: '4rem' }}>
            <div>
              <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', margin: '0 0 1rem' }}>Butterfly Effect</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '0.95rem', lineHeight: 1.5, maxWidth: '320px', margin: 0 }}>
                We build visual systems for brands — across packaging, campaigns, and digital platforms.
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: '1rem', color: '#FFFFFF', margin: '0 0 1rem' }}>Get in Touch</h4>
              <a href="mailto:kobbydarko2016@gmail.com" style={{ display: 'block', color: 'rgba(255, 255, 255, 0.65)', fontSize: '0.95rem', margin: '0 0 0.5rem' }}>kobbydarko2016@gmail.com</a>
              <span style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '0.95rem' }}>+233546379235</span>
            </div>
            <div>
              <h4 style={{ fontSize: '1rem', color: '#FFFFFF', margin: '0 0 1rem' }}>Social Media</h4>
              <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem' }}>
                <a href="https://wa.me/233546379235" target="_blank" rel="noreferrer" style={{ color: 'rgba(255, 255, 255, 0.65)' }}>WhatsApp</a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ color: 'rgba(255, 255, 255, 0.65)' }}>Instagram</a>
                <a href="https://behance.net" target="_blank" rel="noreferrer" style={{ color: 'rgba(255, 255, 255, 0.65)' }}>Behance</a>
              </div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '2.5rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(2.2rem, 6vw, 6rem)', color: 'rgba(255, 255, 255, 0.85)', margin: 0, fontWeight: 800, letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
              BUTTERFLY EFFECT
            </h2>
          </div>
        </div>
      </footer>
    </div>
  );
}
