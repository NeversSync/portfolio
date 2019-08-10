module.exports = {
  siteMetadata: {
    title: 'Nicky Evers Design',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-115875148-2',
        head: true
      }
    },
    { resolve: 'gatsby-plugin-styled-components' },
    'gatsby-plugin-react-helmet'
  ]
};