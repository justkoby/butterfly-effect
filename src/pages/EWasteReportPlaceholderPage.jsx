import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import SEO from '../components/SEO';

export default function EWasteReportPlaceholderPage() {
  const projectTitle = 'A Decade of Pioneering E-Waste Management in Ghana';
  const coverImage = '/A%20DECADE%20OF%20PIONEERING%20E-WASTE%20MANAGEMENT%20IN%20GHANA.jpg';

  return (
    <div className="placeholder-page" style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)', minHeight: '90vh', padding: '120px 0 80px' }}>
      <SEO 
        title={`${projectTitle} — Publication | Butterfly Effect Concepts`}
        description="A Decade of Pioneering E-Waste Management in Ghana — Institutional publication and editorial design case study by Butterfly Effect Concepts in Accra, Ghana."
        image={coverImage}
        path="/work/e-waste-management-report"
        type="article"
      />

      <div className="section-container" style={{ maxWidth: '960px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Back Link */}
        <div style={{ marginBottom: '2.5rem' }}>
          <Link 
            to="/projects" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              color: 'var(--text-secondary)', 
              fontSize: '0.95rem',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            <ArrowLeft size={18} /> Back to Selected Work
          </Link>
        </div>

        {/* Header Content */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <span style={{ 
              background: 'rgba(244, 63, 94, 0.12)', 
              color: 'var(--accent-primary, #F43F5E)', 
              padding: '4px 12px', 
              borderRadius: '100px', 
              fontSize: '0.75rem', 
              fontWeight: 700, 
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }}>
              INSTITUTIONAL PUBLICATION
            </span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Editorial Design &middot; Long-form Publication
            </span>
          </div>

          <h1 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
            fontWeight: 700, 
            letterSpacing: '-0.02em', 
            lineHeight: 1.15,
            margin: '0 0 1.25rem' 
          }}>
            {projectTitle}
          </h1>

          <p style={{ 
            fontSize: '1.15rem', 
            color: 'var(--text-secondary)', 
            lineHeight: 1.6, 
            maxWidth: '720px', 
            margin: 0 
          }}>
            An institutional publication documenting ten years of pioneering electronic waste management, environmental policy milestones, and sustainable recycling frameworks in Ghana.
          </p>
        </div>

        {/* Cover Preview Card */}
        <div style={{ 
          background: 'var(--bg-secondary)', 
          border: '1px solid var(--border-color)', 
          borderRadius: '24px', 
          padding: '2.5rem', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          <div style={{ 
            maxWidth: '520px', 
            width: '100%', 
            borderRadius: '16px', 
            overflow: 'hidden', 
            boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
            border: '1px solid var(--border-color)'
          }}>
            <img 
              src={coverImage} 
              alt={projectTitle} 
              style={{ width: '100%', height: 'auto', display: 'block' }} 
            />
          </div>

          {/* Placeholder Status Notice */}
          <div style={{ textAlign: 'center', maxWidth: '580px' }}>
            <span style={{ 
              display: 'inline-block',
              fontSize: '0.85rem', 
              fontWeight: 600, 
              color: 'var(--accent-secondary, #94a3b8)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '0.5rem'
            }}>
              Publication Placeholder
            </span>
            <h3 style={{ fontSize: '1.35rem', margin: '0 0 0.75rem', fontWeight: 600 }}>
              Full Case Study Coming Soon
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
              Detailed editorial layout spreads, typography hierarchy documentation, and comprehensive project showcase are being prepared for this publication.
            </p>
          </div>
        </div>

        {/* Bottom Actions */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
          <a 
            href="https://drive.google.com/file/d/1kiBisS-FrrkUwa-ionpx0utE86uzPEwC/view" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-button" 
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            View Full Report (PDF) <ArrowUpRight size={16} />
          </a>
          <a 
            href="https://drive.google.com/drive/folders/14t-KidUoHbsw8q2S5igdXSKBOyjVuTu7" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="outline-button" 
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            All Publications Archive <ArrowUpRight size={16} />
          </a>
          <Link to="/projects" className="outline-button" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <ArrowLeft size={16} /> Return to Selected Work
          </Link>
        </div>
      </div>
    </div>
  );
}
