import React from 'react';
import profileImg from '../assets/img/profile-img.jpg';
import { Wrapper, Text, HeaderWrapper, Header, SubHeader, ImgWrapper, CopyWrapper, Copy, SubCopy} from './styles/About.style'; 

function About() {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Header>Nicky Evers</Header>
        <SubHeader>Software developer, tea lover, and tech enthusiast</SubHeader>
      </HeaderWrapper>
      <Text>
        <ImgWrapper>
          <img style={{
            width: '100%',
            boxShadow: '0 0 5px 0 rgba(0,0,0,.5)'
          }}src={profileImg} alt=''/>  
        </ImgWrapper>
        <CopyWrapper>
          <Copy>Hi, I'm Nicky Evers, welcome to my website.</Copy> 
          <SubCopy>I'm a Full-Stack web developer with a successful track record of transforming conceptual ideas into fully functional applications. I'm currently working as a freelancer and looking for full-time employment while residing in Portland, Oregon.</SubCopy>
          <SubCopy>My passion for learning combined with my love for elegant problem solving has been a tremendous driving force for me in everything I do.
          </SubCopy>
          <SubCopy>Want to hire me? I'd love to talk to you to find out how I can help.</SubCopy>
        </CopyWrapper>
      </Text>
    </Wrapper >
  );
}

export default About;