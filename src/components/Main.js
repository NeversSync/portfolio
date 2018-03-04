import React from 'react';
import Landing from './Landing';
import About from './About';
import Footer from './Footer';
import Projects from './Projects';
import { Wrapper, Content } from './styles/Main.style';

function Main() {
  return (
    <Wrapper>
      <Landing/>
      <Content>
      <About/>
      <Projects/>
      <Footer/>
      </Content>
    </Wrapper>
  );
}

export default Main;