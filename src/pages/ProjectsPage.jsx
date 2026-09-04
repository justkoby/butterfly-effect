import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import WorkSlideshow from '../components/WorkSlideshow';
import SEO from '../components/SEO';
import { portfolioProjects } from '../data/portfolioProjects';

const filterCategories = ['All', 'Websites', 'Branding', 'Graphic Design', 'Campaigns', 'Packaging', 'Posters'];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => {
        if (activeFilter === 'Branding') {
          return p.category === 'Branding' || 
                 p.category === 'Branding & Visual Identity' || 
                 p.category === 'Logo Design' ||
                 p.category === 'Logo Design & Album Artwork' ||
                 p.category.includes('Branding') ||
                 p.category.includes('Logo');
        }
        if (activeFilter === 'Graphic Design') {
          return p.category === 'Graphic Design' ||
                 p.category === 'Logo Design' ||
                 p.category === 'Album Artwork' ||
                 p.category === 'Logo Design & Album Artwork' ||
                 p.category === 'Posters' ||
                 p.category === 'Poster Series' ||
                 p.category.includes('Logo') ||
                 p.category.includes('Artwork') ||
                 p.category.includes('Graphic');
        }
        return p.category === activeFilter;
      });

  return (
    <div className="projects-page">
      <SEO 
        title="Our Work" 
        description="Explore our high-impact visual design systems that enabled distinct brands to build real presence and reach." 
        path="/projects" 
      />
      <section className="page-section">
        <div className="section-container">
          <WorkSlideshow height="600px" borderRadius="32px" marginBottom="4rem" />
          <span className="section-subtitle">Our Portfolios</span>
          <h1 className="section-title">Selected Work</h1>
          <p className="section-desc">
            Explore our high-impact visual design systems that enabled distinct brands to build real presence and reach.
          </p>

          <div className="filter-bar" style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '0.75rem', 
            marginBottom: '3.5rem',
            marginTop: '1rem' 
          }}>
            {filterCategories.map(cat => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: '0.65rem 1.5rem',
                  borderRadius: '100px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  background: activeFilter === cat ? 'var(--text-primary)' : 'transparent',
                  color: activeFilter === cat ? 'var(--bg-primary)' : 'var(--text-secondary)',
                  border: `1px solid ${activeFilter === cat ? 'var(--text-primary)' : 'var(--border-color)'}`,
                  cursor: 'pointer'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((proj) => {
              const hasExternalLink = Boolean(proj.link && proj.link !== '#');
              const hasCaseStudy = Boolean(proj.hasDetailPage);
              const linkText = proj.linkLabel || 'Visit Website';

              return (
                <div className="project-card" key={proj.id}>
                  <div className="project-visual">
                    {proj.image ? (
                      <img src={proj.image} alt={proj.title} className="project-img" loading="lazy" />
                    ) : (
                      <div style={{
                        width: '100%',
                        height: '100%',
                        minHeight: '260px',
                        background: 'linear-gradient(135deg, rgba(244, 63, 94, 0.08) 0%, rgba(20, 20, 20, 0.95) 100%)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '2rem',
                        textAlign: 'center'
                      }}>
                        <span style={{ fontSize: '1.65rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '0.4rem' }}>
                          {proj.title}
                        </span>
                        <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-secondary)', fontWeight: 600 }}>
                          {proj.category}
                        </span>
                        {proj.status && (
                          <span style={{ 
                            marginTop: '0.75rem', 
                            background: 'rgba(244, 63, 94, 0.2)', 
                            color: '#F43F5E', 
                            padding: '4px 12px', 
                            borderRadius: '100px', 
                            fontSize: '0.72rem', 
                            fontWeight: 700, 
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase'
                          }}>
                            {proj.status}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="project-content" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
                    <div className="project-meta" style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', flexWrap: 'wrap' }}>
                        <span className="project-category">{proj.category}</span>
                        {proj.status && (
                          <span style={{ 
                            background: 'rgba(244, 63, 94, 0.15)', 
                            color: '#F43F5E', 
                            padding: '2px 8px', 
                            borderRadius: '4px', 
                            fontSize: '0.7rem', 
                            fontWeight: 700, 
                            textTransform: 'uppercase', 
                            letterSpacing: '0.04em' 
                          }}>
                            {proj.status}
                          </span>
                        )}
                      </div>
                      <span className="project-year" style={{ color: 'var(--accent-secondary)' }}>Role: {proj.role}</span>
                    </div>
                    <h3 className="project-title" style={{ margin: 0 }}>{proj.title}</h3>
                    <p className="project-desc" style={{ flexGrow: 1, margin: 0 }}>{proj.description}</p>
                    
                    {/* Action Links */}
                    {hasCaseStudy && hasExternalLink ? (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '0.75rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                          <Link 
                            to={`/projects/${proj.id}`} 
                            className="outline-button" 
                            style={{ justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '0.35rem', padding: '0.65rem 0.75rem' }}
                          >
                            Case Study <ArrowRight size={14} />
                          </Link>
                          <a
                            href={proj.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-button"
                            style={{ justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '0.35rem', padding: '0.65rem 0.75rem' }}
                          >
                            {linkText} <ArrowUpRight size={14} />
                          </a>
                        </div>
                        {(proj.manualPdf || proj.presentationPdf) && (
                          <a
                            href={proj.presentationPdf || proj.manualPdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="outline-button"
                            style={{ width: '100%', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.6rem 1rem' }}
                          >
                            {proj.presentationPdf ? 'View Brand Presentation' : 'View Brand Manual'} <ArrowUpRight size={14} />
                          </a>
                        )}
                      </div>
                    ) : hasExternalLink ? (
                      <div style={{ marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-button"
                          style={{ width: '100%', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.6rem 1rem' }}
                        >
                          {linkText} <ArrowUpRight size={14} />
                        </a>
                        {(proj.manualPdf || proj.presentationPdf) && (
                          <a
                            href={proj.presentationPdf || proj.manualPdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="outline-button"
                            style={{ width: '100%', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.6rem 1rem' }}
                          >
                            {proj.presentationPdf ? 'View Brand Presentation' : 'View Brand Manual'} <ArrowUpRight size={14} />
                          </a>
                        )}
                      </div>
                    ) : hasCaseStudy ? (
                      <div style={{ marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <Link 
                          to={`/projects/${proj.id}`} 
                          className="cta-button" 
                          style={{ width: '100%', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.65rem 1rem' }}
                        >
                          Case Study <ArrowRight size={14} />
                        </Link>
                        {(proj.manualPdf || proj.presentationPdf) && (
                          <a
                            href={proj.presentationPdf || proj.manualPdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="outline-button"
                            style={{ width: '100%', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.6rem 1rem' }}
                          >
                            {proj.presentationPdf ? 'View Brand Presentation' : 'View Brand Manual'} <ArrowUpRight size={14} />
                          </a>
                        )}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
