module.exports = {
  pathPrefix: '/kds-site-gatsby',
  siteMetadata: {
    title: "Alison's Makeup",
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/content`,
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Open Sans', 'Poiret One'],
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: "UA-111631929-1",
      },
    }
  ],
};
