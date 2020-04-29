require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@asdf`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/hoc/Layouts/Layout.js`),
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `typography.js`,
        path: `${__dirname}/src/utils/typography.js`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: './src/utils/typography',
      },
    },
    // {
    //   resolve: 'gatsby-wpgraphql-inline-images',
    //   options: {
    //     wordPressUrl: 'https://raresrusu.com/',
    //     uploadsUrl: 'https://raresrusu.com/wp-content/uploads/',
    //     processPostTypes: ['Page', 'Post', 'CustomPost'],
    //     graphqlTypeName: 'WPGraphQL',
    //     // httpHeaders: {
    //     //   Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    //     // },
    //   },
    // },
    // {
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     // your WordPress source
    //     baseUrl: `www.raresrusu.com`,
    //     protocol: `https`,
    //     // is it hosted on wordpress.com, or self-hosted?
    //     hostingWPCOM: false,
    //     // does your site use the Advanced Custom Fields Plugin?
    //     useACF: false,
    //     verboseOutput: false,
    //     includedRoutes: [
    //       '**/categories',
    //       '**/posts',
    //       '**/pages',
    //       '**/media',
    //       '**/tags',
    //       '**/taxonomies',
    //       '**/users',
    //       '**/comments',
    //     ],
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
