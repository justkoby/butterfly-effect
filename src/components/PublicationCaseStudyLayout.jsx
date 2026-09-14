import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import SEO from './SEO';
import '../pages/EWasteCaseStudyPage.css';

export default function PublicationCaseStudyLayout({ data }) {
  if (!data) return null;

  const {
    title,
    subtitle,
    seoTitle,
    seoDescription,
    keywords,
    path,
    eyebrow,
    year,
    role,
    coverImage,
    reportDriveUrl,
    publicationsFolderUrl,
    overviewHeading = "Project Overview",
    overviewLead,
    client,
    projectType,
    scope = [],
    length,
    format,
    challengeHeading = "The Challenge",
    challengeCopy,
    approachHeading = "Design Approach",
    approachItems = [],
    spreadsHeading = "Selected Spreads",
    spreadsSubtitle,
    spreads = [],
    systemHeading = "Publication System",
    systemFeatures = [],
    deliverablesHeading = "Deliverables",
    deliverables = [],
    closingHeading = "View the Full Publication",
    closingText,
    closingPrimaryCta = "View Full Report",
    closingSecondaryCta = "Browse Publications"
  } = data;

  return (
    <div className="editorial-case-study">
      <SEO 
        title={seoTitle || `${title} — Publication Case Study | Butterfly Effect Concepts`}
        description={seoDescription || `${title} — ${subtitle}`}
        image={coverImage}
        path={path}
        type="article"
        keywords={keywords}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          'name': title,
          'headline': `${title} — ${subtitle}`,
          'description': overviewLead || subtitle,
          'image': coverImage.startsWith('http') ? coverImage : `https://butterflyeffectconcepts.com${coverImage}`,
          'url': `https://butterflyeffectconcepts.com${path}`,
          'author': {
            '@type': 'Organization',
            'name': 'Butterfly Effect Concepts',
            'url': 'https://butterflyeffectconcepts.com'
          },
          'publisher': {
            '@type': 'Organization',
            'name': client
          },
          'inLanguage': 'en'
        }}
      />

      <div className="editorial-container">
        {/* Breadcrumb Navigation */}
        <nav className="editorial-back-nav" aria-label="Back to Selected Work">
          <Link to="/projects" className="editorial-back-link">
            <ArrowLeft size={16} /> Back to Selected Work
          </Link>
        </nav>

        {/* 1. HERO SECTION */}
        <header className="editorial-hero">
          <div className="editorial-hero-content">
            <div className="editorial-eyebrow-badge">
              <span className="eyebrow-tag">{eyebrow}</span>
              {year && <span className="eyebrow-year">{year}</span>}
            </div>

            <h1 className="editorial-hero-title">
              {title}
            </h1>

            {subtitle && (
              <p className="editorial-hero-subtitle">
                {subtitle}
              </p>
            )}

            {role && (
              <div className="editorial-hero-role">
                {role}
              </div>
            )}

            <div className="editorial-hero-actions">
              {reportDriveUrl && (
                <a
                  href={reportDriveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button"
                >
                  {closingPrimaryCta} <ArrowUpRight size={16} />
                </a>
              )}
              {publicationsFolderUrl && (
                <a
                  href={publicationsFolderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="outline-button"
                >
                  View More Publications <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          </div>

          <div className="editorial-hero-visual">
            <div className="report-cover-wrapper">
              <img 
                src={coverImage} 
                alt={`${title} cover`}
                className="report-cover-img"
                loading="eager"
              />
            </div>
          </div>
        </header>

        {/* 2. PROJECT OVERVIEW */}
        <section className="editorial-overview-section" aria-labelledby="overview-heading">
          <div>
            <span className="section-editorial-eyebrow">Executive Summary</span>
            <h2 id="overview-heading" className="section-editorial-heading" style={{ marginBottom: '1.75rem' }}>
              {overviewHeading}
            </h2>
            <p className="overview-lead-text">
              {overviewLead}
            </p>
          </div>

          <aside className="overview-meta-card" aria-label="Project Details">
            {client && (
              <div className="meta-group">
                <span className="meta-label">Client / Organisation</span>
                <p className="meta-value">{client}</p>
              </div>
            )}

            {projectType && (
              <div className="meta-group">
                <span className="meta-label">Project Type</span>
                <p className="meta-value">{projectType}</p>
              </div>
            )}

            {scope && scope.length > 0 && (
              <div className="meta-group">
                <span className="meta-label">Scope</span>
                <div className="meta-tags-list">
                  {scope.map((item, idx) => (
                    <span key={idx} className="meta-tag">{item}</span>
                  ))}
                </div>
              </div>
            )}

            {length && (
              <div className="meta-group">
                <span className="meta-label">Length</span>
                <p className="meta-value">{length}</p>
              </div>
            )}

            {format && (
              <div className="meta-group">
                <span className="meta-label">Format</span>
                <p className="meta-value">{format}</p>
              </div>
            )}
          </aside>
        </section>

        {/* 3. DESIGN CHALLENGE */}
        {challengeCopy && (
          <section className="editorial-challenge-section" aria-labelledby="challenge-heading">
            <div>
              <span className="section-editorial-eyebrow">Context &amp; Complexity</span>
              <h2 id="challenge-heading" className="section-editorial-heading">
                {challengeHeading}
              </h2>
            </div>
            <div>
              <p className="challenge-editorial-copy">
                {challengeCopy}
              </p>
            </div>
          </section>
        )}

        {/* 4. DESIGN APPROACH */}
        {approachItems && approachItems.length > 0 && (
          <section className="editorial-approach-section" aria-labelledby="approach-heading">
            <div>
              <span className="section-editorial-eyebrow">Strategic Methodology</span>
              <h2 id="approach-heading" className="section-editorial-heading">
                {approachHeading}
              </h2>
            </div>

            <div className="approach-grid">
              {approachItems.map((item, idx) => (
                <div key={idx} className="approach-item">
                  <span className="approach-item-num">{item.num}</span>
                  <h3 className="approach-item-title">{item.title}</h3>
                  <p className="approach-item-desc">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 5. SELECTED SPREADS */}
        {spreads && spreads.length > 0 && (
          <section className="editorial-spreads-section" aria-labelledby="spreads-heading">
            <div className="spreads-intro-bar">
              <div>
                <span className="section-editorial-eyebrow">Publication Showcase</span>
                <h2 id="spreads-heading" className="section-editorial-heading">
                  {spreadsHeading}
                </h2>
              </div>
              {spreadsSubtitle && (
                <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '420px' }}>
                  {spreadsSubtitle}
                </p>
              )}
            </div>

            <div className="spreads-gallery">
              {spreads.map((entry, idx) => {
                if (entry.type === 'full') {
                  return (
                    <div key={idx} className="spread-display full-width">
                      <div className="spread-frame">
                        <img 
                          src={entry.src} 
                          alt={entry.alt || entry.title}
                          className="spread-img"
                          loading="lazy"
                        />
                      </div>
                      <div className="spread-caption">
                        <span className="spread-caption-title">{entry.title}</span>
                        {entry.meta && <span>{entry.meta}</span>}
                      </div>
                    </div>
                  );
                }

                if (entry.type === 'paired' && entry.items) {
                  return (
                    <div key={idx} className="spread-row-paired">
                      {entry.items.map((sub, sIdx) => (
                        <div key={sIdx} className="spread-display">
                          <div className="spread-frame">
                            <img 
                              src={sub.src} 
                              alt={sub.alt || sub.title}
                              className="spread-img"
                              loading="lazy"
                            />
                          </div>
                          <div className="spread-caption">
                            <span className="spread-caption-title">{sub.title}</span>
                            {sub.meta && <span>{sub.meta}</span>}
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                }

                return null;
              })}
            </div>
          </section>
        )}

        {/* 6. KEY DESIGN FEATURES (PUBLICATION SYSTEM) */}
        {systemFeatures && systemFeatures.length > 0 && (
          <section className="editorial-system-section" aria-labelledby="system-heading">
            <div>
              <span className="section-editorial-eyebrow">Core Components</span>
              <h2 id="system-heading" className="section-editorial-heading">
                {systemHeading}
              </h2>
            </div>

            <div className="system-features-list">
              {systemFeatures.map((feat, idx) => (
                <div key={idx} className="system-feature-item">
                  <h3 className="feature-title">{feat.title}</h3>
                  <p className="feature-desc">{feat.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 7. DELIVERABLES */}
        {deliverables && deliverables.length > 0 && (
          <section className="editorial-deliverables-section" aria-labelledby="deliverables-heading">
            <div>
              <span className="section-editorial-eyebrow">Project Output</span>
              <h2 id="deliverables-heading" className="section-editorial-heading">
                {deliverablesHeading}
              </h2>
            </div>

            <div className="deliverables-grid">
              {deliverables.map((item, idx) => (
                <div key={idx} className="deliverable-item">
                  <span className="deliverable-bullet" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 8. FINAL CLOSING CTA */}
        <section className="editorial-closing-section" aria-labelledby="closing-heading">
          <span className="section-editorial-eyebrow" style={{ marginBottom: '1rem' }}>Complete Archive</span>
          <h2 id="closing-heading" className="closing-heading">
            {closingHeading}
          </h2>
          {closingText && (
            <p className="closing-text">
              {closingText}
            </p>
          )}

          <div className="closing-actions">
            {reportDriveUrl && (
              <a
                href={reportDriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
              >
                {closingPrimaryCta} <ArrowUpRight size={16} />
              </a>
            )}
            {publicationsFolderUrl && (
              <a
                href={publicationsFolderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="outline-button"
              >
                {closingSecondaryCta} <ArrowUpRight size={16} />
              </a>
            )}
          </div>

          <Link to="/projects" className="closing-back-link">
            <ArrowLeft size={16} /> Back to Selected Work
          </Link>
        </section>
      </div>
    </div>
  );
}
