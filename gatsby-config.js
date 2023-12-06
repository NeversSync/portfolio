module.exports = {
  siteMetadata: {
    title: 'Nico Evers Design',
    author: 'Nico Evers Design',
    description: 'Nico Evers Design Web development and Design',
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
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline'

  ]
};
