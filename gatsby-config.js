module.exports = {
  siteMetadata: {
    title: `Lipstick and Leather`,
    titleTemplate: `%s · Documentary`,
    description: `In a buttoned-up city like DC, what happens when drag queens go rogue? Lipstick and Leather explores the "alt-drag" community in the nations capital, and how these performers are spreading their influence across the east coast.`,
    url: `https://lipstickandleatherdoc.com/`,
    twitterUsername: "@filmsbyamyoden",
    image: `af2a50f052195b52e0e828eaef597610/9dc27/slide-1.jpg`
    
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
