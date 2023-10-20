const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  flexsearch: {
    codeblocks: false,
  },
});

module.exports = withNextra({
  basePath: '/docs',
  async redirects() {
    return [
      {
        source: '/docs',
        destination: '/docs/introduction',
        permanent: true,
        basePath: false,
      },
    ];
  },
});
