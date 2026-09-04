/**
 * Butterfly Effect - Hero Media Collection
 * 
 * Easily editable collection of working project media for the scrolling hero.
 * To add new assets in the future, simply append a new object to this array.
 * 
 * Schema:
 * - id: unique string identifier
 * - type: 'video' | 'image'
 * - src: local URL (/path.ext) or hosted Cloudinary URL
 * - poster: optional still preview image
 * - title: confirmed project / artwork title
 * - category: short descriptor
 * - route: optional confirmed project route
 */

export const heroMediaCollection = [
  // 1. Stillwaters - Lifestyle & Campaign Motion
  {
    id: 'stillwaters-motion',
    type: 'video',
    src: 'https://res.cloudinary.com/justkoby/video/upload/v1778845497/stillwaters_bdybr2.mp4',
    poster: '/_MG_6758.jpeg',
    title: 'Stillwaters',
    category: 'Motion & Lifestyle',
    route: '/projects'
  },

  // 2. IDBF - Event Motion Identity
  {
    id: 'idbf-motion-01',
    type: 'video',
    src: 'https://res.cloudinary.com/justkoby/video/upload/v1778845759/0120_qi5blb.mp4',
    poster: '/cover-idbf-01.jpg',
    title: 'IDBF — Motion Identity',
    category: 'Campaign & Event Design',
    route: '/projects/idbf'
  },

  // 3. Win Win Coffee - Brand Motion Video
  {
    id: 'win-win-video',
    type: 'video',
    src: '/win win video.mp4',
    poster: '/win-win-new-site-background.jpg',
    title: 'Win Win Coffee',
    category: 'Brand Experience',
    route: '/projects/win-win-coffee'
  },

  // 4. IDBF - Festival Opening System
  {
    id: 'idbf-hero-video',
    type: 'video',
    src: 'https://res.cloudinary.com/justkoby/video/upload/v1778860137/0515_nyfplc.mp4',
    poster: 'https://res.cloudinary.com/justkoby/image/upload/v1778860814/ChatGPT_Image_May_15_2026_03_58_27_PM_huncio.png',
    title: 'IDBF — Opening System',
    category: 'Event Identity',
    route: '/projects/idbf'
  },

  // 5. UG SRC Welfare Scheme - Digital Platform
  {
    id: 'ug-src-welfare',
    type: 'image',
    src: '/welfare-thumbnail-01.jpg',
    title: 'UG SRC Welfare Scheme',
    category: 'Digital Platform',
    route: '/projects/ug-src-welfare-scheme'
  },

  // 6. IDBF - Visual System
  {
    id: 'idbf-visual-system',
    type: 'image',
    src: 'https://res.cloudinary.com/justkoby/image/upload/v1778860814/ChatGPT_Image_May_15_2026_03_58_27_PM_huncio.png',
    title: 'IDBF — Visual System',
    category: 'Event Identity',
    route: '/projects/idbf'
  },

  // 7. Adonteng Eid - Graphic Series
  {
    id: 'adonteng-eid',
    type: 'image',
    src: '/adonteng-eid v2.jpg',
    title: 'Adonteng Eid',
    category: 'Poster Series',
    route: '/projects'
  },

  // 8. IDBF - Mobile / Portrait Capture 1
  {
    id: 'idbf-portrait-01',
    type: 'video',
    src: 'https://res.cloudinary.com/justkoby/video/upload/v1778863791/Recording_2025-01-04_155221_ym9fny.mp4',
    poster: 'https://res.cloudinary.com/justkoby/image/upload/v1778864380/Poster-01_qqdbcb.jpg',
    title: 'IDBF — Dynamic Socials',
    category: 'Social Motion',
    route: '/projects/idbf'
  },

  // 9. Win Win Coffee - Packaging & Identity
  {
    id: 'win-win-packaging',
    type: 'image',
    src: '/win win coffee/image-22.png',
    title: 'Win Win Coffee Packaging',
    category: 'Packaging Design',
    route: '/projects/win-win-coffee'
  },

  // 10. IDBF - Court & Brand Identity
  {
    id: 'idbf-court-identity',
    type: 'image',
    src: 'https://res.cloudinary.com/justkoby/image/upload/v1778861642/ChatGPT_Image_May_15_2026_04_13_15_PM_bozsj2.png',
    title: 'IDBF — Court Identity',
    category: 'Environmental Branding',
    route: '/projects/idbf'
  },

  // 11. GGEM School Tour - Event Poster
  {
    id: 'ggem-school-tour',
    type: 'image',
    src: '/GGEM School Tour-01-01.jpg',
    title: 'GGEM School Tour',
    category: 'Campaign & Event Design',
    route: '/projects'
  },

  // 12. IDBF - Mobile / Portrait Capture 2
  {
    id: 'idbf-portrait-02',
    type: 'video',
    src: 'https://res.cloudinary.com/justkoby/video/upload/v1778863795/Recording_2025-01-04_160440_u5dry1.mp4',
    poster: 'https://res.cloudinary.com/justkoby/image/upload/v1778864404/ChatGPT_Image_May_15_2026_04_59_38_PM_p6ingg.png',
    title: 'IDBF — Broadcast Motion',
    category: 'Motion Design',
    route: '/projects/idbf'
  },

  // 13. RxNetwork
  {
    id: 'rxnetwork',
    type: 'image',
    src: '/rxnetwork-img.jpg',
    title: 'RxNetwork',
    category: 'Healthcare Media',
    route: '/projects/rxnetwork'
  },

  // 14. IDBF - Festival Poster
  {
    id: 'idbf-poster',
    type: 'image',
    src: 'https://res.cloudinary.com/justkoby/image/upload/v1778864380/Poster-01_qqdbcb.jpg',
    title: 'IDBF — Official Festival Poster',
    category: 'Poster Design',
    route: '/projects/idbf'
  },

  // 15. The Monday Project
  {
    id: 'monday-project',
    type: 'image',
    src: '/monday-new.jpg',
    title: 'The Monday Project',
    category: 'Editorial & Brand',
    route: '/projects'
  },

  // 16. IDBF - Campaign Collateral
  {
    id: 'idbf-campaign-collateral',
    type: 'image',
    src: 'https://res.cloudinary.com/justkoby/image/upload/v1778865750/ChatGPT_Image_May_15_2026_05_21_02_PM_jfyfb3.png',
    title: 'IDBF — Campaign Collateral',
    category: 'Brand Collateral',
    route: '/projects/idbf'
  },

  // 17. Wedding Stationery & Identity
  {
    id: 'wedding-identity',
    type: 'image',
    src: '/wedding.jpg',
    title: 'Wedding Stationery & Identity',
    category: 'Print & Identity',
    route: '/projects'
  },

  // 18. Win Win Coffee - Digital Platform
  {
    id: 'win-win-platform',
    type: 'image',
    src: '/win-win-new-site-background.jpg',
    title: 'Win Win Digital Platform',
    category: 'E-commerce UI/UX',
    route: '/projects/win-win-coffee'
  },

  // 19. IDBF - Graphic Layout
  {
    id: 'idbf-graphic-layout',
    type: 'image',
    src: 'https://res.cloudinary.com/justkoby/image/upload/v1778861754/ChatGPT_Image_May_15_2026_04_15_02_PM_wpjzhz.png',
    title: 'IDBF — Graphic Layout',
    category: 'Editorial Design',
    route: '/projects/idbf'
  },

  // 20. Brand Product Photography
  {
    id: 'product-photography-01',
    type: 'image',
    src: '/_MG_6758.jpeg',
    title: 'Product Photography',
    category: 'Brand Photography',
    route: '/projects'
  },

  // 21. Win Win Visual System 3D Concept
  {
    id: 'win-win-3d-scene',
    type: 'image',
    src: '/win win coffee/scene 1.png',
    title: 'Win Win Coffee — 3D System',
    category: 'Visual System',
    route: '/projects/win-win-coffee'
  },

  // 22. CREX Africa
  {
    id: 'crex-africa',
    type: 'image',
    src: '/crex-website.jpg',
    title: 'CREX Africa',
    category: 'Web Design & Development',
    route: '/projects'
  },

  // 23. Jas Apparels
  {
    id: 'jas-apparels',
    type: 'image',
    src: '/jas-web.jpg',
    title: 'JAS Apparels',
    category: 'Web Design & Development',
    route: '/projects'
  },

  // 24. Matthew Nam
  {
    id: 'matt-nam',
    type: 'image',
    src: '/matt-hero-web.jpg',
    title: 'Matthew Nam',
    category: 'Web Design & Development',
    route: '/projects'
  },

  // 25. Power World Limited
  {
    id: 'powerworld',
    type: 'image',
    src: '/powerworld-website.jpg',
    title: 'Power World Limited',
    category: 'Web Design & Development',
    route: '/projects'
  },

  // 26. Pro Perfume
  {
    id: 'pro-perfume',
    type: 'image',
    src: '/pro-perfume.jpg',
    title: 'Pro Perfume',
    category: 'Web Design & Development',
    route: '/projects'
  },

  // 27. Sarai Nam
  {
    id: 'sarai-nam',
    type: 'image',
    src: '/Sarai-Nam-image.jpg',
    title: 'Sarai Nam',
    category: 'Web Design & Development',
    route: '/projects'
  },

  // 28. Youth Leadership Cohort
  {
    id: 'youth-leadership-cohort',
    type: 'image',
    src: '/ylc-cohort-website.jpeg',
    title: 'Youth Leadership Cohort',
    category: 'Web Design & Development',
    route: '/projects'
  },

  // 29. Editorial Brand Showcase
  {
    id: 'editorial-showcase',
    type: 'image',
    src: '/_MG_6768 (1).jpeg',
    title: 'Editorial Showcase',
    category: 'Brand Photography',
    route: '/projects'
  },

  // 30. Africa Youth Network
  {
    id: 'africa-youth-network-hero',
    type: 'image',
    src: '/Africa%20Youth%20Network%20Brand%20Manual/page01_1.jpg',
    title: 'Africa Youth Network',
    category: 'Brand Identity & Web',
    route: '/projects/africa-youth-network'
  },

  // 31. Dellor Company LTD
  {
    id: 'dellor-hero',
    type: 'image',
    src: '/dellor-website.webp',
    title: 'Dellor Company LTD',
    category: 'Web Design & Development',
    route: '/projects'
  },

  // 32. 52 Homes & Lounge
  {
    id: '52-homes-hero',
    type: 'image',
    src: '/52%20Homes%20%26%20Lounge%20branding/page1_1.jpg',
    title: '52 Homes & Lounge',
    category: 'Branding & Visual Identity',
    route: '/projects/52-homes-and-lounge'
  },

  // 33. AMS — Logo Design & Brand Applications
  {
    id: 'ams-hero',
    type: 'image',
    src: '/AMS%20BRANDING/logo%20and%20thumbnail.jpg',
    title: 'AMS — Logo Design',
    category: 'Logo Design & Applications',
    route: '/projects/ams'
  },

  // 34. Venus Events
  {
    id: 'venus-events-hero',
    type: 'image',
    src: '/VENUS%20BRAND%20MANUAL/page01_1.jpg',
    title: 'Venus Events',
    category: 'Visual Identity & Brand Manual',
    route: '/projects/venus-events'
  },

  // 35. Caring Therapeutics
  {
    id: 'caring-therapeutics-hero',
    type: 'image',
    src: '/Caring%20Brand%20Manual/thumbnail.jpg',
    title: 'Caring Therapeutics',
    category: 'Visual Identity & Brand Manual',
    route: '/projects/caring-therapeutics'
  },

  // 36. Ministry of Foreign Affairs, Ghana
  {
    id: 'mfa-ghana-hero',
    type: 'image',
    src: '/Brand%20Proposal%20(MFA)%20draft/page01_1.jpg',
    title: 'Ministry of Foreign Affairs, Ghana',
    category: 'Brand Identity Proposal',
    route: '/projects/mfa-ghana-proposal'
  },

  // 37. Magna Charta Universitatum (MCU)
  {
    id: 'mcu-branding-hero',
    type: 'image',
    src: '/MCU%20BRANING/page01_1.jpg',
    title: 'Magna Charta Universitatum (MCU)',
    category: 'Academic Brand Guidelines',
    route: '/projects/mcu-branding'
  },

  // 38. Ada’s Cosmetics
  {
    id: 'adas-cosmetics-hero',
    type: 'video',
    src: 'https://res.cloudinary.com/justkoby/video/upload/v1788490237/Animate_the_supplied_image_as_illaii.mp4',
    poster: '/ada-cos-mock-1.jpg',
    title: 'Ada’s Cosmetics',
    category: 'Logo Design & Brand Applications',
    route: '/projects/adas-cosmetics'
  },

  // 39. Osomafo Pinto Music
  {
    id: 'osomafo-pinto-hero',
    type: 'video',
    src: 'https://res.cloudinary.com/justkoby/video/upload/v1788491962/Animate_this_exact_image_into_w9dswy.mp4',
    poster: '/praise-mock-1.jpg',
    title: 'Osomafo Pinto Music',
    category: 'Logo & Album Artwork',
    route: '/projects/osomafo-pinto-music'
  }
];

export default heroMediaCollection;
