/**
 * Butterfly Effect - Services Data Collection
 * 
 * Centralized data source for the interactive services section.
 * Contains service definitions, descriptions, filter routes, and real portfolio media previews.
 */

export const servicesData = [
  {
    id: 'brand-visual-identity',
    number: '01',
    title: 'Brand & Visual Identity',
    description: 'Comprehensive brand identity systems, logo design, visual manuals, typography rules, and unified brand applications.',
    projectName: 'Venus Events — Visual Identity',
    categoryLabel: 'Visual Identity & Manual',
    type: 'image',
    src: '/VENUS%20BRAND%20MANUAL/page01_1.jpg',
    filterLink: '/projects?filter=Branding'
  },
  {
    id: 'web-design-digital-platforms',
    number: '02',
    title: 'Web Design & Digital Platforms',
    description: 'Custom interactive web experiences, high-conversion landing pages, and intuitive digital interfaces tailored for brand engagement.',
    projectName: 'UG SRC Welfare Scheme',
    categoryLabel: 'Digital Platform & UI/UX',
    type: 'image',
    src: '/welfare-thumbnail-01.jpg',
    filterLink: '/projects?filter=Websites'
  },
  {
    id: 'campaign-marketing-design',
    number: '03',
    title: 'Campaign & Marketing Design',
    description: 'High-impact marketing collateral, event branding systems, festival promotions, and dynamic visual campaigns built for engagement.',
    projectName: 'IDBF — International Festival',
    categoryLabel: 'Campaign & Event Design',
    type: 'video',
    src: 'https://res.cloudinary.com/justkoby/video/upload/v1778845759/0120_qi5blb.mp4',
    poster: '/cover-idbf-01.jpg',
    filterLink: '/projects?filter=Campaigns'
  },
  {
    id: 'motion-graphics-animation',
    number: '04',
    title: 'Motion Graphics & Animation',
    description: 'Dynamic broadcast motion, animated identity assets, 3D brand sequences, and video storytelling that bring static brands to life.',
    projectName: 'Stillwaters — Motion Campaign',
    categoryLabel: 'Motion & Lifestyle',
    type: 'video',
    src: 'https://res.cloudinary.com/justkoby/video/upload/v1778845497/stillwaters_bdybr2.mp4',
    poster: '/_MG_6758.jpeg',
    filterLink: '/projects'
  },
  {
    id: 'publications-editorial-design',
    number: '05',
    title: 'Publications & Editorial Design',
    description: 'Multi-page brand manuals, strategic proposals, annual reports, and structured typographic publications.',
    projectName: 'Africa Youth Network Brand Manual',
    categoryLabel: 'Editorial & Brand Manual',
    type: 'image',
    src: '/Africa%20Youth%20Network%20Brand%20Manual/page01_1.jpg',
    filterLink: '/projects?filter=Branding'
  },
  {
    id: 'creative-direction',
    number: '06',
    title: 'Creative Direction',
    description: 'Holistic visual positioning, concept styling, photography direction, packaging narratives, and cohesive design oversight.',
    projectName: 'Win Win Coffee — Visual System',
    categoryLabel: 'Brand Experience & Packaging',
    type: 'video',
    src: '/win win video.mp4',
    poster: '/win-win-new-site-background.jpg',
    filterLink: '/projects/win-win-coffee'
  }
];

export default servicesData;
