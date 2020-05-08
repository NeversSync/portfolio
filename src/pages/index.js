import React from 'react';
import Layout from '../components/layout';
import Landing from '../components/Landing';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';
import { MainWrapper, Content } from '../components/styles/Helpers';

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

const IndexPage = () => (
  <Layout className='App' id='top'>
    <MainWrapper>
      <Landing />
      <Content>
        <About />
        <Testimonials />
        <Projects />
        <Contact />
      </Content>
    </MainWrapper>
  </Layout>
);

export default IndexPage;

// TODO: Add jess - Test adding a page for the project
// TODO: Add jess testimonial. Make 3? or keep as 2?
// TODO: Update resume
// TODO: Remove landing page hover thing?
// TODO: Replace tech stack info with user relatable stuff
// TODO: Update animations for projects on scroll. faster


