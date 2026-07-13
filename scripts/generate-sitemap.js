/**
 * Sitemap Generator
 * Run: node scripts/generate-sitemap.js
 */

const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://www.decorembysonyamehta.com';

const pages = [
  { url: '/', changefreq: 'weekly', priority: '1.0' },
  { url: '/about', changefreq: 'monthly', priority: '0.8' },
  { url: '/services', changefreq: 'monthly', priority: '0.9' },
  { url: '/portfolio', changefreq: 'weekly', priority: '0.9' },
  { url: '/process', changefreq: 'monthly', priority: '0.8' },
  { url: '/testimonials', changefreq: 'weekly', priority: '0.8' },
  { url: '/inspiration', changefreq: 'weekly', priority: '0.7' },
  { url: '/blog', changefreq: 'weekly', priority: '0.7' },
  { url: '/contact', changefreq: 'monthly', priority: '0.9' },
];

function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${DOMAIN}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  const publicPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  fs.writeFileSync(publicPath, sitemap);
  console.log('✅ Sitemap generated successfully at public/sitemap.xml');
}

generateSitemap();
