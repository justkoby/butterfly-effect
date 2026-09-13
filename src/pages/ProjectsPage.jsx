import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import WorkSlideshow from '../components/WorkSlideshow';
import SEO from '../components/SEO';
import { portfolioProjects } from '../data/portfolioProjects';

const filterCategories = ['All', 'Websites', 'Branding', 'Publications', 'Graphic Design', 'Campaigns', 'Packaging', 'Posters'];

export default function ProjectsPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const urlFilter = searchParams.get('filter');
  const [activeFilter, setActiveFilter] = useState(urlFilter || 'All');

  useEffect(() => {
    if (urlFilter && filterCategories.includes(urlFilter)) {
      setActiveFilter(urlFilter);
      setTimeout(() => {
        const target = document.getElementById('selected-work');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else if (!urlFilter) {
      setActiveFilter('All');
    }
  }, [urlFilter]);

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
        if (activeFilter === 'Publications') {
          return p.category === 'Publications' ||
                 p.category.includes('Publication');
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
        title="Selected Work &amp; Brand Systems — Portfolio | Accra, Ghana" 
        description="Explore brand identity, visual systems, packaging, and digital platform case studies created by Butterfly Effect Concepts in Accra, Ghana." 
        path="/projects" 
        keywords="Butterfly Effect Concepts portfolio, branding portfolio Ghana, graphic design case studies Accra, packaging design portfolio, logo design Accra"
      />
      <section className="page-section">
        <div className="section-container">
          <WorkSlideshow height="600px" borderRadius="32px" marginBottom="4rem" />
          <span className="section-subtitle">Our Portfolios</span>
          <h1 className="section-title" id="selected-work">Selected Work</h1>
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
                onClick={() => {
                  setActiveFilter(cat);
                  if (cat === 'All') {
                    setSearchParams({});
                  } else {
                    setSearchParams({ filter: cat });
                  }
                }}
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

          {activeFilter === 'Publications' && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.25rem',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              borderRadius: '20px',
              padding: '1.5rem 2rem',
              marginBottom: '2.5rem'
            }}>
              <div>
                <h3 style={{ margin: '0 0 0.35rem', fontSize: '1.15rem', fontWeight: 700 }}>
                  Publications &amp; Reports Repository
                </h3>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Explore the full archive of institutional research, policy documents, and published editorial designs.
                </p>
              </div>
              <a
                href="https://drive.google.com/drive/folders/14t-KidUoHbsw8q2S5igdXSKBOyjVuTu7"
                target="_blank"
                rel="noopener noreferrer"
                className="card-btn card-btn-primary"
                style={{ padding: '0.65rem 1.4rem' }}
              >
                View All Publications <ArrowUpRight size={15} />
              </a>
            </div>
          )}

          <div className="projects-grid">
            {filteredProjects.map((proj) => {
              const hasExternalLink = Boolean(proj.link && proj.link !== '#');
              const hasCaseStudy = Boolean(proj.hasDetailPage || proj.route);
              const targetRoute = proj.route || (hasCaseStudy ? `/projects/${proj.id}` : null);
              const linkText = proj.linkLabel || 'Visit Website';
              const ctaText = proj.ctaLabel || 'Case Study';

              return (
                <div 
                  className="project-card" 
                  key={proj.id}
                  onClick={(e) => {
                    if (targetRoute && !e.target.closest('a') && !e.target.closest('button')) {
                      navigate(targetRoute);
                    }
                  }}
                  style={{ cursor: targetRoute ? 'pointer' : 'default' }}
                >
                  <div className="project-visual">
                    {proj.image ? (
                      <img 
                        src={proj.image} 
                        alt={proj.title} 
                        className={`project-img ${proj.imageFit === 'contain' ? 'is-contain' : ''}`} 
                        loading="lazy" 
                      />
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
                  <div className="project-content">
                    <div className="project-meta">
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', flexWrap: 'wrap' }}>
                        <span className="project-category">{proj.displayLabel || proj.category}</span>
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
                      <span className="project-year" title={proj.role}>Role: {proj.role}</span>
                    </div>
                    <h3 className="project-title">{proj.title}</h3>
                    <p className="project-desc">{proj.description}</p>
                    
                    {/* Action Links */}
                    <div className="project-actions">
                      {hasCaseStudy && hasExternalLink ? (
                        <>
                          <div className="card-actions-grid">
                            <Link 
                              to={targetRoute} 
                              className="card-btn card-btn-secondary" 
                            >
                              {ctaText} <ArrowRight size={14} />
                            </Link>
                            <a
                              href={proj.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="card-btn card-btn-primary"
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
                        </>
                      ) : hasExternalLink ? (
                        <>
                          <a
                            href={proj.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card-btn card-btn-primary"
                            style={{ width: '100%' }}
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
                        </>
                      ) : hasCaseStudy ? (
                        <>
                          <Link 
                            to={targetRoute} 
                            className="card-btn card-btn-primary" 
                            style={{ width: '100%' }}
                          >
                            {ctaText} <ArrowRight size={14} />
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
                        </>
                      ) : null}
                    </div>
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
