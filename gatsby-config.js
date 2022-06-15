/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
 require(`dotenv`).config();
module.exports = {
  siteMetadata: {
    title: "Core Confidence",
    description: "Coreconfidence website",
    author: "@mudassar",
    keywords:"technology",
    image: "/og-image.png",
    siteUrl: "https://coreconfidence.com",
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    // 'gatsby-plugin-postcss',

  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `Poppins:300,400,400i,700` // you can also specify font weights and styles
      ],
      display: 'swap'
    }
  },
// {
//       resolve: `gatsby-source-graphcms`,
//       options: {
//         endpoint: process.env.GRAPGHCMS_ENDPOINT
//         // endpoint: `https://api-ca-central-1.graphcms.com/v2/cklmj8zfjpisa01xu0k8b050a/mastert`
//       },
//     },

    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GRAPHCMS',
        fieldName: 'graphCmsData',
        url: process.env.GRAPGHCMS_ENDPOINT,
      }
    },

  // {
  //   resolve: 'gatsby-plugin-load-script',
  //   options: {
  //     // disable: !process.env.SENTRY_DSN, // When do you want to disable it ?
  //     src: '/assets/js/algofan.js',
  //     // integrity:
  //     //   'sha384-Nrg+xiw+qRl3grVrxJtWazjeZmUwoSt0FAVsbthlJ5OMpx0G08bqIq3b/v0hPjhB',
  //     crossorigin: 'anonymous',

  //     // onLoad: `() => Sentry.init({dsn:"${process.env.SENTRY_DSN}"})`,
  //   },
  // },
],
}
