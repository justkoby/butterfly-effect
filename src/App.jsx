import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, NavLink, useLocation, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import EWasteReportPlaceholderPage from './pages/EWasteReportPlaceholderPage';
import { ArrowRight, MessageCircle, ShoppingBag, ArrowUpRight, Sun, Moon, Menu, X } from 'lucide-react';
import ThemeToggle from './components/ThemeToggle';
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
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

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
        className={`main-header ${isMenuOpen ? 'menu-is-open' : ''}`}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="header-inner">
          <Link to="/" className="logo-wrapper">
            <img src="/butterfly - logo.png" alt="Butterfly Effect" className="header-logo" style={{ height: '36px', width: 'auto', display: 'block' }} />
          </Link>

          <nav className="main-nav">
            <ul className="nav-links">
              <li>
                <NavLink to="/projects" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                  Work
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                  About
                </NavLink>
              </li>
              <li>
                <a 
                  href="https://www.butterflyeffectphotographs.com/"
                  target="_blank"
                  rel="noopener"
                  className="nav-link"
                  aria-label="Visit our sister company, Butterfly Effect Photographs"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}
                >
                  Photography <ArrowUpRight size={13} strokeWidth={2.2} />
                </a>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <Link to="/contact" className="circular-cta desktop-only" aria-label="Start a project">
              <ArrowUpRight size={20} />
            </Link>

            <button 
              className="menu-toggle-btn" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${isMenuOpen ? 'is-open' : ''}`}>
          <nav className="mobile-nav">
            <ul className="mobile-nav-links">
              <li><NavLink to="/projects" className="mobile-nav-link">Work</NavLink></li>
              <li><NavLink to="/about" className="mobile-nav-link">About</NavLink></li>
              <li>
                <a 
                  href="https://www.butterflyeffectphotographs.com/"
                  target="_blank"
                  rel="noopener"
                  className="mobile-nav-link"
                  aria-label="Visit our sister company, Butterfly Effect Photographs"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  Photography <ArrowUpRight size={18} strokeWidth={2.2} />
                </a>
              </li>
              <li><NavLink to="/contact" className="mobile-nav-link">Contact</NavLink></li>
            </ul>
            <div className="mobile-menu-footer">
              <Link to="/contact" className="cta-button" style={{ width: '100%', justifyContent: 'center' }}>
                Start a Project <ArrowUpRight size={18} />
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content Router */}
      <main style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/work/e-waste-management-report" element={<EWasteReportPlaceholderPage />} />
          <Route path="/projects/e-waste-management-report" element={<Navigate to="/work/e-waste-management-report" replace />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      {/* Main Simplified Footer */}
      <footer style={{ background: 'var(--bg-tertiary)', color: 'var(--text-primary)', padding: '80px 0 40px', borderTop: '1px solid var(--border-color)' }}>
        <div className="section-container">
          <div className="footer-grid-black" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: '3rem', marginBottom: '4rem' }}>
            <div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', margin: '0 0 1.5rem' }}>Butterfly Effect Concepts</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '320px', margin: 0 }}>
                Visual systems &amp; brand design studio based in Accra, Ghana — crafting identity, packaging, campaigns, and digital platforms.
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', margin: '0 0 1.5rem', fontWeight: 600 }}>Get in Touch</h4>
              <a href="mailto:info@butterflyeffectconcepts.com" style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.95rem', margin: '0 0 0.5rem' }}>info@butterflyeffectconcepts.com</a>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', display: 'block', marginBottom: '0.5rem' }}>+233 54 637 9235</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', opacity: 0.85 }}>Adenta Housing Down, Accra, Ghana</span>
            </div>
            <div>
              <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', margin: '0 0 1.5rem', fontWeight: 600 }}>Social Media</h4>
              <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.95rem' }}>
                <a href="https://wa.me/233546379235" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>WhatsApp</a>
                <a href="https://www.instagram.com/butterfly_effect.concepts/" target="_blank" rel="me noreferrer" style={{ color: 'var(--text-secondary)' }} aria-label="Butterfly Effect Concepts on Instagram">Instagram</a>
                <a href="https://www.behance.net/kobbydarko" target="_blank" rel="me noreferrer" style={{ color: 'var(--text-secondary)' }} aria-label="Butterfly Effect Concepts on Behance">Behance</a>
              </div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '3rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 7rem)', color: 'var(--text-primary)', opacity: 0.9, margin: 0, fontWeight: 800, letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
              BUTTERFLY EFFECT
            </h2>
            <div style={{ marginTop: '2rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              &copy; {new Date().getFullYear()} Butterfly Effect Concepts. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      <ThemeToggle theme={theme} toggleTheme={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')} />

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
