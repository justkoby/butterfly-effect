import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, BookOpen, Layers, FileText, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import './EWasteCaseStudyPage.css';

export default function EWasteCaseStudyPage() {
  const projectTitle = "A Decade of Pioneering E-Waste Management in Ghana";
  const projectSubtitle = "Local Initiatives and the Strength of Partnerships";
  const coverImage = "/A%20DECADE%20OF%20PIONEERING%20E-WASTE%20MANAGEMENT%20IN%20GHANA.jpg";
  const reportDriveUrl = "https://drive.google.com/file/d/1kiBisS-FrrkUwa-ionpx0utE86uzPEwC/view";
  const publicationsFolderUrl = "https://drive.google.com/drive/folders/14t-KidUoHbsw8q2S5igdXSKBOyjVuTu7";

  return (
    <div className="editorial-case-study">
      <SEO 
        title={`${projectTitle} — Institutional Publication Case Study | Butterfly Effect Concepts`}
        description="A Decade of Pioneering E-Waste Management in Ghana (2009–2019) — Editorial design and long-form institutional publication system created by Butterfly Effect Concepts in Accra, Ghana."
        image={coverImage}
        path="/work/e-waste-management-report"
        type="article"
        keywords="E-Waste Ghana report, editorial design Accra, publication design Ghana, Green Advocacy Ghana, institutional publication, book design, Butterfly Effect Concepts"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          'name': projectTitle,
          'headline': `${projectTitle} — ${projectSubtitle}`,
          'description': 'A 110-page institutional publication documenting ten years of pioneering electronic waste management, environmental policy milestones, and sustainable recycling frameworks in Ghana.',
          'image': `https://butterflyeffectconcepts.com${coverImage}`,
          'url': 'https://butterflyeffectconcepts.com/work/e-waste-management-report',
          'author': {
            '@type': 'Organization',
            'name': 'Butterfly Effect Concepts',
            'url': 'https://butterflyeffectconcepts.com'
          },
          'publisher': {
            '@type': 'Organization',
            'name': 'Green Advocacy Ghana and project partners'
          },
          'datePublished': '2020',
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
              <span className="eyebrow-tag">INSTITUTIONAL PUBLICATION</span>
              <span className="eyebrow-year">2009–2019</span>
            </div>

            <h1 className="editorial-hero-title">
              {projectTitle}
            </h1>

            <p className="editorial-hero-subtitle">
              {projectSubtitle}
            </p>

            <div className="editorial-hero-role">
              Editorial Design · Long-form Publication · Institutional Communications
            </div>

            <div className="editorial-hero-actions">
              <a
                href={reportDriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
              >
                View Full Report <ArrowUpRight size={16} />
              </a>
              <a
                href={publicationsFolderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="outline-button"
              >
                View More Publications <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="editorial-hero-visual">
            <div className="report-cover-wrapper">
              <img 
                src={coverImage} 
                alt={`${projectTitle} cover`}
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
              Project Overview
            </h2>
            <p className="overview-lead-text">
              This long-form institutional publication documents a decade of pioneering work in Ghana’s e-waste management sector. The design system was developed to organise complex research, policy milestones, institutional contributions, photography, technical content and partner information into a clear and consistent publication experience.
            </p>
          </div>

          <aside className="overview-meta-card" aria-label="Project Details">
            <div className="meta-group">
              <span className="meta-label">Client / Organisation</span>
              <p className="meta-value">Green Advocacy Ghana and project partners</p>
            </div>

            <div className="meta-group">
              <span className="meta-label">Project Type</span>
              <p className="meta-value">Institutional Publication</p>
            </div>

            <div className="meta-group">
              <span className="meta-label">Scope</span>
              <div className="meta-tags-list">
                <span className="meta-tag">Editorial Design</span>
                <span className="meta-tag">Publication Layout</span>
                <span className="meta-tag">Information Hierarchy</span>
                <span className="meta-tag">Image Treatment</span>
                <span className="meta-tag">Typography</span>
                <span className="meta-tag">Print-ready Production</span>
              </div>
            </div>

            <div className="meta-group">
              <span className="meta-label">Length</span>
              <p className="meta-value">110 Pages</p>
            </div>

            <div className="meta-group">
              <span className="meta-label">Format</span>
              <p className="meta-value">Print + Digital PDF</p>
            </div>
          </aside>
        </section>

        {/* 3. DESIGN CHALLENGE */}
        <section className="editorial-challenge-section" aria-labelledby="challenge-heading">
          <div>
            <span className="section-editorial-eyebrow">Context &amp; Complexity</span>
            <h2 id="challenge-heading" className="section-editorial-heading">
              The Challenge
            </h2>
          </div>
          <div>
            <p className="challenge-editorial-copy">
              The publication contained extensive historical, technical, policy and institutional content spanning multiple years and organisations. The challenge was to create a system that could handle dense information while maintaining readability, structure, credibility and visual consistency across more than 100 pages.
            </p>
          </div>
        </section>

        {/* 4. DESIGN APPROACH */}
        <section className="editorial-approach-section" aria-labelledby="approach-heading">
          <div>
            <span className="section-editorial-eyebrow">Strategic Methodology</span>
            <h2 id="approach-heading" className="section-editorial-heading">
              Design Approach
            </h2>
          </div>

          <div className="approach-grid">
            <div className="approach-item">
              <span className="approach-item-num">01 / ARCHITECTURE</span>
              <h3 className="approach-item-title">Editorial Hierarchy</h3>
              <p className="approach-item-desc">
                Clear chapter structures, headings, pull quotes and navigation systems.
              </p>
            </div>

            <div className="approach-item">
              <span className="approach-item-num">02 / CONTINUITY</span>
              <h3 className="approach-item-title">Long-form Consistency</h3>
              <p className="approach-item-desc">
                A repeatable page system designed to remain coherent across 110 pages.
              </p>
            </div>

            <div className="approach-item">
              <span className="approach-item-num">03 / TONALITY</span>
              <h3 className="approach-item-title">Institutional Visual Language</h3>
              <p className="approach-item-desc">
                A restrained, professional aesthetic suitable for government, development and research audiences.
              </p>
            </div>

            <div className="approach-item">
              <span className="approach-item-num">04 / PACING</span>
              <h3 className="approach-item-title">Photography &amp; Content Balance</h3>
              <p className="approach-item-desc">
                Strong use of imagery, whitespace and structured layouts to prevent dense content from feeling overwhelming.
              </p>
            </div>
          </div>
        </section>

        {/* 5. SELECTED SPREADS */}
        <section className="editorial-spreads-section" aria-labelledby="spreads-heading">
          <div className="spreads-intro-bar">
            <div>
              <span className="section-editorial-eyebrow">Publication Showcase</span>
              <h2 id="spreads-heading" className="section-editorial-heading">
                Selected Spreads
              </h2>
            </div>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '420px' }}>
              Interior double-page spreads illustrating typographical hierarchy, tabular frameworks, and photographic layouts.
            </p>
          </div>

          <div className="spreads-gallery">
            {/* Spread 01 - Full Width */}
            <div className="spread-display full-width">
              <div className="spread-frame">
                <img 
                  src="/images/work/e-waste/spread-01.jpg" 
                  alt="Statement from the Executive Director Spread"
                  className="spread-img"
                  loading="lazy"
                />
              </div>
              <div className="spread-caption">
                <span className="spread-caption-title">Statement from the Executive Director · Organizational Context &amp; Field Imagery</span>
                <span>Spread 01 · Pages 8–9</span>
              </div>
            </div>

            {/* Spreads 02 & 04 - Paired Row */}
            <div className="spread-row-paired">
              <div className="spread-display">
                <div className="spread-frame">
                  <img 
                    src="/images/work/e-waste/spread-02.jpg" 
                    alt="Introduction to the Agbogbloshie Scrapyard Spread"
                    className="spread-img"
                    loading="lazy"
                  />
                </div>
                <div className="spread-caption">
                  <span className="spread-caption-title">1.0 Introduction — Agbogbloshie Scrapyard Mapping &amp; Proposal Phases</span>
                  <span>Spread 02 · Pages 10–11</span>
                </div>
              </div>

              <div className="spread-display">
                <div className="spread-frame">
                  <img 
                    src="/images/work/e-waste/spread-04.jpg" 
                    alt="Beyond the Decade and Material Recovery Metrics Spread"
                    className="spread-img"
                    loading="lazy"
                  />
                </div>
                <div className="spread-caption">
                  <span className="spread-caption-title">6.0 Beyond the Decade — MESTI/KfW Incentive System &amp; Material Volumes</span>
                  <span>Spread 04 · Pages 70–71</span>
                </div>
              </div>
            </div>

            {/* Spread 03 - Full Width */}
            <div className="spread-display full-width">
              <div className="spread-frame">
                <img 
                  src="/images/work/e-waste/spread-03.jpg" 
                  alt="Overview of Proposal Implementation and Studies Spread"
                  className="spread-img"
                  loading="lazy"
                />
              </div>
              <div className="spread-caption">
                <span className="spread-caption-title">3.0 Overview of Implementation — Multi-Year Key Studies &amp; Operator Study Tours</span>
                <span>Spread 03 · Pages 14–15</span>
              </div>
            </div>

            {/* Spreads 05 & 06 - Paired Row */}
            <div className="spread-row-paired">
              <div className="spread-display">
                <div className="spread-frame">
                  <img 
                    src="/images/work/e-waste/spread-05.jpg" 
                    alt="Implementation Framework and Technical Publications Spread"
                    className="spread-img"
                    loading="lazy"
                  />
                </div>
                <div className="spread-caption">
                  <span className="spread-caption-title">Implementation Matrix — Tabular Output Documentation &amp; Capacity Transfer</span>
                  <span>Spread 05 · Pages 15–16</span>
                </div>
              </div>

              <div className="spread-display">
                <div className="spread-frame">
                  <img 
                    src="/images/work/e-waste/spread-06.jpg" 
                    alt="E-Waste Related Studies and Toxic Sites Identification Spread"
                    className="spread-img"
                    loading="lazy"
                  />
                </div>
                <div className="spread-caption">
                  <span className="spread-caption-title">4.0 E-Waste Studies — Toxic Sites Identification Programme (TSIP) Focus</span>
                  <span>Spread 06 · Pages 20–21</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. KEY DESIGN FEATURES (PUBLICATION SYSTEM) */}
        <section className="editorial-system-section" aria-labelledby="system-heading">
          <div>
            <span className="section-editorial-eyebrow">Core Components</span>
            <h2 id="system-heading" className="section-editorial-heading">
              Publication System
            </h2>
          </div>

          <div className="system-features-list">
            <div className="system-feature-item">
              <h3 className="feature-title">Typography</h3>
              <p className="feature-desc">
                Structured type hierarchy for long-form reading.
              </p>
            </div>

            <div className="system-feature-item">
              <h3 className="feature-title">Section Architecture</h3>
              <p className="feature-desc">
                Clear chapter openings and recurring visual systems.
              </p>
            </div>

            <div className="system-feature-item">
              <h3 className="feature-title">Data &amp; Technical Content</h3>
              <p className="feature-desc">
                Layouts designed to accommodate tables, technical information and institutional material.
              </p>
            </div>

            <div className="system-feature-item">
              <h3 className="feature-title">Brand Integration</h3>
              <p className="feature-desc">
                Partner logos, environmental imagery and project branding integrated consistently.
              </p>
            </div>
          </div>
        </section>

        {/* 7. DELIVERABLES */}
        <section className="editorial-deliverables-section" aria-labelledby="deliverables-heading">
          <div>
            <span className="section-editorial-eyebrow">Project Output</span>
            <h2 id="deliverables-heading" className="section-editorial-heading">
              Deliverables
            </h2>
          </div>

          <div className="deliverables-grid">
            {[
              '110-page publication layout',
              'Cover design',
              'Interior editorial system',
              'Chapter and section design',
              'Image treatment',
              'Typography system',
              'Partner and institutional branding',
              'Print-ready PDF',
              'Digital publication PDF'
            ].map((item, idx) => (
              <div key={idx} className="deliverable-item">
                <span className="deliverable-bullet" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 8. FINAL CLOSING CTA */}
        <section className="editorial-closing-section" aria-labelledby="closing-heading">
          <span className="section-editorial-eyebrow" style={{ marginBottom: '1rem' }}>Complete Archive</span>
          <h2 id="closing-heading" className="closing-heading">
            View the Full Publication
          </h2>
          <p className="closing-text">
            Explore the complete report and the broader publication work by Butterfly Effect Concepts.
          </p>

          <div className="closing-actions">
            <a
              href={reportDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              View Full Report <ArrowUpRight size={16} />
            </a>
            <a
              href={publicationsFolderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="outline-button"
            >
              Browse Publications <ArrowUpRight size={16} />
            </a>
          </div>

          <Link to="/projects" className="closing-back-link">
            <ArrowLeft size={16} /> Back to Selected Work
          </Link>
        </section>
      </div>
    </div>
  );
}
