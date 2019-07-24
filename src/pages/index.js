import React from 'react';
import Layout from '../components/layout';
import Landing from '../components/Landing';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { MainWrapper, Content } from '../components/styles/Helpers';

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

const IndexPage = () => (
  <Layout>
    <div className='App' id='top'>
      <MainWrapper>
        <Landing />
        <Content>
          <About />
          <Projects />
          <Contact />
        </Content>
      </MainWrapper>
    </div>
  </Layout>
);

export default IndexPage;

// function Main() {
//   return (
//     <Wrapper>
//       <Landing />
//       <Content>
//         <About />
//         <Projects />
//         <Contact/>
//       </Content>
//     </Wrapper>
//   );
// }

// export default Main;
