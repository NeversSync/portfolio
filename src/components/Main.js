import React from 'react';
import Landing from './Landing';
import About from './About';
import Footer from './Footer';
import Projects from './Projects';
import Contact from './Contact';
import { Wrapper, Content } from './styles/Main.style';

function Main() {
  return (
    <Wrapper>
      <Landing />
      <Content>
        <About />
        <Projects />
        <Contact/>
        {/* <Footer /> */}
      </Content>
    </Wrapper>
  );
}

export default Main;
