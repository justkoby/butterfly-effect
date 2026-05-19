import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Eye, Move, CheckCircle2, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

export default function ServicesPage() {
  return (
    <div className="services-page">
      <SEO 
        title="Services" 
        description="Our services include Product Design, UI/UX Design, and Web Design tailored to help your brand build clarity and digital presence." 
        path="/services" 
      />
      <section className="page-section">
        <div className="section-container">
          <span className="section-subtitle">What We Excel At</span>
          <h1 className="section-title">Our Creative Catalog</h1>
          <p className="section-desc">
            We deliver specialized digital design, comprehensive user experience transformation, and bold brand strategies that transform digital horizons.
          </p>

          <div className="services-grid" style={{ marginBottom: '5rem' }}>
            <div className="glass-card service-card">
              <div className="service-icon-wrapper">
                <Palette size={26} />
              </div>
              <h3>Product Design</h3>
              <p>
                The process of defining, creating, and improving a product to meet specific customer needs and brand opportunities.
              </p>
              <ul className="service-features" style={{ margin: '1rem 0' }}>
                <li className="service-feature"><CheckCircle2 size={16} /> Strategic Product Vision</li>
                <li className="service-feature"><CheckCircle2 size={16} /> End-to-End Ownership</li>
                <li className="service-feature"><CheckCircle2 size={16} /> Cross-functional Collaboration</li>
                <li className="service-feature"><CheckCircle2 size={16} /> Usability Optimization</li>
              </ul>
            </div>

            <div className="glass-card service-card">
              <div className="service-icon-wrapper">
                <Eye size={26} />
              </div>
              <h3>UI/UX Design</h3>
              <p>
                Specialized design focused on creating usable, accessible, and highly enjoyable digital experiences.
              </p>
              <ul className="service-features" style={{ margin: '1rem 0' }}>
                <li className="service-feature"><CheckCircle2 size={16} /> User-Centered Research</li>
                <li className="service-feature"><CheckCircle2 size={16} /> Interaction Craftsmanship</li>
                <li className="service-feature"><CheckCircle2 size={16} /> Wireframing and Prototyping</li>
                <li className="service-feature"><CheckCircle2 size={16} /> Advanced Component Systems</li>
              </ul>
            </div>

            <div className="glass-card service-card">
              <div className="service-icon-wrapper">
                <Move size={26} />
              </div>
              <h3>Web Design</h3>
              <p>
                The practice of designing the visual presentation and conversion layouts of responsive websites.
              </p>
              <ul className="service-features" style={{ margin: '1rem 0' }}>
                <li className="service-feature"><CheckCircle2 size={16} /> Visual Hierarchy</li>
                <li className="service-feature"><CheckCircle2 size={16} /> Performance Foundations</li>
                <li className="service-feature"><CheckCircle2 size={16} /> Premium Animations</li>
                <li className="service-feature"><CheckCircle2 size={16} /> Accessible Navigation</li>
              </ul>
            </div>
          </div>

          <div className="glass-card" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Looking For A Custom Enterprise Solution?</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              We partner with global technology studios and creative teams to craft bespoke enterprise architectures, scalable UI packages, and design system libraries.
            </p>
            <Link to="/contact" className="cta-button">
              Start Free Consultation <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
