import React from 'react';

const BASE_URL = 'https://butterflyeffectconcepts.com';
const DEFAULT_TITLE = 'Butterfly Effect Concepts — Visual Systems for Brands';
const DEFAULT_DESC = 'We build high-impact visual design systems for brands across digital platforms, branding, packaging, and campaigns.';
const DEFAULT_IMAGE = '/cover-idbf-01.jpg'; // fallback image

export default function SEO({ title, description, image, path = '' }) {
  const metaTitle = title ? `${title} | Butterfly Effect` : DEFAULT_TITLE;
  const metaDesc = description || DEFAULT_DESC;
  const metaImage = image 
    ? (image.startsWith('http') ? image : `${BASE_URL}${image}`) 
    : `${BASE_URL}${DEFAULT_IMAGE}`;
  const canonicalUrl = `${BASE_URL}${path}`;

  return (
    <>
      {/* Primary Meta Tags */}
      <title>{metaTitle}</title>
      <meta name="title" content={metaTitle} />
      <meta name="description" content={metaDesc} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image" content={metaImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={metaImage} />
    </>
  );
}
