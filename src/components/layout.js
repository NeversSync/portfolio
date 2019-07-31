import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'reset-css';
import '../App.css';

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
`;

// TODO: fix meta images
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title='Nicky Evers Design'
          meta={[
            { name: 'Nicky Evers Design', content: 'Nicky Evers Design' },
            { name: 'keywords', content: 'Nicky Evers Design' },
            {
              name: 'description',
              content: 'Nicky Evers Design, Web Developer | Designer'
            },
            { name: 'og:image', content: 'https://res.cloudinary.com/nicky-cloudinary/image/upload/f_auto,q_auto:best/v1563155765/Portfolio/nickyevers.com-screenshot.png' },
            { name: 'og:type', content: 'website' },
            { name: 'og:title', content: 'Nicky Evers Design' },
            { name: 'og:url', content: 'https://nickyevers.com/' },
            { name: 'og:description', content: 'Nicky Evers Design, Web Developer | Designer' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:url', content: 'https://nickyevers.com/' },
            { name: 'twitter:title', content: 'Nicky Evers Design' },
            {
              name: 'twitter:description',
              content: 'Nicky Evers Design, Web Developer | Designer'
            },
            { name: 'twitter:image', content: 'https://res.cloudinary.com/nicky-cloudinary/image/upload/f_auto,q_auto:best/v1563155765/Portfolio/nickyevers.com-screenshot.png' }
          ]}
        />
        <MuiThemeProvider>
          <Content>{children}</Content>
        </MuiThemeProvider>
      </>
    )}
  />
);

export default Layout;
