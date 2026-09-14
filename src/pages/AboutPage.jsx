import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Layers, 
  BookOpen, 
  Globe, 
  Presentation, 
  Megaphone, 
  Compass, 
  Sparkles
} from 'lucide-react';
import SEO from '../components/SEO';
import './AboutPage.css';

const HERO_SLIDES = [
  {
    id: 'studio-polos',
    src: '/about-me-image.webp',
    alt: 'Butterfly Effect Concepts studio team in white polos in Accra',
    title: 'Studio Team — Butterfly Effect Concepts'
  },
  {
    id: 'hoodie-collective',
    src: '/image-4-hero.jpg',
    alt: 'Butterfly Effect Concepts team wearing Evolve branded hoodies',
    title: 'Creative Collective — Evolve Series'
  },
  {
    id: 'outdoor-team-three',
    src: '/image-3-hero.jpg',
    alt: 'Butterfly Effect Concepts design team trio outdoors',
    title: 'Brand Systems & Visual Communications'
  },
  {
    id: 'outdoor-duo',
    src: '/image-2-hero.jpg',
    alt: 'Butterfly Effect Concepts creative duo',
    title: 'Design Thinking & Creative Direction'
  }
];

const THINKING_VALUES = [
  {
    number: '01',
    title: 'Clarity Before Output',
    description: 'We define the message before shaping the visuals.'
  },
  {
    number: '02',
    title: 'Systems Over One-Offs',
    description: 'We design identity and communication systems built for consistency.'
  },
  {
    number: '03',
    title: 'Context Matters',
    description: 'Every audience, organisation, and platform requires thoughtful adaptation.'
  },
  {
    number: '04',
    title: 'Craft With Purpose',
    description: 'We care about both how things look and how they work.'
  }
];

const SERVICES_LIST = [
  {
    icon: Layers,
    title: 'Brand & Visual Identity',
    description: 'Comprehensive visual systems, brand manuals, and identity guidelines designed to endure.'
  },
  {
    icon: BookOpen,
    title: 'Publications & Editorial Design',
    description: 'Institutional reports, annual reviews, and long-form publications crafted for effortless reading.'
  },
  {
    icon: Globe,
    title: 'Web Design & Digital Platforms',
    description: 'Modern, responsive digital experiences and websites built for clarity, speed, and conversion.'
  },
  {
    icon: Presentation,
    title: 'Presentation & Pitch Deck Design',
    description: 'Executive presentations, sales decks, and investor collateral crafted to communicate value.'
  },
  {
    icon: Megaphone,
    title: 'Campaign & Marketing Design',
    description: 'Strategic promotional campaigns, social design systems, and launch materials that drive engagement.'
  },
  {
    icon: Compass,
    title: 'Creative Direction',
    description: 'Holistic visual storytelling, art direction, and conceptual framing across brand touchpoints.'
  }
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discover',
    description: 'Immersing in your objectives, audience realities, and organizational context.'
  },
  {
    step: '02',
    title: 'Define',
    description: 'Articulating core messaging, design principles, and strategic direction.'
  },
  {
    step: '03',
    title: 'Design',
    description: 'Crafting systems, editorial layouts, and digital experiences with relentless craft.'
  },
  {
    step: '04',
    title: 'Deliver',
    description: 'Providing production-ready assets, living brand systems, and launch support.'
  }
];

const FLYER_ROW_1 = [
  { id: 'f1-1', type: 'image', src: '/FLYERS/DSTV poster copy v3.jpg', title: 'DSTV Campaign' },
  { id: 'f1-2', type: 'video', src: '/FLYERS/Mannequin_rotating_in_studio_20260909234320.mp4', title: 'Studio Motion — 3D Visual' },
  { id: 'f1-3', type: 'image', src: '/FLYERS/creative industry-01.jpg', title: 'Creative Industry Night' },
  { id: 'f1-4', type: 'image', src: '/FLYERS/GRASAG DINNER FLYER v3 copy.jpg', title: 'GRASAG Annual Dinner' },
  { id: 'f1-5', type: 'image', src: '/FLYERS/main poster copy.jpg', title: 'Cultural Festival Poster' },
  { id: 'f1-6', type: 'video', src: '/FLYERS/the_logo_on_the_girls_shirt_ha.mp4', title: 'Brand Motion — Apparel' },
  { id: 'f1-7', type: 'image', src: '/FLYERS/BUSINESS STARTUPS-01.jpg', title: 'Business Startups Forum' },
];

const FLYER_ROW_2 = [
  { id: 'f2-1', type: 'image', src: '/FLYERS/flyer-01.jpg', title: 'Brand Activation Flyer' },
  { id: 'f2-2', type: 'image', src: '/FLYERS/poster for social media-01.jpg', title: 'Social Campaign Series' },
  { id: 'f2-3', type: 'video', src: '/FLYERS/WhatsApp Video 2026-08-27 at 12.45.15 PM (1).mp4', title: 'Brand Motion Experiment' },
  { id: 'f2-4', type: 'image', src: '/FLYERS/POSTER-01-01-01-01.jpg', title: 'Event Collateral' },
  { id: 'f2-5', type: 'image', src: '/FLYERS/Speaker copy.jpg', title: 'Keynote Speaker Showcase' },
  { id: 'f2-6', type: 'image', src: '/FLYERS/Design copy.jpg', title: 'Design Series Flyer' },
  { id: 'f2-7', type: 'image', src: '/FLYERS/GRASAG DINNER FLYER copy.jpg', title: 'Institutional Gala Night' },
];

export default function AboutPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const timerRef = useRef(null);

  // Preload hero images
  useEffect(() => {
    HERO_SLIDES.forEach(slide => {
      const img = new Image();
      img.src = slide.src;
    });
  }, []);

  // Automatic hero slideshow rotation
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || isPaused) return;

    timerRef.current = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % HERO_SLIDES.length);
    }, 6500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  return (
    <div className="about-page">
      <SEO 
        title="Who We Are — Creative Studio & Brand Systems | Butterfly Effect Concepts" 
        description="Butterfly Effect Concepts is a creative studio in Accra building thoughtful brand systems, editorial experiences, digital platforms, and visual communication for ambitious brands." 
        path="/about" 
        keywords="Butterfly Effect Concepts, who we are, creative studio Accra Ghana, branding agency Ghana, editorial design Accra, annual report design Ghana, visual systems studio"
      />

      {/* ===================================================================
          1. HERO SECTION & ROTATING SLIDESHOW
          =================================================================== */}
      <section 
        className="about-hero" 
        aria-label="About Butterfly Effect Concepts"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Rotating Background Slideshow */}
        <div className="about-hero-slideshow" aria-hidden="true">
          {HERO_SLIDES.map((slide, index) => (
            <div 
              key={slide.id}
              className={`about-hero-slide ${index === activeSlide ? 'is-active' : ''}`}
            >
              <img 
                src={slide.src} 
                alt={slide.alt} 
                className="about-hero-image"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>

        {/* Cinematic Soft Dark Readability Overlay */}
        <div className="about-hero-overlay" aria-hidden="true" />

        {/* Hero Editorial Content */}
        <div className="about-hero-container">
          <div className="about-hero-content">
            <h1 className="about-hero-title">
              Designing clarity, identity, and digital experiences for ambitious brands.
            </h1>

            <p className="about-hero-desc">
              Butterfly Effect Concepts is a creative studio building thoughtful brand systems, editorial experiences, digital platforms, and visual communication that help organisations show up clearly and consistently.
            </p>

            <div className="about-hero-actions">
              <Link to="/work" className="cta-button button-on-dark">
                View Our Work
                <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="outline-button button-on-dark">
                Let’s Talk
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <p className="about-hero-location">
              <span className="about-hero-location-dot" />
              Based in Accra, working across branding, publications, digital platforms, and creative direction.
            </p>
          </div>
        </div>

        {/* Tactile Slideshow Indicators */}
        <div className="about-hero-controls" aria-label="Slideshow controls">
          <div className="about-hero-dots">
            {HERO_SLIDES.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                className={`about-hero-dot ${index === activeSlide ? 'is-active' : ''}`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                aria-current={index === activeSlide ? 'true' : 'false'}
              />
            ))}
          </div>
          <span className="about-hero-counter">
            0{activeSlide + 1} / 0{HERO_SLIDES.length}
          </span>
        </div>
      </section>

      {/* ===================================================================
          2. INTRO SECTION — "A Creative Studio Built Around Clarity"
          =================================================================== */}
      <section className="about-intro-section">
        <div className="section-container">
          <div className="about-intro-grid">
            <div>
              <span className="about-section-kicker">Our Foundation</span>
              <h2 className="about-intro-heading">
                A Creative Studio Built Around Clarity
              </h2>
            </div>
            <div>
              <p className="about-intro-body">
                Butterfly Effect Concepts helps brands and organisations communicate with intention through branding, publications, digital platforms, presentations, and visual systems. Our work combines strategy, design thinking, and execution to create outputs that feel cohesive, useful, and memorable.
              </p>
              <div className="about-intro-tags">
                <span className="about-intro-tag">Brand Strategy</span>
                <span className="about-intro-tag">Visual Systems</span>
                <span className="about-intro-tag">Editorial Craft</span>
                <span className="about-intro-tag">Digital Platforms</span>
                <span className="about-intro-tag">Accra, Ghana</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          VISUAL FEATURE BREAK — 'imagggeeeea.jpg'
          Placed before the Core Principles section
          =================================================================== */}
      <section className="about-feature-break-section" aria-label="Studio Visual Identity Showcase">
        <div className="section-container">
          <div className="about-feature-break-wrapper">
            <img 
              src="/imagggeeeea.jpg" 
              alt="Butterfly Effect Concepts — Form, Balance, and Metamorphosis" 
              className="about-feature-break-image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ===================================================================
          3. CORE PRINCIPLES (HOW WE THINK)
          2x2 Grid on the Left + 'image-4-hero.jpg' on the Right
          =================================================================== */}
      <section className="about-split-section">
        <div className="section-container">
          <div className="about-split-grid">
            {/* Left: Header + 2x2 Grid of Value Blocks */}
            <div className="about-split-content">
              <div className="about-split-header">
                <span className="about-section-kicker">Core Principles</span>
                <h2 className="about-section-title">How We Think</h2>
              </div>

              <div className="about-2x2-grid">
                {THINKING_VALUES.map((val) => (
                  <div key={val.number} className="about-value-card">
                    <span className="about-value-number">{val.number}</span>
                    <h3 className="about-value-title">{val.title}</h3>
                    <p className="about-value-desc">{val.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: 'image-4-hero.jpg' Featured Media Card */}
            <div className="about-split-media">
              <div className="about-media-card">
                <img 
                  src="/image-4-hero.jpg" 
                  alt="Butterfly Effect Concepts team in branded hoodies" 
                  className="about-media-image"
                  loading="lazy"
                />
                <div className="about-media-overlay-badge">
                  <span className="about-media-badge-title">Evolve Series Collective</span>
                  <span className="about-media-badge-sub">Studio Team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          4. WHAT WE DO — CAPABILITY CARDS
          =================================================================== */}
      <section className="about-services-section">
        <div className="section-container">
          <div className="about-section-header">
            <span className="about-section-kicker">Capabilities</span>
            <h2 className="about-section-title">What We Help Brands Build</h2>
          </div>

          <div className="about-services-grid">
            {SERVICES_LIST.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="about-service-card">
                  <div className="about-service-icon">
                    <Icon size={22} />
                  </div>
                  <h3 className="about-service-title">{service.title}</h3>
                  <p className="about-service-desc">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================
          5. METHODOLOGY (HOW WE WORK)
          'about-me-image.webp' on the Left + 2x2 Grid on the Right
          =================================================================== */}
      <section className="about-split-section alt-bg">
        <div className="section-container">
          <div className="about-split-grid reverse-layout">
            {/* Left: 'about-me-image.webp' Studio Team Media Card */}
            <div className="about-split-media">
              <div className="about-media-card">
                <img 
                  src="/about-me-image.webp" 
                  alt="Butterfly Effect Concepts studio team in white polos" 
                  className="about-media-image"
                  loading="lazy"
                />
                <div className="about-media-overlay-badge">
                  <span className="about-media-badge-title">Butterfly Effect Studio</span>
                  <span className="about-media-badge-sub">Accra, Ghana</span>
                </div>
              </div>
            </div>

            {/* Right: Header + 2x2 Grid of Process Steps */}
            <div className="about-split-content">
              <div className="about-split-header">
                <span className="about-section-kicker">Methodology</span>
                <h2 className="about-section-title">How We Work</h2>
              </div>

              <div className="about-2x2-grid">
                {PROCESS_STEPS.map((step) => (
                  <div key={step.step} className="about-process-card">
                    <span className="about-process-step">Step {step.step}</span>
                    <h3 className="about-process-title">{step.title}</h3>
                    <p className="about-process-desc">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          6. FLYERS & MOTION SHOWCASE (DUAL-ROW INFINITE SLIDE)
          Image & video slides from the FLYERS folder matching reference
          =================================================================== */}
      <section className="about-flyers-section" aria-label="Campaigns and Motion Gallery">
        <div className="about-flyers-header">
          <span className="about-section-kicker">Campaigns &amp; Motion</span>
          <h2 className="about-flyers-title">Culture, Art &amp; Visual Expressions</h2>
          <p className="about-flyers-subtitle">
            A dynamic stream of posters, event collateral, brand activations, and motion experiments from the studio.
          </p>
        </div>

        <div className="about-marquee-container">
          {/* Row 1 — Slides Left (two identical groups; animating -50% moves exactly one group) */}
          <div className="about-marquee-track about-marquee-row-1">
            {[0, 1].map((copyIndex) => (
              <div
                key={`row-1-copy-${copyIndex}`}
                className="about-marquee-group"
                aria-hidden={copyIndex === 1 ? 'true' : undefined}
              >
                {FLYER_ROW_1.map((item) => (
                  <div key={`${item.id}-${copyIndex}`} className="about-flyer-card">
                    {item.type === 'video' ? (
                      <video
                        src={item.src}
                        autoPlay={!prefersReducedMotion}
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className="about-flyer-media"
                      />
                    ) : (
                      <img
                        src={item.src}
                        alt={item.title}
                        loading="lazy"
                        className="about-flyer-media"
                      />
                    )}
                    <div className="about-flyer-overlay">
                      <span className="about-flyer-label">{item.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Row 2 — Slides Right */}
          <div className="about-marquee-track about-marquee-row-2">
            {[0, 1].map((copyIndex) => (
              <div
                key={`row-2-copy-${copyIndex}`}
                className="about-marquee-group"
                aria-hidden={copyIndex === 1 ? 'true' : undefined}
              >
                {FLYER_ROW_2.map((item) => (
                  <div key={`${item.id}-${copyIndex}`} className="about-flyer-card">
                    {item.type === 'video' ? (
                      <video
                        src={item.src}
                        autoPlay={!prefersReducedMotion}
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className="about-flyer-media"
                      />
                    ) : (
                      <img
                        src={item.src}
                        alt={item.title}
                        loading="lazy"
                        className="about-flyer-media"
                      />
                    )}
                    <div className="about-flyer-overlay">
                      <span className="about-flyer-label">{item.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          7. CTA SECTION — "Let’s Build Something Meaningful"
          =================================================================== */}
      <section className="about-cta-section">
        <div className="about-cta-glow" aria-hidden="true" />
        <div className="about-cta-container">
          <h2 className="about-cta-title">Let’s Build Something Meaningful</h2>
          <p className="about-cta-desc">
            Whether you need a brand system, a report, a website, or a stronger visual direction, Butterfly Effect Concepts is built to help bring clarity to the work.
          </p>
          <div className="about-cta-actions">
            <Link to="/work" className="cta-button button-accent">
              View Work
              <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="outline-button button-on-dark">
              Contact Us
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
