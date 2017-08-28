import React from 'react';
import Landing from './Landing';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Projects from './Projects';

function Main() {
  return (
    <div>
      <Landing/>
      <About/>
      <Contact/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default Main;