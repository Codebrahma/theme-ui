module.exports = {
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-mdx',
      options: {
        extensions: [ '.mdx', '.md' ],
      }
    },
  ]
}
