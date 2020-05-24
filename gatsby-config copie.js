module.exports = {
  // pathPrefix: "/uxpages",
  siteMetadata: {
    title: 'mekacreative.io',
    description: 'mekacreative.io',
    siteUrl: 'https://mekacreative.io/',
  },
  plugins: [
    // Shortcut for adding plugins without options.
    `gatsby-plugin-postcss`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-optimize-svgs',
    'gatsby-plugin-page-transitions',
    `gatsby-plugin-modal-routing`,
    `react-reveal`,
    {
    // Standard plugin with options example
    resolve: 'gatsby-plugin-babel',
    options: {
      plugins: ['transform-react-jsx'],
      ignore: ['foo.js', 'bar/**/*.js'],
    },
    }, 
  ],
}
