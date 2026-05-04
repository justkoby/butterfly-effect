import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function PricingPage() {
  return (
    <div className="pricing-page">
      <section className="page-section">
        <div className="section-container">
          <span className="section-subtitle" style={{ textAlign: 'center' }}>Flexible Plans</span>
          <h1 className="section-title" style={{ textAlign: 'center' }}>Tailored Package Options</h1>
          <p className="section-desc" style={{ textAlign: 'center', margin: '0 auto 4rem' }}>
            Choose the specific service plan that fits your current operational scale and project objectives.
          </p>

          <div className="pricing-grid">
            <div className="glass-card pricing-card">
              <h3>Design Starter</h3>
              <p className="pricing-desc">
                Ideal for Freelancers and Small Studios focusing on essential brand assets and client delivery.
              </p>
              <div className="pricing-amount">
                <span className="pricing-price">$1,499</span>
                <span className="pricing-period"> / project</span>
              </div>
              <ul className="pricing-features">
                <li className="pricing-feature"><CheckCircle2 size={16} /> 5 Active Client Portals</li>
                <li className="pricing-feature"><CheckCircle2 size={16} /> Standardized Workflows</li>
                <li className="pricing-feature"><CheckCircle2 size={16} /> In-App Commenting</li>
                <li className="pricing-feature"><CheckCircle2 size={16} /> Unlimited Asset Delivery</li>
                <li className="pricing-feature"><CheckCircle2 size={16} /> Basic Time Tracking</li>
                <li className="pricing-feature"><CheckCircle2 size={16} /> 10 Collaborator Seats</li>
              </ul>
              <Link to="/contact" className="cta-button pricing-btn">
                Choose This Plan <ArrowRight size={18} />
              </Link>
            </div>

            <div className="glass-card pricing-card featured">
              <span className="pricing-badge">Popular</span>
              <h3>Agency Pro</h3>
              <p className="pricing-desc">
                Perfect for Growing Agencies and Mid-Sized Teams needing robust visual component libraries.
              </p>
              <div className="pricing-amount">
                <span className="pricing-price">$3,850</span>
                <span className="pricing-period"> / project</span>
              </div>
              <ul className="pricing-features">
                <li className="pricing-feature"><CheckCircle2 size={16} /> Unlimited Client Portals</li>
                <li className="pricing-feature"><CheckCircle2 size={16} /> Custom Branded Dashboards</li>
                <li className="pricing-feature"><CheckCircle2 size={16} /> Complete Revision History</li>
                <li className="pricing-feature"><CheckCircle2 size={16} /> Advanced Resource Allocation</li>
                <li className="pricing-feature"><CheckCircle2 size={16} /> Custom Invoice Integration</li>
                <li className="pricing-feature"><CheckCircle2 size={16} /> Priority 24/7 Support</li>
              </ul>
              <Link to="/contact" className="cta-button pricing-btn">
                Choose This Plan <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
