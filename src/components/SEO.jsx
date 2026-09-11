import { useEffect } from 'react';

const BASE_URL = 'https://butterflyeffectconcepts.com';
const DEFAULT_TITLE = 'Butterfly Effect Concepts — Branding & Visual Design Studio in Accra, Ghana';
const DEFAULT_DESC = 'Butterfly Effect Concepts is a premier creative design studio based in Accra, Ghana. We build high-impact visual identity systems, packaging, campaigns, websites, and digital experiences.';
const DEFAULT_IMAGE = '/cover-idbf-01.jpg';
const DEFAULT_KEYWORDS = 'Butterfly Effect Concepts, Butterfly Effect, Butterfly Effect Ghana, branding studio Accra, visual identity design Accra, graphic design studio Ghana, packaging design Accra, creative agency Accra, brand design studio Ghana, butterfly effect concepts instagram';

// Helper to set or update meta tag in document.head
function setMetaTag(attrName, attrValue, content) {
  if (typeof document === 'undefined') return;
  let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

// Helper to set or update link tag in document.head
function setLinkTag(rel, href) {
  if (typeof document === 'undefined') return;
  let element = document.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute(rel, rel);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

// Helper to update dynamic page JSON-LD
function setDynamicSchema(schemaId, schemaObj) {
  if (typeof document === 'undefined') return;
  let script = document.getElementById(schemaId);
  if (!script) {
    script = document.createElement('script');
    script.id = schemaId;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(schemaObj);
}

export default function SEO({ 
  title, 
  description, 
  image, 
  path = '', 
  type = 'website',
  keywords = DEFAULT_KEYWORDS,
  schema = null 
}) {
  const metaTitle = title 
    ? (title.includes('Butterfly Effect') ? title : `${title} | Butterfly Effect Concepts`) 
    : DEFAULT_TITLE;
  const metaDesc = description || DEFAULT_DESC;
  const metaImage = image 
    ? (image.startsWith('http') ? image : `${BASE_URL}${image}`) 
    : `${BASE_URL}${DEFAULT_IMAGE}`;
  
  // Format canonical URL: ensure home is BASE_URL + '/', subpaths are BASE_URL + path
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const canonicalUrl = path === '' || path === '/' ? `${BASE_URL}/` : `${BASE_URL}${normalizedPath}`;

  // Synchronize with DOM for client-side navigation
  useEffect(() => {
    document.title = metaTitle;

    // Canonical link
    setLinkTag('canonical', canonicalUrl);

    // Primary meta tags
    setMetaTag('name', 'title', metaTitle);
    setMetaTag('name', 'description', metaDesc);
    setMetaTag('name', 'keywords', keywords);

    // Open Graph
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:site_name', 'Butterfly Effect Concepts');
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:title', metaTitle);
    setMetaTag('property', 'og:description', metaDesc);
    setMetaTag('property', 'og:image', metaImage);
    setMetaTag('property', 'og:locale', 'en_US');

    // Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:url', canonicalUrl);
    setMetaTag('name', 'twitter:title', metaTitle);
    setMetaTag('name', 'twitter:description', metaDesc);
    setMetaTag('name', 'twitter:image', metaImage);

    // Route-specific JSON-LD structured data
    const pageSchema = schema || {
      '@context': 'https://schema.org',
      '@type': type === 'article' ? 'Article' : 'WebPage',
      '@id': `${canonicalUrl}#webpage`,
      'url': canonicalUrl,
      'name': metaTitle,
      'description': metaDesc,
      'isPartOf': {
        '@type': 'WebSite',
        '@id': 'https://butterflyeffectconcepts.com/#website',
        'name': 'Butterfly Effect Concepts',
        'url': 'https://butterflyeffectconcepts.com/'
      },
      'inLanguage': 'en'
    };

    setDynamicSchema('route-schema', pageSchema);
  }, [metaTitle, metaDesc, metaImage, canonicalUrl, type, keywords, schema]);

  return (
    <>
      {/* Primary Meta Tags for SSR / Initial Crawl */}
      <title>{metaTitle}</title>
      <meta name="title" content={metaTitle} />
      <meta name="description" content={metaDesc} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Butterfly Effect Concepts" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={metaImage} />
    </>
  );
}
