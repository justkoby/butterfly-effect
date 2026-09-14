const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://butterflyeffectconcepts.com';

// Define static routes with accurate priorities
const staticRoutes = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/projects', changefreq: 'weekly', priority: '0.9' },
  { path: '/services', changefreq: 'monthly', priority: '0.8' },
  { path: '/about', changefreq: 'monthly', priority: '0.8' },
  { path: '/contact', changefreq: 'monthly', priority: '0.8' }
];

function getProjects() {
  const filePath = path.join(__dirname, '../src/data/portfolioProjects.js');
  
  try {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      const regex = /["']?id["']?\s*:\s*['"]([^'"]+)['"][\s\S]*?["']?hasDetailPage["']?\s*:\s*true/g;
      let match;
      const seen = new Set();
      const projects = [];
      while ((match = regex.exec(content)) !== null) {
        if (!seen.has(match[1])) {
          seen.add(match[1]);
          projects.push(match[1]);
        }
      }
      return projects;
    }
  } catch (err) {
    console.error('Error reading portfolioProjects.js for sitemap:', err);
  }
  
  return [];
}

function generateSitemap() {
  const projectIds = getProjects();
  const currentDate = new Date().toISOString().split('T')[0];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Add static routes
  staticRoutes.forEach(route => {
    const loc = route.path === '/' ? `${BASE_URL}/` : `${BASE_URL}${route.path}`;
    xml += '  <url>\n';
    xml += `    <loc>${loc}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  // Add dynamic project case study routes
  projectIds.forEach(id => {
    const publicationRoutes = {
      'e-waste-management-report': '/work/e-waste-management-report',
      'aasu-2025-annual-report': '/work/aasu-2025-annual-report'
    };
    const projectPath = publicationRoutes[id] || `/projects/${id}`;
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}${projectPath}</loc>\n`;
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
