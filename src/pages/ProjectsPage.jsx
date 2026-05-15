import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import WorkSlideshow from '../components/WorkSlideshow';

const portfolioProjects = [
  {
    id: 'vianexta',
    title: 'ViaNexta',
    category: 'Websites',
    role: 'UI/UX Design & Development',
    description: 'AI-powered supply chain platform designed to simplify product creation and distribution.',
    link: 'https://vianexta.com',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'global-student-forum',
    title: 'Global Student Forum',
    category: 'Websites',
    role: 'UI/UX Design',
    description: 'Global digital platform supporting student leadership, advocacy, and international collaboration.',
    link: 'http://globalstudentforum.org/',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'foreign-africa',
    title: 'Foreign Africa',
    category: 'Websites',
    role: 'UI/UX Design & Development',
    description: 'A modern web platform connecting African voices, ideas, and opportunities across borders.',
    link: 'https://www.foreignafrica.org/',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'justice-for-africa',
    title: 'Justice for Africa',
    category: 'Websites',
    role: 'UI/UX Design & Development',
    description: 'A civic-focused platform built to drive awareness, advocacy, and justice-oriented initiatives.',
    link: 'https://justice4africa.org/',
    image: 'https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'all-africa-students-union',
    title: 'All Africa Students Union (AASU)',
    category: 'Websites',
    role: 'UI/UX Design & Development',
    description: 'Official digital platform representing student unions across Africa and driving continental initiatives.',
    link: 'https://aasuonline.org/',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'cosmotech-projects',
    title: 'Cosmotech Projects',
    category: 'Websites',
    role: 'UI/UX Design & Development',
    description: 'Corporate website for a technology and infrastructure solutions company in Ghana.',
    link: 'https://www.cosmotechprojects.com/',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'win-win-coffee',
    title: 'Win Win Coffee',
    category: 'Branding',
    role: 'UI/UX Design & Branding',
    description: 'E-commerce platform and brand experience for a specialty coffee business.',
    link: 'https://winwin.coffee/',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'the-jeans-shop-gh',
    title: 'The Jeans Shop GH',
    category: 'Websites',
    role: 'UI/UX Design & Branding',
    description: 'Fashion e-commerce platform designed to showcase and sell contemporary apparel online.',
    link: 'https://www.thejeansshopgh.com/',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'ug-src-welfare-scheme',
    title: 'UG SRC Welfare Scheme',
    category: 'Websites',
    role: 'UI/UX Design & Branding',
    description: 'Digital platform supporting student welfare services and access to essential resources.',
    link: 'https://ugsrcwelfarescheme.ug.edu.gh/',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2923216?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'democrat-union-of-africa',
    title: 'Democrat Union of Africa',
    category: 'Websites',
    role: 'UI/UX Design & Development',
    description: 'Political and organizational platform designed to communicate vision, structure, and initiatives.',
    link: 'https://democratunionofafrica.org/',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'alice-talk-world',
    title: 'Alice Talk World',
    category: 'Websites',
    role: 'UI/UX Design & Development',
    description: 'A storytelling and media platform focused on conversations, perspectives, and digital engagement.',
    link: 'https://alicetalkworld.org/',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'rxnetwork',
    title: 'RxNetwork',
    category: 'Websites',
    role: 'UI/UX Design & Development',
    description: 'A digital platform connecting healthcare communication, campaigns, and medical audiences.',
    link: 'https://rxnetwork.net/',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'the-bag-shop-gh',
    title: 'The Bag Shop GH',
    category: 'Branding',
    role: 'UI/UX Design',
    description: 'E-commerce interface designed to present and sell fashion accessories online.',
    link: 'https://www.thebagshopgh.com/',
    image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'stillwaters-campaign',
    title: 'Stillwaters',
    category: 'Campaigns',
    role: 'Creative Direction & Motion',
    description: 'Visual campaign and motion graphics for a premium lifestyle brand.',
    link: '#',
    image: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'adonteng-eid',
    title: 'Adonteng Eid',
    category: 'Posters',
    role: 'Graphic Design',
    description: 'Thematic poster series celebrating cultural heritage and festive joy.',
    link: '#',
    image: 'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=600'
  }
];

const filterCategories = ['All', 'Websites', 'Branding', 'Campaigns', 'Packaging', 'Posters', 'Logos'];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === activeFilter);

  return (
    <div className="projects-page">
      <section className="page-section">
        <div className="section-container">
          <WorkSlideshow height="600px" borderRadius="32px" marginBottom="4rem" />
          <span className="section-subtitle">Our Portfolios</span>
          <h1 className="section-title">Selected Work</h1>
          <p className="section-desc">
            Explore our high-impact visual design systems that enabled distinct brands to build real presence and reach.
          </p>

          <div className="filter-bar" style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '0.75rem', 
            marginBottom: '3.5rem',
            marginTop: '1rem' 
          }}>
            {filterCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: '0.65rem 1.5rem',
                  borderRadius: '100px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  background: activeFilter === cat ? '#0A0A0A' : 'transparent',
                  color: activeFilter === cat ? '#FFFFFF' : '#444444',
                  border: `1px solid ${activeFilter === cat ? '#0A0A0A' : 'rgba(0,0,0,0.1)'}`,
                  cursor: 'pointer'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((proj, idx) => (
              <div className="project-card" key={idx}>
                <div className="project-visual">
                  <img src={proj.image} alt={proj.title} className="project-img" />
                </div>
                <div className="project-content" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div className="project-meta" style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <span className="project-category">{proj.category}</span>
                    <span className="project-year" style={{ color: 'var(--accent-secondary)' }}>Role: {proj.role}</span>
                  </div>
                  <h3 className="project-title" style={{ margin: 0 }}>{proj.title}</h3>
                  <p className="project-desc" style={{ flexGrow: 1, margin: 0 }}>{proj.description}</p>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginTop: '0.75rem' }}>
                    <Link to={`/projects/${proj.id}`} className="outline-button" style={{ justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '0.25rem', padding: '0.5rem' }}>
                      Case Study <ArrowRight size={14} />
                    </Link>
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noreferrer"
                      className="cta-button"
                      style={{ justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '0.25rem', padding: '0.5rem' }}
                    >
                      🔗 Live Site <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
