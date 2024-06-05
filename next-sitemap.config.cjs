/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://ninjadriveclub.com',
  generateRobotsTxt: true,
  exclude: [],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  generateIndexSitemap: false,
};

module.exports = config;
