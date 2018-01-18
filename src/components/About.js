import React from 'react';
import profileImg from '../assets/img/profile-img.jpg';
import { Wrapper, Text, HeaderWrapper, Header, SubHeader, ImgWrapper, CopyWrapper, SubCopy, Social } from './styles/About.style'; 
import LinkedInIcon from 'react-icons/lib/fa/linkedin-square';
import GithubIcon from 'react-icons/lib/fa/github-square';

function About() {
  return (
    <Wrapper id='about'>
      <HeaderWrapper>
        <div><Header>Hi, I'm Nicky.</Header>
        </div>
        <SubHeader>I'm a design driven Web Developer and I'm ready to work.</SubHeader>
      </HeaderWrapper>
      <Text>
        <ImgWrapper>
          <img style={{
            width: '100%',
            boxShadow: '0 0 5px 0 rgba(0,0,0,.5)'
          }}src={profileImg} alt=''/>  
        </ImgWrapper>
        <CopyWrapper>
          <SubCopy>My passion for learning combined with my love for elegant problem solving is a tremendous driving force for me in everything I do, from writing DRY code, to juggling, to sourcing tea from Taiwan. 
          </SubCopy>
          <SubCopy>I care about UI/UX and love to transform ideas into fully functional web applications. I'm currently looking for full-time employment while working as a freelancer in Portland, Oregon.</SubCopy>
          <Social>
            <a href="https://github.com/NeversSync" target="_blank" rel="noopener noreferrer"><GithubIcon size={30}/></a>
            <a href="https://www.linkedin.com/in/nicky-evers/" target="_blank" rel="noopener noreferrer"><LinkedInIcon size={30}/></a>
          </Social>
        </CopyWrapper>
      </Text>
    </Wrapper >
  );
}

export default About;