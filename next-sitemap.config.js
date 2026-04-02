/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://snaphingestudios.com',
  generateRobotsTxt: true,
  trailingSlash: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  outDir: './out',
};
