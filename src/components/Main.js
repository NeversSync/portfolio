import React from 'react';
import Landing from './Landing';
import About from './About';
import Contact from './Contact';
// import Footer from './Footer';
import Projects from './Projects';
import { Wrapper } from './styles/Main.style';

function Main() {
  return (
    <Wrapper>
      <Landing/>
      <About/>
      <Projects/>
      <Contact/>
      {/* <Footer/> */}
    </Wrapper>
  );
}

export default Main;