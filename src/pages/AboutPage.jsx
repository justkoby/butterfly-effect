import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Eye, ShieldCheck, Award } from 'lucide-react';
import SEO from '../components/SEO';

export default function AboutPage() {
  return (
    <div className="about-page">
      <SEO 
        title="About Us" 
        description="Learn more about Butterfly Effect Concepts, a full-service design studio building strategic and unique visual communication solutions." 
        path="/about" 
      />
      <section className="page-section hero-section">
        <div className="hero-bg-glow"></div>
        <div className="section-container hero-inner">
          <div className="hero-content">
            <span className="section-subtitle">Our Studio Mission</span>
            <h1 className="hero-title">
              Creativity Meets <span>Strategic Vision</span>
            </h1>
            <p className="hero-description">
              Butterfly Effect is a full-service design agency specializing in creating compelling, strategic, and unique visual communication solutions for businesses of all sizes.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="cta-button">
                Book A Call <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-image-wrapper" style={{ height: '420px' }}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600"
                alt="Our Creative Studio"
                className="visual-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & Values */}
      <section className="page-section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="section-container">
          <span className="section-subtitle">Our Philosophy</span>
          <h2 className="section-title">What Drives Butterfly Effect</h2>
          <p className="section-desc">
            We believe that extraordinary designs aren't just beautiful; they solve real human and brand challenges with clarity and intent.
          </p>

          <div className="services-grid">
            <div className="glass-card service-card">
              <div className="service-icon-wrapper">
                <Sparkles size={24} />
              </div>
              <h3>Curated Excellence</h3>
              <p>
                We maintain an exceptionally high standard for our visual outcomes, carefully refining layout, font selection, and color harmony to deliver modern prestige.
              </p>
            </div>

            <div className="glass-card service-card">
              <div className="service-icon-wrapper">
                <Eye size={24} />
              </div>
              <h3>Dynamic Inclusivity</h3>
              <p>
                Our processes are built around your target user. We test visual resonance early to confirm designs are both accessible and unforgettable.
              </p>
            </div>

            <div className="glass-card service-card">
              <div className="service-icon-wrapper">
                <Award size={24} />
              </div>
              <h3>True Collaboration</h3>
              <p>
                We don't operate in a black box. Your team is embedded in our iterative feedback loops to guarantee a final product that perfectly captures your goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
