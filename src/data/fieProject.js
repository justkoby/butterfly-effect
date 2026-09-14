// ==========================================================================
// Financial Innovation and Enterprise — FIE 2023
// Single editable source for the homepage bento showcase and the
// /work/financial-innovation-and-enterprise case-study page.
// Only files from /public/Financial Innovation and Enterprise/ are referenced
// (images and MP4 videos only — no PDF).
// ==========================================================================

const FIE_DIR = '/Financial%20Innovation%20and%20Enterprise';

// --- Asset inventory (filenames verified against the public folder) ---------
export const FIE_ASSETS = {
  // Identity artwork — 1191 x 842
  lockupOnDark: {
    src: `${FIE_DIR}/logo.jpg`,
    width: 1191,
    height: 842,
    alt: 'Financial Innovation and Enterprise Conference lockup — white and gold lettering flanked by gold origami star motifs on a royal blue background'
  },
  logotypeBlue: {
    src: `${FIE_DIR}/FIE-logo.jpg`,
    width: 1191,
    height: 842,
    alt: 'FIE 2023 logotype in white with gold-detailed numerals and origami star motifs on a bright blue field'
  },
  lockupOnWhite: {
    src: `${FIE_DIR}/FIE.jpg`,
    width: 1191,
    height: 842,
    alt: 'Financial Innovation and Enterprise Conference wordmark in navy blue with gold origami stars and the words Insight, Discovery, Impact on white'
  },
  // Campaign graphics
  mainPoster: {
    src: `${FIE_DIR}/FIE-Conference.jpeg`,
    width: 792,
    height: 578,
    alt: 'FIE 2023 conference poster with partner university logos and the theme “Promoting Sustainable Enterprises in Developing and Emerging Economies”'
  },
  dateBanner: {
    src: `${FIE_DIR}/fie23-scaled-1.jpg`,
    width: 2560,
    height: 641,
    alt: 'Wide FIE 2023 conference banner announcing the 14–15 December 2023 dates alongside university partner logos'
  },
  workshopPoster: {
    src: `${FIE_DIR}/479774854_931695449129659_6705752985955062258_n.jpg`,
    width: 526,
    height: 526,
    alt: 'FIE 2023 postgraduate research workshop poster featuring facilitator Professor Samuel Antwi on a bronze background'
  },
  speakerLineup: {
    src: `${FIE_DIR}/480246125_931704879128716_4937993536548048520_n.jpg`,
    width: 1280,
    height: 540,
    alt: 'FIE 2023 speaker lineup graphic with keynote speaker Hon. Abena Osei-Asare, host Professor Abednego Feehi Okoe Amartey and sponsor logos'
  },
  speakersGrid: {
    src: `${FIE_DIR}/WhatsApp Image 2026-09-14 at 3.21.04 AM.jpeg`,
    width: 1080,
    height: 1080,
    alt: 'FIE 2023 speakers announcement graphic with nine speaker portraits on a blue background'
  },
  happeningToday: {
    src: `${FIE_DIR}/WhatsApp Image 2026-09-14 at 3.21.04 AM (1).jpeg`,
    width: 1080,
    height: 1080,
    alt: 'FIE 2023 event-day graphic reading “it is happening today!” in large gold lettering'
  },
  thankYou: {
    src: `${FIE_DIR}/WhatsApp Image 2026-09-14 at 3.21.04 AM (2).jpeg`,
    width: 1080,
    height: 1080,
    alt: 'FIE 2023 closing graphic with “Thank You” set in gold script above partner university logos'
  },
  // Event photography
  groupPhoto: {
    src: `${FIE_DIR}/IMG_9198.jpg`,
    width: 2240,
    height: 1493,
    alt: 'FIE 2023 speakers, dignitaries and organising team posing for a group photograph on the conference stage'
  },
  speakerAtPodium: {
    src: `${FIE_DIR}/WhatsApp Image 2026-09-14 at 3.21.04 AM (3).jpeg`,
    width: 1080,
    height: 720,
    alt: 'A speaker in a navy suit addressing delegates from a UPSA-branded podium during FIE 2023'
  },
  podiumAddress: {
    src: `${FIE_DIR}/WhatsApp Image 2026-09-14 at 3.21.04 AM (4).jpeg`,
    width: 1080,
    height: 720,
    alt: 'A speaker at the UPSA podium during FIE 2023 with the conference speaker lineup displayed on screens behind him'
  },
  audience: {
    src: `${FIE_DIR}/WhatsApp Image 2026-09-14 at 3.21.05 AM.jpeg`,
    width: 1080,
    height: 720,
    alt: 'Students and delegates seated in the auditorium listening attentively during FIE 2023'
  },
  stagePanorama: {
    src: `${FIE_DIR}/WhatsApp Image 2026-09-14 at 3.22.43 AM.jpeg`,
    width: 1080,
    height: 810,
    alt: 'The FIE 2023 main stage at the Kofi Ohene Konadu Auditorium with branded speaker screens, podium and tiered steps'
  },
  // Video (MP4) — the venue clips are landscape 1024x576; Scene.mp4 is the
  // white-background logotype reveal and is kept for the case study only.
  logoAnimation: {
    src: `${FIE_DIR}/Scene.mp4`,
    alt: 'Animated reveal of the FIE 2023 conference logotype'
  },
  venueFromAudience: {
    src: `${FIE_DIR}/WhatsApp Video 2026-09-14 at 3.21.59 AM.mp4`,
    alt: 'Short clip of the FIE 2023 stage and branded speaker screens filmed from the audience'
  },
  venueWalkthrough: {
    src: `${FIE_DIR}/WhatsApp Video 2026-09-14 at 3.22.26 AM.mp4`,
    alt: 'Slow walkthrough of the FIE 2023 auditorium showing the stage, branded speaker screens and tiered seating'
  },
  screenPan: {
    src: `${FIE_DIR}/WhatsApp Video 2026-09-14 at 3.22.35 AM.mp4`,
    alt: 'Close pan across the FIE 2023 speaker screens on the main stage'
  }
};

// --- Shared project facts (verified against the campaign artwork) -----------
export const FIE_PROJECT = {
  slug: 'financial-innovation-and-enterprise',
  route: '/work/financial-innovation-and-enterprise',
  title: 'Financial Innovation and Enterprise',
  edition: 'FIE 2023',
  metaLine: 'FIE 2023 · UPSA · Accra, Ghana',
  disciplines: 'Event Identity · Campaign Design · Experiential',
  descriptor: 'A visual campaign and event experience developed for FIE 2023 at UPSA.',
  meta: [
    { label: 'Client', value: 'UPSA' },
    { label: 'Project', value: 'Financial Innovation and Enterprise' },
    { label: 'Year', value: '2023' },
    { label: 'Location', value: 'Accra, Ghana' },
    { label: 'Services', value: 'Event Identity, Campaign Design, Experiential Design' }
  ]
};

// --- Homepage bento configuration --------------------------------------------
// Grid areas refer to the template defined in FeaturedProjectBento.css.
// One identity tile, one auditorium video, two campaign artworks, three
// photographs and one environmental detail — no repeated logo compositions.
export const FIE_BENTO_TILES = [
  {
    id: 'dominant',
    area: 'a',
    type: 'image',
    asset: FIE_ASSETS.lockupOnDark,
    position: 'center',
    dominant: true
  },
  {
    id: 'auditorium-video',
    area: 'b',
    type: 'video',
    asset: FIE_ASSETS.venueWalkthrough,
    poster: FIE_ASSETS.stagePanorama.src,
    position: 'center 42%'
  },
  {
    id: 'speaker-tall',
    area: 'c',
    type: 'image',
    asset: FIE_ASSETS.speakerAtPodium,
    position: '40% 22%',
    parallax: 16
  },
  {
    id: 'main-poster',
    area: 'd',
    type: 'image',
    asset: FIE_ASSETS.mainPoster,
    fit: 'contain',
    position: 'center'
  },
  {
    id: 'photo-band',
    area: 'e',
    type: 'crossfade',
    interval: 5600,
    frames: [
      { ...FIE_ASSETS.groupPhoto, position: 'center 32%' },
      { ...FIE_ASSETS.audience, position: 'center 28%' }
    ],
    parallax: 12
  },
  {
    id: 'stage-detail',
    area: 'f',
    type: 'image',
    asset: FIE_ASSETS.stagePanorama,
    position: 'center 40%'
  },
  {
    id: 'speaker-lineup',
    area: 'g',
    type: 'image',
    asset: FIE_ASSETS.speakerLineup,
    fit: 'contain',
    position: 'center'
  }
];

// --- Case-study page content --------------------------------------------------
export const FIE_CASE_STUDY = {
  seo: {
    title: 'Financial Innovation and Enterprise 2023 Case Study | Butterfly Effect Concepts',
    description: 'Explore the Financial Innovation and Enterprise 2023 visual identity, campaign design and event experience developed by Butterfly Effect Concepts for UPSA in Accra, Ghana.',
    image: FIE_ASSETS.lockupOnDark.src,
    path: FIE_PROJECT.route,
    keywords: 'FIE 2023, Financial Innovation and Enterprise Conference, UPSA, event identity design Accra, campaign design Ghana, experiential design, Butterfly Effect Concepts'
  },
  hero: {
    media: FIE_ASSETS.stagePanorama,
    title: FIE_PROJECT.title,
    descriptor: FIE_PROJECT.descriptor,
    meta: FIE_PROJECT.meta
  },
  sections: [
    {
      type: 'overview',
      eyebrow: 'Project Overview',
      heading: 'One identity, every touchpoint',
      lead: 'Butterfly Effect Concepts developed the visual identity and communications system for the 2023 edition of the Financial Innovation and Enterprise Conference (FIE) — a two-day academic and industry gathering hosted by the University of Professional Studies, Accra under the theme “Promoting Sustainable Enterprises in Developing and Emerging Economies”.',
      meta: FIE_PROJECT.meta
    },
    {
      type: 'text',
      eyebrow: 'The Context',
      heading: 'A conference with an international stage',
      paragraphs: [
        'FIE 2023 convened academics, policymakers and business leaders at the Kofi Ohene Konadu Auditorium on 14–15 December 2023, in partnership with Birmingham City University, the University of Sunderland and the Institute for Small Business and Entrepreneurship (ISBE).',
        'An event of this profile needed more than a poster — it needed a coordinated identity that could carry from digital announcements to the physical auditorium without losing clarity or prestige.'
      ]
    },
    {
      type: 'text',
      eyebrow: 'Creative Direction',
      heading: 'Insight · Discovery · Impact',
      paragraphs: [
        'The identity is built on a deep navy and gold palette: navy for institutional credibility, gold for aspiration and achievement. A faceted origami star motif — growth taking shape — anchors the mark and recurs across every application.',
        'The system was designed to flex: bold enough for social countdown graphics, restrained enough for a stage shared with ministers, central bank leadership and university vice-chancellors.'
      ]
    },
    {
      type: 'identity',
      eyebrow: 'Visual Identity & Campaign System',
      heading: 'The identity system',
      intro: 'From the core lockup to daily campaign graphics, every asset speaks the same visual language.',
      identityPair: [FIE_ASSETS.logotypeBlue, FIE_ASSETS.lockupOnWhite],
      feature: { ...FIE_ASSETS.speakerLineup, caption: 'Speaker lineup announcement — the system applied to a wide social format' },
      campaignGrid: [
        { ...FIE_ASSETS.speakersGrid, caption: 'Full speakers announcement' },
        { ...FIE_ASSETS.happeningToday, caption: 'Event-day countdown graphic' },
        { ...FIE_ASSETS.thankYou, caption: 'Post-event appreciation graphic' }
      ],
      posterPair: [
        { ...FIE_ASSETS.mainPoster, caption: 'Lead conference poster with the 2023 theme' },
        { ...FIE_ASSETS.workshopPoster, caption: 'Postgraduate research workshop announcement' }
      ]
    },
    {
      type: 'experience',
      eyebrow: 'Event Experience',
      heading: 'Translated into the room',
      paragraphs: [
        'Inside the Kofi Ohene Konadu Auditorium, the identity scaled to environmental proportions — speaker screens, stage backdrops and podium branding turned the campaign into a physical space.'
      ],
      videos: [
        { ...FIE_ASSETS.venueFromAudience, poster: FIE_ASSETS.stagePanorama.src },
        { ...FIE_ASSETS.venueWalkthrough, poster: FIE_ASSETS.stagePanorama.src },
        { ...FIE_ASSETS.screenPan, poster: FIE_ASSETS.speakerLineup.src }
      ]
    },
    {
      type: 'photography',
      eyebrow: 'Event Photography',
      heading: 'Two days in December',
      photos: [
        { ...FIE_ASSETS.groupPhoto, caption: 'Speakers, dignitaries and the organising team on the FIE 2023 stage' },
        { ...FIE_ASSETS.speakerAtPodium, caption: 'A session address from the UPSA podium' },
        { ...FIE_ASSETS.audience, caption: 'Delegates following the sessions in the auditorium' }
      ]
    },
    {
      type: 'motion',
      eyebrow: 'Motion & Video',
      heading: 'The identity in motion',
      paragraphs: [
        'A short animated reveal extended the identity into motion, giving the conference a living mark for digital screens and social placements.'
      ],
      video: { ...FIE_ASSETS.logoAnimation, poster: FIE_ASSETS.lockupOnWhite.src }
    },
    {
      type: 'reflection',
      eyebrow: 'Project Reflection',
      heading: 'Designed to hold the room',
      paragraphs: [
        'FIE 2023 shows how a focused identity system can carry an event from the first announcement to the final applause — one language across feeds, posters, screens and the stage itself.',
        'The full toolkit — lockup, motif, palette and layout rules — kept every touchpoint consistent across two days of programming and an international roster of speakers.'
      ]
    },
    {
      type: 'related',
      heading: 'Continue exploring'
    }
  ]
};
