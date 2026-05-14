import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import { ArrowRight, MessageCircle, ShoppingBag, ArrowUpRight } from 'lucide-react';
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
  const [activeMenu, setActiveMenu] = useState(null); // 'pages' or null

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
      <header 
        className="main-header"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="header-inner">
          <Link to="/" className="logo-wrapper">
            <img src="/butterfly - logo.png" alt="Butterfly Effect" style={{ height: '36px', width: 'auto', display: 'block' }} />
          </Link>

          <nav className="main-nav">
            <ul className="nav-links">


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

          <div className="header-actions">

            <Link to="/contact" className="circular-cta" aria-label="Start a project">
              <ArrowUpRight size={20} />
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
      <footer style={{ background: '#0A0A0A', color: '#FFFFFF', padding: '80px 0 40px' }}>
        <div className="section-container">
          <div className="footer-grid-black" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: '3rem', marginBottom: '4rem' }}>
            <div>
              <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', margin: '0 0 1.5rem' }}>Butterfly Effect</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '320px', margin: 0 }}>
                We build visual systems for brands — across packaging, campaigns, and digital platforms.
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: '1rem', color: '#FFFFFF', margin: '0 0 1.5rem', fontWeight: 600 }}>Get in Touch</h4>
              <a href="mailto:kobbydarko2016@gmail.com" style={{ display: 'block', color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.95rem', margin: '0 0 0.75rem' }}>kobbydarko2016@gmail.com</a>
              <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.95rem' }}>+233546379235</span>
            </div>
            <div>
              <h4 style={{ fontSize: '1rem', color: '#FFFFFF', margin: '0 0 1.5rem', fontWeight: 600 }}>Social Media</h4>
              <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.95rem' }}>
                <a href="https://wa.me/233546379235" target="_blank" rel="noreferrer" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>WhatsApp</a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Instagram</a>
                <a href="https://behance.net" target="_blank" rel="noreferrer" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Behance</a>
              </div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '3rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 7rem)', color: 'rgba(255, 255, 255, 0.9)', margin: 0, fontWeight: 800, letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
              BUTTERFLY EFFECT
            </h2>
            <div style={{ marginTop: '2rem', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.4)' }}>
              &copy; {new Date().getFullYear()} Butterfly Effect Concepts. All rights reserved.
            </div>
          </div>
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
