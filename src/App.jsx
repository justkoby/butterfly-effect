import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import { ArrowRight, MessageCircle } from 'lucide-react';
import './App.css';

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [showWA, setShowWA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowWA(true);
      } else {
        setShowWA(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <ScrollToTop />

      {/* Main Navigation Header */}
      <header className="main-header">
        <div className="header-inner">
          <Link to="/" className="logo-wrapper">
            <span className="logo-text">Butterfly Effect</span>
          </Link>

          <nav>
            <ul className="nav-links">
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                  Work
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                  What We Build
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="nav-cta">
            <Link to="/contact" className="cta-button">
              Start a Project <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Router */}
      <main style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      {/* Main Simplified Footer */}
      <footer className="main-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="logo-text">Butterfly Effect</h3>
            <p>
              We build visual systems for brands — across packaging, campaigns, and digital platforms.
            </p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-link" aria-label="Facebook">FB</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link" aria-label="Instagram">IG</a>
              <a href="https://behance.net" target="_blank" rel="noreferrer" className="social-link" aria-label="Behance">BE</a>
            </div>
          </div>

          <div className="footer-nav">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Work</Link></li>
              <li><Link to="/services">What We Build</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-nav">
            <h4>Contact Details</h4>
            <ul>
              <li><a href="mailto:kobbydarko2016@gmail.com">kobbydarko2016@gmail.com</a></li>
              <li><span>Accra, Ghana</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Butterfly Effect Concepts. All rights reserved.</span>
          <span>Powered by React & Vite.</span>
        </div>
      </footer>

      {/* Smart Scrolling WhatsApp Floating Icon */}
      {showWA && (
        <a
          href="https://wa.me/233546379235?text=Hi%2C%20I%20came%20across%20your%20website%20and%20I%E2%80%99m%20interested%20in%20working%20with%20you."
          target="_blank"
          rel="noreferrer"
          className="whatsapp-float active"
          aria-label="WhatsApp Us"
        >
          <MessageCircle size={32} />
        </a>
      )}
    </div>
  );
}
