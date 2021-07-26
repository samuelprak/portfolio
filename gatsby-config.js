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
  ],
};
