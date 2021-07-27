module.exports = {
  siteMetadata: {
    siteUrl: "https://samuelprak.fr",
    title: "Samuel Prak - Développeur web",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
    "gatsby-plugin-postcss",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-88135025-1",
      },
    },
  ],
};
