import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, ArrowRight, ArrowDown, X } from 'lucide-react';
import SEO from '../components/SEO';

import { portfolioProjects } from '../data/portfolioProjects';

export default function ProjectDetailPage() {
  const [activeImage, setActiveImage] = useState(null);
  const { id } = useParams();
  const currentIdx = portfolioProjects.findIndex((p) => p.id === id);
  const project = portfolioProjects[currentIdx];

  if (!project) {
    return (
      <div className="section-container" style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <h2>Project Not Found</h2>
        <p style={{ margin: '1rem 0 2rem' }}>Sorry, the requested project detail could not be found.</p>
        <Link to="/projects" className="cta-button" style={{ display: 'inline-flex' }}>
          Back to Work
        </Link>
      </div>
    );
  }

  const nextProject = portfolioProjects[(currentIdx + 1) % portfolioProjects.length];

  return (
    <div className="project-detail-page" style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)', width: '100%', overflowX: 'hidden' }}>
      <SEO 
        title={`${project.title} — Case Study | Butterfly Effect Concepts`}
        description={`${project.overview || project.description} Created by Butterfly Effect Concepts, creative brand design studio based in Accra, Ghana.`}
        image={project.image}
        path={`/projects/${project.id}`}
        type="article"
        keywords={`Butterfly Effect Concepts, ${project.title}, ${project.category || 'branding'}, branding studio Accra, visual design case study, Ghana`}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          '@id': `https://butterflyeffectconcepts.com/projects/${project.id}#project`,
          'name': project.title,
          'headline': project.title,
          'description': project.overview || project.description,
          'image': project.image ? (project.image.startsWith('http') ? project.image : `https://butterflyeffectconcepts.com${project.image}`) : 'https://butterflyeffectconcepts.com/cover-idbf-01.jpg',
          'url': `https://butterflyeffectconcepts.com/projects/${project.id}`,
          'creator': {
            '@type': 'Organization',
            '@id': 'https://butterflyeffectconcepts.com/#organization',
            'name': 'Butterfly Effect Concepts',
            'url': 'https://butterflyeffectconcepts.com/'
          },
          'publisher': {
            '@type': 'Organization',
            '@id': 'https://butterflyeffectconcepts.com/#organization',
            'name': 'Butterfly Effect Concepts'
          },
          'inLanguage': 'en'
        }}
      />
      {/* 1. TOP HERO (Full Width Breakout) */}
      <div style={{ 
        width: '100vw', 
        height: '100vh', 
        position: 'relative', 
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        overflow: 'hidden'
      }}>
        {project.heroVideo ? (
          <video 
            src={project.heroVideo}
            autoPlay 
            muted 
            loop 
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <img 
            src={project.image} 
            alt={project.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        )}

        {/* Square Scroll Arrow at Bottom Center */}
        <div 
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          style={{ 
            position: 'absolute', 
            bottom: '0', 
            left: '50%', 
            transform: 'translateX(-50%)',
            zIndex: 10,
            cursor: 'pointer'
          }}
        >
          <div style={{ 
            width: '64px', 
            height: '64px', 
            background: 'var(--bg-primary)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            boxShadow: '0 -5px 20px rgba(0,0,0,0.1)'
          }}>
            <ArrowDown size={32} color="var(--text-primary)" />
          </div>
        </div>
      </div>



      {/* 2. PROJECT HEADER & ACTIONS */}
      <div className="section-container" style={{ maxWidth: '1100px', margin: '3.5rem auto 1.5rem', padding: '0 2rem' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <Link 
            to="/projects" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              color: 'var(--text-secondary)', 
              fontSize: '0.9rem', 
              fontWeight: 600,
              textDecoration: 'none'
            }}
          >
            <ArrowLeft size={16} /> Back to Selected Work
          </Link>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span style={{ 
              fontSize: '0.85rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.1em', 
              color: 'var(--accent-secondary)', 
              fontWeight: 700 
            }}>
              {project.category}
            </span>
            {project.status && (
              <span style={{ 
                background: 'rgba(244, 63, 94, 0.15)', 
                color: '#F43F5E', 
                padding: '3px 10px', 
                borderRadius: '100px', 
                fontSize: '0.75rem', 
                fontWeight: 700, 
                textTransform: 'uppercase', 
                letterSpacing: '0.05em' 
              }}>
                {project.status}
              </span>
            )}
            {project.role && (
              <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                • Role: {project.role}
              </span>
            )}
          </div>

          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800, margin: '0.25rem 0', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
            {project.title}
          </h1>

          <p style={{ fontSize: '1.2rem', lineHeight: 1.7, color: 'var(--text-secondary)', maxWidth: '850px', margin: 0 }}>
            {project.overview || project.description}
          </p>

          {/* Action Links (Visit Website / View Concept / View Brand Manual / View Brand Presentation) */}
          {(Boolean(project.link && project.link !== '#') || Boolean(project.manualPdf) || Boolean(project.presentationPdf)) && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
              {project.link && project.link !== '#' && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.75rem' }}
                >
                  {project.linkLabel || 'Visit Website'} <ArrowUpRight size={16} />
                </a>
              )}
              {(project.manualPdf || project.presentationPdf) && (
                <a
                  href={project.presentationPdf || project.manualPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="outline-button"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.75rem' }}
                >
                  {project.presentationPdf ? 'View Brand Presentation' : 'View Brand Manual'} <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* 3. STRUCTURED OVERVIEW CARDS (Challenge, Approach, Outcome) */}
      {(project.challenge || project.approach || project.outcome) && (
        <div className="section-container" style={{ maxWidth: '1100px', margin: '2.5rem auto 3rem', padding: '0 2rem' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '1.5rem',
            padding: '2.25rem',
            background: 'var(--bg-secondary)',
            borderRadius: '20px',
            border: '1px solid var(--border-color)'
          }}>
            {project.challenge && (
              <div>
                <h3 style={{ fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-secondary)', marginBottom: '0.75rem', fontWeight: 700 }}>The Challenge</h3>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: 'var(--text-secondary)', margin: 0 }}>{project.challenge}</p>
              </div>
            )}
            {project.approach && (
              <div>
                <h3 style={{ fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-secondary)', marginBottom: '0.75rem', fontWeight: 700 }}>The Approach</h3>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: 'var(--text-secondary)', margin: 0 }}>{project.approach}</p>
              </div>
            )}
            {project.outcome && (
              <div>
                <h3 style={{ fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-secondary)', marginBottom: '0.75rem', fontWeight: 700 }}>The Outcome</h3>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: 'var(--text-secondary)', margin: 0 }}>{project.outcome}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 4. VISUAL SECTIONS & CONTENT */}
      <div className="project-sections-container" style={{ padding: '2rem 0' }}>
        {project.sections ? (
          project.sections.map((section, idx) => {
            if (section.type === 'text') {
              return (
                <div key={idx} style={{ textAlign: 'center', maxWidth: '850px', margin: '5rem auto 2.5rem', padding: '0 2rem' }}>
                  {section.title && <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>{section.title}</h2>}
                  {section.subtitle && <p style={{ fontSize: '1.15rem', lineHeight: 1.6, color: 'var(--text-secondary)', margin: 0 }}>{section.subtitle}</p>}
                </div>
              );
            }
            if (section.type === 'presentation-page') {
              return (
                <div key={idx} style={{ width: '100%', maxWidth: '1100px', margin: '3rem auto', padding: '0 1.5rem' }}>
                  <div 
                    onClick={() => setActiveImage(section.image)}
                    style={{ 
                      width: '100%', 
                      borderRadius: '16px', 
                      overflow: 'hidden', 
                      background: 'var(--bg-secondary)', 
                      border: '1px solid var(--border-color)',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                      cursor: 'zoom-in'
                    }}
                    title="Click to enlarge"
                  >
                    <img 
                      src={section.image} 
                      alt={section.title || `Presentation Slide ${idx + 1}`} 
                      loading="lazy"
                      style={{ 
                        width: '100%', 
                        height: 'auto', 
                        display: 'block',
                        objectFit: 'contain'
                      }} 
                    />
                  </div>
                  {section.title && (
                    <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.75rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                      {section.title}
                    </p>
                  )}
                </div>
              );
            }
            if (section.type === 'full-image') {
              return (
                <div key={idx} style={{ width: '100%', maxWidth: '1200px', margin: '3.5rem auto', padding: '0 2rem' }}>
                  <div 
                    onClick={() => section.image && setActiveImage(section.image)}
                    style={{ width: '100%', aspectRatio: '16/9', borderRadius: '16px', overflow: 'hidden', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', cursor: section.image ? 'zoom-in' : 'default' }}
                    title={section.image ? "Click to enlarge" : undefined}
                  >
                    {section.image ? (
                      <img src={section.image} alt="Project Visual" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>Visual Showcase</div>
                    )}
                  </div>
                </div>
              );
            }
            if (section.type === 'full-video') {
              return (
                <div key={idx} style={{ width: '100%', maxWidth: '1200px', margin: '3.5rem auto', padding: '0 2rem' }}>
                  <div style={{ width: '100%', aspectRatio: '16/9', borderRadius: '16px', overflow: 'hidden', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                    <video 
                      src={section.video} 
                      autoPlay 
                      muted 
                      loop 
                      playsInline 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  </div>
                </div>
              );
            }
            if (section.type === 'grid-2') {
              const aspectRatio = section.variant === 'portrait' ? '9/16' : '1/1';
              return (
                <div key={idx} style={{ width: '100%', maxWidth: '1200px', margin: '3.5rem auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                  {(section.items || []).map((item, i) => (
                    <div 
                      key={i} 
                      onClick={() => item.type !== 'video' && item.url && setActiveImage(item.url)}
                      style={{ width: '100%', aspectRatio, borderRadius: '16px', overflow: 'hidden', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', cursor: (item.type !== 'video' && item.url) ? 'zoom-in' : 'default' }}
                      title={(item.type !== 'video' && item.url) ? "Click to enlarge" : undefined}
                    >
                      {item.type === 'video' ? (
                        <video src={item.url} autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : item.url ? (
                        <img src={item.url} alt="Project Visual" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : (
                        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>Visual Showcase</div>
                      )}
                    </div>
                  ))}
                </div>
              );
            }
            return null;
          })
        ) : (
          /* High-fidelity layout for projects without bespoke custom section arrays */
          <div className="section-container" style={{ maxWidth: '1100px', margin: '1rem auto 4rem', padding: '0 2rem' }}>
            {project.image && (
              <div 
                onClick={() => setActiveImage(project.image)}
                style={{ width: '100%', aspectRatio: '16/9', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', marginBottom: '3rem', cursor: 'zoom-in' }}
                title="Click to enlarge"
              >
                <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            )}
            {project.details && (
              <div style={{ background: 'var(--bg-secondary)', padding: '2.5rem', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>System Breakdown</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {project.details.split('\n').map((line, i) => (
                    <p key={i} style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0 }}>{line}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* 5. NEXT PROJECT & FOOTER */}
      <section style={{ padding: '8rem 0', borderTop: '1px solid var(--border-color)', background: 'var(--bg-secondary)' }}>
        <div className="section-container" style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px' }}>Next Project</span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginTop: '1rem', marginBottom: '3rem', color: 'var(--text-primary)' }}>{nextProject.title}</h2>
          <Link to={`/projects/${nextProject.id}`} className="cta-button" style={{ background: 'var(--text-primary)', color: 'var(--bg-primary)' }}>
            View Case Study <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* 6. LIGHTBOX / CLICK-TO-ENLARGE MODAL */}
      {activeImage && (
        <div 
          onClick={() => setActiveImage(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.92)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            cursor: 'zoom-out'
          }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveImage(null);
            }}
            aria-label="Close enlarged visual"
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255,255,255,0.3)',
              color: '#fff',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10000
            }}
          >
            <X size={24} />
          </button>
          <img 
            src={activeImage} 
            alt="Enlarged visual" 
            onClick={(e) => e.stopPropagation()}
            style={{ 
              maxWidth: '94vw', 
              maxHeight: '92vh', 
              objectFit: 'contain',
              borderRadius: '8px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
              cursor: 'default'
            }} 
          />
        </div>
      )}
    </div>
  );
}
