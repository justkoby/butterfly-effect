const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://butterflyeffectconcepts.com';

// Define static routes
const staticRoutes = [
  { path: '', changefreq: 'weekly', priority: '1.0' },
  { path: '/about', changefreq: 'monthly', priority: '0.8' },
  { path: '/services', changefreq: 'monthly', priority: '0.8' },
  { path: '/projects', changefreq: 'weekly', priority: '0.9' },
  { path: '/contact', changefreq: 'monthly', priority: '0.8' }
];

function getProjectIds() {
  const ids = new Set();
  const filePath = path.join(__dirname, '../src/pages/ProjectDetailPage.jsx');
  
  try {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      // Look for id: '...' or id: "..."
      const regex = /id:\s*['"]([^'"]+)['"]/g;
      let match;
      while ((match = regex.exec(content)) !== null) {
        ids.add(match[1]);
      }
    }
  } catch (err) {
    console.error('Error reading ProjectDetailPage.jsx for sitemap:', err);
  }
  
  return Array.from(ids);
}

function generateSitemap() {
  const projectIds = getProjectIds();
  const currentDate = new Date().toISOString().split('T')[0];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Add static routes
  staticRoutes.forEach(route => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}${route.path}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  // Add dynamic project routes
  projectIds.forEach(id => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}/projects/${id}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>0.7</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>\n';

  const outputPath = path.join(__dirname, '../public/sitemap.xml');
  
  // Ensure the public directory exists
  const publicDir = path.dirname(outputPath);
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, xml, 'utf8');
  console.log(`Sitemap successfully generated at: ${outputPath}`);
  console.log(`Included ${staticRoutes.length} static pages and ${projectIds.length} project case studies.`);
}

generateSitemap();
