/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://ninjadriveclub.com',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    generateIndexSitemap: false,
    changefreq: 'daily',
    priority: 0.7,
    // additionalPaths: добавляем путь только к существующим страницам
    additionalPaths: async (config) => {
      const result = [
        {
          loc: '/', // Главная страница
          changefreq: 'daily',
          priority: 1,
          lastmod: new Date().toISOString(),
        },
        // Добавьте другие страницы здесь, если они существуют
        // {
        //   loc: '/другая-страница', 
        //   changefreq: 'monthly',
        //   priority: 0.8,
        //   lastmod: new Date().toISOString(),
        // },
      ];
      return result;
    },
  };
  