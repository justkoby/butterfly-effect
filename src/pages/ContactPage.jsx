import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="contact-page">
      <SEO 
        title="Contact Us" 
        description="Get in touch with Butterfly Effect Concepts. Let us know about your brand goals, project ideas, and visual design needs." 
        path="/contact" 
      />
      <section className="page-section">
        <div className="section-container">
          <span className="section-subtitle">Get In Touch</span>
          <h1 className="section-title">Let’s Start Talking</h1>
          <p className="section-desc">
            We would love to hear from you—whether you have a concrete project in mind or simply want to inquire about custom solutions.
          </p>

          <div className="contact-grid">
            <div className="glass-card" style={{ padding: '3rem' }}>
              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Jane Doe"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="jane@company.com"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">Company / Organization</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="form-control"
                      placeholder="Acme Studio"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message Details</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-control"
                      rows="5"
                      placeholder="Tell us about your brand, goals, and visual design requirements..."
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>

                  <button type="submit" className="cta-button" style={{ width: '100%', justifyContent: 'center' }}>
                    Send Message <Send size={18} />
                  </button>
                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <div style={{ color: 'var(--accent-secondary)', marginBottom: '1rem' }}>
                    <CheckCircle size={56} style={{ margin: '0 auto' }} />
                  </div>
                  <h3 style={{ fontSize: '1.6rem', marginBottom: '0.75rem' }}>Message Received!</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    Thank you, <strong>{formData.name}</strong>. A design lead from the Butterfly Effect studio will reach out within 24 hours.
                  </p>
                </div>
              )}
            </div>

            <div className="contact-info-list" style={{ padding: '1rem 0' }}>
              <div className="info-item">
                <div className="info-icon">
                  <Phone size={22} />
                </div>
                <div className="info-content">
                  <h4>Direct Inquiry</h4>
                  <a href="tel:+23001234567">+23 (00) 123 4567</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Mail size={22} />
                </div>
                <div className="info-content">
                  <h4>Email Us</h4>
                  <a href="mailto:kobbydarko2016@gmail.com">kobbydarko2016@gmail.com</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <MapPin size={22} />
                </div>
                <div className="info-content">
                  <h4>HQ Address</h4>
                  <p>4th Floor, City Towers, Near Grant Road</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
