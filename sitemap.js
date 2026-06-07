import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const isProduction = process.env.VITE_NODE_ENV === 'production';

const config = {
  baseUrl: isProduction ? 'https://abbasopeyemi.vercel.app/' : 'http://localhost:3002',
  outputPath: './public/sitemap.xml',
  routes: [
    {
      url: '/',
      changefreq: 'weekly',
      priority: '1.0',
      lastmod: new Date().toISOString().split('T')[0],
    },

    {
      url: '/resume.pdf',
      changefreq: 'monthly',
      priority: '0.8',
      lastmod: new Date().toISOString().split('T')[0],
    },
  ],
};

function generateSitemap() {
  const urls = config.routes
    .map(
      (route) =>
        `   <url> 
               <loc>${config.baseUrl}${route.url}</loc>
               <lastmod>${route.lastmod}</lastmod>
               <changefreq>${route.changefreq}</changefreq>
               <priority>${route.priority}</priority>
             </url>`,
    )
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?> <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls} 
        </urlset>`;
}

function ensureDirectoryExists(filePath) {
  const dir = path.dirname(filePath);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function writeSitemap() {
  try {
    const sitemap = generateSitemap();

    ensureDirectoryExists(config.outputPath);

    fs.writeFileSync(config.outputPath, sitemap, 'utf8');

    console.log(`✅ Sitemap generated`);
    console.log(`📍 ${config.outputPath}`);
    console.log(`🔗 ${config.baseUrl}`);
    console.log(`📄 ${config.routes.length} URLs`);
  } catch (error) {
    console.error('❌ Failed to generate sitemap');
    console.error(error);
  }
}

if (import.meta.url === new URL(import.meta.url).href) {
  writeSitemap();
}
