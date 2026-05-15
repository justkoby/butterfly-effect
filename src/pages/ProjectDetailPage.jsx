import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, ArrowRight, ArrowDown } from 'lucide-react';

const portfolioProjects = [
  {
    id: 'vianexta',
    title: 'ViaNexta',
    category: 'Digital Platform / AI Supply Chain Platform',
    role: 'UI/UX Design & Development',
    description: 'AI-powered supply chain platform designed to simplify product creation and distribution.',
    link: 'https://vianexta.com',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
    overview: 'ViaNexta is an AI-powered platform built to help brands create, source, package, and launch physical products faster. The goal was to design a clean digital experience that could communicate a complex supply chain process in a simple, modern, and approachable way.',
    challenge: 'Supply chains can feel slow, fragmented, and difficult to understand. ViaNexta needed a digital presence that made the process feel easier, smarter, and more accessible — while positioning the brand as modern, scalable, and technology-driven.',
    approach: 'The visual direction focused on clarity, structure, and product confidence. The layout was designed to explain the platform quickly, highlight its AI-powered workflow, and guide users from understanding the concept to taking action.',
    details: 'Visual System: A clean and modern visual system was used to support the platform’s technology-first positioning.\nInformation Structure: Content was organized to make a complex supply chain process feel simple and easy to follow.\nUser Flow: Key calls-to-action were placed throughout the experience to guide users from discovery to product creation.',
    outcome: 'The final website presents ViaNexta as a bold, AI-powered platform for physical product creation — helping users understand the value of the platform quickly while giving the brand a stronger digital presence.',
    cta: {
      headline: 'Have a platform or product idea?',
      copy: 'Let’s design a digital experience that makes your idea clear, usable, and ready for the world.'
    }
  },
  {
    id: 'global-student-forum',
    title: 'Global Student Forum',
    category: 'Digital Platform',
    role: 'UI/UX Design',
    description: 'Global digital platform supporting student leadership, advocacy, and international collaboration.',
    link: 'http://globalstudentforum.org/',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
    overview: 'Global Student Forum is an international platform supporting student leadership, advocacy, and collaboration across regions. The goal was to design a clear and structured interface that reflects its global presence while making information accessible and easy to navigate.',
    challenge: 'The platform needed to communicate diverse initiatives, programs, and resources to a global audience while maintaining clarity and consistency across content-heavy sections.',
    approach: 'The design focused on structure and readability, using clean layouts and clear navigation to organize content effectively and support user engagement across different regions.',
    details: 'Visual System: A clean and professional visual style was used to reflect the organization’s global reach and credibility.\nInformation Structure: Content was structured to make programs, resources, and updates easy to find and navigate.\nUser Flow: Navigation and layout were designed to guide users efficiently across key sections of the platform.',
    outcome: 'The final platform presents Global Student Forum as a well-structured and accessible international organization, improving how users interact with its content and initiatives.'
  },
  {
    id: 'foreign-africa',
    title: 'Foreign Africa',
    category: 'Digital Platform',
    role: 'UI/UX Design & Development',
    description: 'A modern web platform connecting African voices, ideas, and opportunities across borders.',
    link: 'https://www.foreignafrica.org/',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600',
    overview: 'Foreign Africa is a digital platform designed to connect African voices, ideas, and opportunities across borders. The goal was to create a modern, engaging interface that reflects its identity and supports content discovery.',
    challenge: 'The platform needed a strong visual identity and a clear structure to present diverse content while maintaining a modern and cohesive experience.',
    approach: 'A clean and contemporary layout was developed to highlight content, improve readability, and create a visually engaging user experience.',
    details: 'Visual System: A modern visual direction was used to create a bold and engaging brand presence.\nInformation Structure: Content was organized to support easy discovery and seamless navigation.\nUser Flow: Layout and structure guide users through content in a simple and intuitive way.',
    outcome: 'The final platform delivers a modern and cohesive experience that supports content exploration and strengthens the brand’s digital presence.'
  },
  {
    id: 'justice-for-africa',
    title: 'Justice for Africa',
    category: 'Digital Platform',
    role: 'UI/UX Design & Development',
    description: 'A civic-focused platform built to drive awareness, advocacy, and justice-oriented initiatives.',
    link: 'https://justice4africa.org/',
    image: 'https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=600',
    overview: 'Justice for Africa is a civic-focused platform designed to support advocacy, awareness, and social impact initiatives. The goal was to create a clear and impactful digital presence that communicates its mission effectively.',
    challenge: 'The platform needed to balance strong messaging with clarity, ensuring that users could easily understand its purpose and engage with its initiatives.',
    approach: 'The design focused on simplicity and structure, allowing key messages to stand out while supporting a clean and accessible user experience.',
    details: 'Visual System: A minimal and focused visual style was used to emphasize content and messaging.\nInformation Structure: Content was structured to clearly present initiatives, goals, and calls to action.\nUser Flow: Layout and navigation guide users toward key information and engagement points.',
    outcome: 'The final platform provides a clear and focused digital presence that supports advocacy efforts and improves user engagement.'
  },
  {
    id: 'all-africa-students-union',
    title: 'All Africa Students Union (AASU)',
    category: 'Website',
    role: 'UI/UX Design & Development',
    description: 'Official digital platform representing student unions across Africa and driving continental initiatives.',
    link: 'https://aasuonline.org/',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600',
    overview: 'The All Africa Students Union (AASU) platform represents student unions across the continent, providing a central space for initiatives, programs, and communication. The goal was to design a platform that reflects its scale while maintaining clarity.',
    challenge: 'The platform needed to organize a wide range of content, including programs, updates, and resources, while ensuring accessibility for a diverse audience.',
    approach: 'A structured layout and clear navigation system were implemented to simplify access to information and improve overall usability.',
    details: 'Visual System: A clean and consistent visual system was used to reflect the organization’s identity and authority.\nInformation Structure: Content was organized to make programs, updates, and resources easy to access.\nUser Flow: Navigation was designed to guide users efficiently through key sections.',
    outcome: 'The final platform delivers a structured and accessible experience that supports communication and engagement across the continent.'
  },
  {
    id: 'cosmotech-projects',
    title: 'Cosmotech Projects',
    category: 'Website',
    role: 'UI/UX Design & Development',
    description: 'Corporate website for a technology and infrastructure solutions company in Ghana.',
    link: 'https://www.cosmotechprojects.com/',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600',
    overview: 'Cosmotech Projects is a technology and infrastructure solutions company in Ghana. The goal was to design a corporate website that clearly presents its services, expertise, and projects.',
    challenge: 'The website needed to communicate technical services in a clear and professional way while maintaining a modern and trustworthy appearance.',
    approach: 'A clean and structured layout was used to present services, projects, and company information clearly, improving readability and user understanding.',
    details: 'Visual System: A professional and minimal visual style was used to reinforce trust and credibility.\nInformation Structure: Content was organized to clearly present services and project capabilities.\nUser Flow: Layout guides users through services, projects, and contact points effectively.',
    outcome: 'The final website provides a clear and professional digital presence that supports business visibility and client engagement.'
  },
  {
    id: 'win-win-coffee',
    title: 'Win Win Coffee',
    category: 'E-commerce',
    role: 'UI/UX Design & Branding',
    description: 'E-commerce platform and brand experience for a specialty coffee business.',
    link: 'https://winwin.coffee/',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600',
    overview: 'Win Win Coffee is a specialty coffee brand focused on delivering quality products through a strong visual identity and digital experience. The goal was to create a cohesive brand and e-commerce presence.',
    challenge: 'The brand needed a consistent visual identity and a digital platform that reflects its personality while supporting product presentation and sales.',
    approach: 'The design combined branding and digital experience, creating a cohesive system that works across packaging, visuals, and the website.',
    details: 'Visual System: A bold and cohesive visual identity was developed to reflect the brand’s personality.\nInformation Structure: The layout was designed to highlight products and simplify browsing.\nUser Flow: The experience guides users from discovery to product exploration and purchase.',
    outcome: 'The final result is a cohesive brand and digital experience that strengthens identity and supports e-commerce growth.'
  },
  {
    id: 'the-jeans-shop-gh',
    title: 'The Jeans Shop GH',
    category: 'E-commerce / Fashion Website',
    role: 'UI/UX Design & Branding',
    description: 'Fashion e-commerce platform designed to showcase and sell contemporary apparel online.',
    link: 'https://www.thejeansshopgh.com/',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600',
    overview: 'The Jeans Shop GH is a fashion brand focused on contemporary apparel and online retail. The goal was to design an e-commerce experience that showcases products clearly and supports online sales.',
    challenge: 'The platform needed to present products in a clean and appealing way while maintaining a smooth and intuitive browsing experience.',
    approach: 'A minimal and product-focused layout was developed to highlight items and simplify navigation across the store.',
    details: 'Visual System: A clean and modern visual style was used to keep focus on the products.\nInformation Structure: The layout was designed to make browsing and product discovery simple.\nUser Flow: The experience guides users smoothly from browsing to purchase.',
    outcome: 'The final platform delivers a clear and user-friendly shopping experience that supports product visibility and sales.'
  },
  {
    id: 'ug-src-welfare-scheme',
    title: 'UG SRC Welfare Scheme',
    category: 'Website',
    role: 'UI/UX Design & Branding',
    description: 'Digital platform supporting student welfare services and access to essential resources.',
    link: 'https://ugsrcwelfarescheme.ug.edu.gh/',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2923216?auto=format&fit=crop&q=80&w=600',
    overview: 'The UG SRC Welfare Scheme portal provides students with immediate access to direct resource assistance. The focus was simple: a completely friction-free design for students to submit applications effortlessly.',
    details: 'Direct layout patterns combined with a clear visual hierarchy ensure high scannability across mobile viewports.',
    outcome: 'A scalable system that simplifies critical request workflows, accelerating student support processing.'
  },
  {
    id: 'democrat-union-of-africa',
    title: 'Democrat Union of Africa',
    category: 'Digital Platform',
    role: 'UI/UX Design & Development',
    description: 'Political and organizational platform designed to communicate vision, structure, and initiatives.',
    link: 'https://democratunionofafrica.org/',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=600',
    overview: 'As a primary political organizational hub, the Democrat Union of Africa platform coordinates regional updates. We created a modern visual architecture that showcases core strategies and organizational structure.',
    details: 'Authoritative brand blues and high-contrast styling elevate programmatic messaging and visual trust.',
    outcome: 'A robust, easily navigable visual platform that supports continuous information dissemination.'
  },
  {
    id: 'alice-talk-world',
    title: 'Alice Talk World',
    category: 'Digital Platform',
    role: 'UI/UX Design & Development',
    description: 'A storytelling and media platform focused on conversations, perspectives, and digital engagement.',
    link: 'https://alicetalkworld.org/',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=600',
    overview: 'Alice Talk World focuses on sharing compelling audio, visual, and written perspectives. Our team built an interactive digital narrative space that optimizes reading, listening, and digital media access.',
    details: 'Dynamic responsive grid configurations and fluid typographic spacing improve content discovery.',
    outcome: 'An inviting storytelling and media layout that drives long-term community presence and deeper digital interaction.'
  },
  {
    id: 'rxnetwork',
    title: 'RxNetwork',
    category: 'Digital Platform',
    role: 'UI/UX Design & Development',
    description: 'A digital platform connecting healthcare communication, campaigns, and medical audiences.',
    link: 'https://rxnetwork.net/',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600',
    overview: 'RxNetwork required an elegant visual communication portal that connects medical professionals and healthcare campaigns. We crafted a high-performance system for swift resource discovery and data security.',
    details: 'Sleek dark themes paired with serene clinical accents establish immediate visual trust and ease of use.',
    outcome: 'A highly effective digital platform that organizes resources and drives medical campaign engagement.'
  },
  {
    id: 'idbf',
    title: 'IDBF',
    category: 'Campaign & Event Design',
    role: 'Visual Communication & Event Branding',
    description: 'Comprehensive visual system and promotional collateral for the IDBF international event.',
    link: '#',
    image: '/cover-idbf-01.jpg',
    heroVideo: 'https://res.cloudinary.com/justkoby/video/upload/v1778860137/0515_nyfplc.mp4',
    overview: 'IDBF required a powerful and cohesive visual identity to support its international event presence.',
    outcome: 'A successful and visually unified event presence that helped strengthen the brand’s international recognition.',
    sections: [
      { type: 'full-image', image: 'https://res.cloudinary.com/justkoby/image/upload/v1778860814/ChatGPT_Image_May_15_2026_03_58_27_PM_huncio.png' },
      { type: 'text', title: 'Independence Day Basketball Festival', subtitle: 'A vibrant visual system built to capture the energy of a premium international basketball event.' },
      { type: 'full-image', image: 'https://res.cloudinary.com/justkoby/image/upload/v1778861642/ChatGPT_Image_May_15_2026_04_13_15_PM_bozsj2.png' },
      { 
        type: 'grid-2', 
        items: [
          { type: 'video', url: 'https://res.cloudinary.com/justkoby/video/upload/v1778845759/0120_qi5blb.mp4' },
          { type: 'image', url: 'https://res.cloudinary.com/justkoby/image/upload/v1778861754/ChatGPT_Image_May_15_2026_04_15_02_PM_wpjzhz.png' }
        ] 
      },
      { type: 'text', subtitle: 'IDBF 2025 was designed as more than a basketball event. The goal was to create a visual identity system that merged Ghanaian independence culture with the rising energy of basketball among the youth. The project explored how sport, music, food, and community could coexist under one scalable event brand.' },
      { 
        type: 'grid-2', 
        variant: 'portrait',
        items: [
          { type: 'video', url: 'https://res.cloudinary.com/justkoby/video/upload/v1778863791/Recording_2025-01-04_155221_ym9fny.mp4' },
          { type: 'video', url: 'https://res.cloudinary.com/justkoby/video/upload/v1778863795/Recording_2025-01-04_160440_u5dry1.mp4' }
        ] 
      },
      { type: 'text', title: 'The Challenge', subtitle: 'Designing a visual language that feels global and inclusive while maintaining high-energy engagement for a diverse international audience.' },
      { 
        type: 'grid-2', 
        items: [
          { type: 'image', url: 'https://res.cloudinary.com/justkoby/image/upload/v1778864404/ChatGPT_Image_May_15_2026_04_59_38_PM_p6ingg.png' },
          { type: 'image', url: 'https://res.cloudinary.com/justkoby/image/upload/v1778864380/Poster-01_qqdbcb.jpg' }
        ] 
      },
      { type: 'full-image', image: 'https://res.cloudinary.com/justkoby/image/upload/v1778865750/ChatGPT_Image_May_15_2026_05_21_02_PM_jfyfb3.png' }
    ]
  },
  {
    id: 'the-bag-shop-gh',
    title: 'The Bag Shop GH',
    category: 'E-commerce / Fashion Website',
    role: 'UI/UX Design',
    description: 'E-commerce interface designed to present and sell fashion accessories online.',
    link: 'https://www.thebagshopgh.com/',
    image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=600',
    overview: 'The Bag Shop GH platform serves as a modern accessories e-commerce marketplace. The primary goal was to create highly interactive product catalogs that highlight luxury and functional quality.',
    details: 'Large minimal layouts and rich imagery create an exclusive, aspirational fashion retail experience.',
    outcome: 'A conversion-optimized e-commerce storefront with intuitive navigation and highly engaging layouts.'
  }
];

export default function ProjectDetailPage() {
  const { id } = useParams();
  const currentIdx = portfolioProjects.findIndex((p) => p.id === id);
  const project = portfolioProjects[currentIdx];

  if (!project) {
    return (
      <div className="section-container" style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <h2>Project Not Found</h2>
        <p style={{ margin: '1rem 0 2rem' }}>Sorry, the requested project detail could not be found.</p>
        <Link to="/projects" className="cta-button" style={{ display: 'inline-flex' }}>
          Back to Work
        </Link>
      </div>
    );
  }

  const nextProject = portfolioProjects[(currentIdx + 1) % portfolioProjects.length];

  return (
    <div className="project-detail-page" style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)', width: '100%', overflowX: 'hidden' }}>
      {/* 1. TOP HERO (Full Width Breakout) */}
      <div style={{ 
        width: '100vw', 
        height: '100vh', 
        position: 'relative', 
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        overflow: 'hidden'
      }}>
        {project.heroVideo ? (
          <video 
            src={project.heroVideo}
            autoPlay 
            muted 
            loop 
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <img 
            src={project.image} 
            alt={project.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        )}

        {/* Square Scroll Arrow at Bottom Center */}
        <div 
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          style={{ 
            position: 'absolute', 
            bottom: '0', 
            left: '50%', 
            transform: 'translateX(-50%)',
            zIndex: 10,
            cursor: 'pointer'
          }}
        >
          <div style={{ 
            width: '64px', 
            height: '64px', 
            background: 'var(--bg-primary)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            boxShadow: '0 -5px 20px rgba(0,0,0,0.1)'
          }}>
            <ArrowDown size={32} color="var(--text-primary)" />
          </div>
        </div>
      </div>



      {/* 2. CONTENT SECTIONS */}
      <div className="project-sections-container" style={{ padding: '4rem 0' }}>
        {project.sections ? (
          project.sections.map((section, idx) => {
            if (section.type === 'text') {
              return (
                <div key={idx} style={{ textAlign: 'center', maxWidth: '800px', margin: '6rem auto', padding: '0 2rem' }}>
                  {section.title && <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>{section.title}</h2>}
                  {section.subtitle && <p style={{ fontSize: '1.15rem', lineHeight: 1.6, color: 'var(--text-secondary)', margin: 0 }}>{section.subtitle}</p>}
                </div>
              );
            }
            if (section.type === 'full-image') {
              return (
                <div key={idx} style={{ width: '100%', maxWidth: '1200px', margin: '4rem auto', padding: '0 2rem' }}>
                  <div style={{ width: '100%', aspectRatio: '16/9', borderRadius: '12px', overflow: 'hidden', background: 'var(--bg-secondary)' }}>
                    {section.image ? (
                      <img src={section.image} alt="Project Visual" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>Placeholder Image</div>
                    )}
                  </div>
                </div>
              );
            }
            if (section.type === 'full-video') {
              return (
                <div key={idx} style={{ width: '100%', maxWidth: '1200px', margin: '4rem auto', padding: '0 2rem' }}>
                  <div style={{ width: '100%', aspectRatio: '16/9', borderRadius: '12px', overflow: 'hidden', background: 'var(--bg-secondary)' }}>
                    <video 
                      src={section.video} 
                      autoPlay 
                      muted 
                      loop 
                      playsInline 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  </div>
                </div>
              );
            }
            if (section.type === 'grid-2') {
              const aspectRatio = section.variant === 'portrait' ? '9/16' : '1/1';
              return (
                <div key={idx} style={{ width: '100%', maxWidth: '1200px', margin: '4rem auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                  {(section.items || []).map((item, i) => (
                    <div key={i} style={{ width: '100%', aspectRatio, borderRadius: '12px', overflow: 'hidden', background: 'var(--bg-secondary)' }}>
                      {item.type === 'video' ? (
                        <video src={item.url} autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : item.url ? (
                        <img src={item.url} alt="Project Visual" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : (
                        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>Placeholder Image</div>
                      )}
                    </div>
                  ))}
                </div>
              );
            }
            return null;
          })
        ) : (
          /* Default Fallback for projects without custom sections */
          <div className="section-container" style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 2rem' }}>
             <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '2rem' }}>{project.title}</h1>
             <p style={{ fontSize: '1.25rem', color: '#444', lineHeight: 1.6, marginBottom: '4rem' }}>{project.description}</p>
             <div style={{ width: '100%', height: '500px', background: '#f5f5f5', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ccc' }}>
               Visual Showcase Placeholder
             </div>
          </div>
        )}
      </div>

      {/* 3. NEXT PROJECT & FOOTER */}
      <section style={{ padding: '8rem 0', borderTop: '1px solid var(--border-color)', background: 'var(--bg-secondary)' }}>
        <div className="section-container" style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px' }}>Next Project</span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginTop: '1rem', marginBottom: '3rem', color: 'var(--text-primary)' }}>{nextProject.title}</h2>
          <Link to={`/projects/${nextProject.id}`} className="cta-button" style={{ background: 'var(--text-primary)', color: 'var(--bg-primary)' }}>
            View Case Study <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
