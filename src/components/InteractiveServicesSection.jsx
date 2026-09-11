import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import servicesData from '../data/servicesData';
import './InteractiveServicesSection.css';

export default function InteractiveServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedMobileIndex, setExpandedMobileIndex] = useState(0);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const sectionRef = useRef(null);
  const videoRefs = useRef([]);
  const mobileVideoRefs = useRef([]);
  const navigate = useNavigate();

  // IntersectionObserver to only play videos when section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Handle document visibility (pause videos when tab is hidden)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        pauseAllVideos();
      } else if (isSectionVisible) {
        playActiveVideo(activeIndex);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isSectionVisible, activeIndex]);

  const pauseAllVideos = () => {
    videoRefs.current.forEach(v => {
      if (v) {
        v.pause();
      }
    });
    mobileVideoRefs.current.forEach(v => {
      if (v) {
        v.pause();
      }
    });
  };

  const playActiveVideo = (idx) => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === idx && isSectionVisible && !document.hidden) {
        video.currentTime = 0;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Ignore auto-play restriction if any
          });
        }
      } else {
        video.pause();
      }
    });
  };

  // Play/pause videos when active item or visibility changes
  useEffect(() => {
    if (isSectionVisible) {
      playActiveVideo(activeIndex);
    } else {
      pauseAllVideos();
    }
  }, [activeIndex, isSectionVisible]);

  // Mobile accordion video playback
  useEffect(() => {
    mobileVideoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === expandedMobileIndex && isSectionVisible && !document.hidden) {
        video.currentTime = 0;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      } else {
        video.pause();
      }
    });
  }, [expandedMobileIndex, isSectionVisible]);

  const handleRowClick = (service) => {
    navigate(service.filterLink);
  };

  const toggleMobileAccordion = (index) => {
    setExpandedMobileIndex(prev => (prev === index ? -1 : index));
  };

  const activeService = servicesData[activeIndex] || servicesData[0];

  return (
    <section 
      ref={sectionRef} 
      className="interactive-services-section"
      aria-label="Services and Capabilities"
    >
      <div className="section-container">
        {/* Header Intro */}
        <div className="services-section-header">
          <h2 className="services-main-heading">What we help brands build</h2>
          <p className="services-intro-copy">
            Our work spans identity, campaigns, digital platforms, motion, and creative communication—designed to help brands show up clearly and consistently.
          </p>
        </div>

        {/* Desktop View (Interactive Rows + Dynamic Preview) */}
        <div className="services-desktop-layout">
          {/* Left Column: Interactive Rows */}
          <div 
            className="services-rows-list" 
            role="list"
            onMouseLeave={() => {
              // Keeps the last hovered active item or index 0
            }}
          >
            {servicesData.map((service, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={service.id}
                  role="listitem"
                  className={`service-row-item ${isActive ? 'is-active' : 'is-inactive'}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => handleRowClick(service)}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleRowClick(service);
                    }
                  }}
                  aria-label={`${service.title} - View portfolio`}
                >
                  <div className="service-row-inner">
                    <div className="service-row-meta">
                      <span className="service-num">{service.number}</span>
                      <h3 className="service-row-title">{service.title}</h3>
                    </div>
                    <div className="service-row-arrow" aria-hidden="true">
                      <ArrowUpRight size={22} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Media Showcase Preview */}
          <div className="services-preview-panel">
            <div className="services-preview-card">
              {servicesData.map((service, index) => {
                const isActive = activeIndex === index;
                return (
                  <div 
                    key={service.id} 
                    className={`preview-media-layer ${isActive ? 'active' : ''}`}
                    aria-hidden={!isActive}
                  >
                    {service.type === 'video' ? (
                      <video
                        ref={el => (videoRefs.current[index] = el)}
                        src={service.src}
                        poster={service.poster}
                        muted
                        playsInline
                        loop
                        preload="metadata"
                        className="preview-media-element"
                      />
                    ) : (
                      <img
                        src={service.src}
                        alt={service.projectName}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        className="preview-media-element"
                      />
                    )}
                  </div>
                );
              })}

              {/* Preview Floating Details Overlay */}
              <div className="preview-overlay-content">
                <div className="preview-info-badge">
                  <span className="badge-category">{activeService.categoryLabel}</span>
                  <p className="badge-project-name">{activeService.projectName}</p>
                </div>
                <Link 
                  to={activeService.filterLink} 
                  className="preview-action-btn"
                  aria-label={`Explore work for ${activeService.title}`}
                >
                  <ArrowUpRight size={22} />
                </Link>
              </div>
            </div>

            {/* Active Description Box under Preview */}
            <div className="preview-desc-footer">
              <p>{activeService.description}</p>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Accordion Layout */}
        <div className="services-mobile-accordion">
          {servicesData.map((service, index) => {
            const isExpanded = expandedMobileIndex === index;
            return (
              <div 
                key={`mobile-${service.id}`} 
                className={`mobile-accordion-item ${isExpanded ? 'is-expanded' : ''}`}
              >
                <button
                  type="button"
                  className="mobile-accordion-header"
                  onClick={() => toggleMobileAccordion(index)}
                  aria-expanded={isExpanded}
                  aria-controls={`accordion-body-${service.id}`}
                  id={`accordion-btn-${service.id}`}
                >
                  <div className="mobile-header-left">
                    <span className="mobile-service-num">{service.number}</span>
                    <span className="mobile-service-title">{service.title}</span>
                  </div>
                  <span className="mobile-accordion-icon">
                    {isExpanded ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>

                <div
                  id={`accordion-body-${service.id}`}
                  role="region"
                  aria-labelledby={`accordion-btn-${service.id}`}
                  className={`mobile-accordion-content ${isExpanded ? 'open' : ''}`}
                >
                  <div className="mobile-accordion-inner">
                    <p className="mobile-service-desc">{service.description}</p>
                    
                    {/* Media Preview inside Accordion */}
                    <div className="mobile-media-preview">
                      {service.type === 'video' ? (
                        <video
                          ref={el => (mobileVideoRefs.current[index] = el)}
                          src={service.src}
                          poster={service.poster}
                          muted
                          playsInline
                          loop
                          preload="metadata"
                          className="mobile-preview-video"
                        />
                      ) : (
                        <img
                          src={service.src}
                          alt={service.projectName}
                          loading="lazy"
                          className="mobile-preview-img"
                        />
                      )}
                      <div className="mobile-preview-meta">
                        <span className="mobile-meta-project">{service.projectName}</span>
                      </div>
                    </div>

                    <Link 
                      to={service.filterLink} 
                      className="mobile-view-work-btn"
                    >
                      <span>View Related Work</span>
                      <ArrowUpRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
