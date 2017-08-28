import React from 'react';
import profileImg from '../assets/img/profile-img.jpg';
import { Wrapper, Text, HeaderWrapper, Header, SubHeader, ImgWrapper, CopyWrapper, Copy, SubCopy} from './styles/About.style'; 

function About() {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Header>Hi, I'm Nicky.</Header>
        <SubHeader>I'm a Full-Stack web developer and I'm ready to work.</SubHeader>
      </HeaderWrapper>
      <Text>
        <ImgWrapper>
          <img style={{
            width: '100%',
            boxShadow: '0 0 5px 0 rgba(0,0,0,.5)'
          }}src={profileImg} alt=''/>  
        </ImgWrapper>
        <CopyWrapper>
          <Copy>Hi, I'm Nicky.</Copy> 
          <SubCopy>My passion for learning combined with my love for elegant problem solving is a tremendous driving force for me in everything I do, from writing DRY code, to juggling, to sourcing tea from Taiwan. 
          </SubCopy>
          <SubCopy>I care about UI/UX and love to transform ideas into fully functional web applications. I'm currently looking for full-time employment while working as a freelancer in Portland, Oregon.</SubCopy>
        </CopyWrapper>
      </Text>
    </Wrapper >
  );
}

export default About;