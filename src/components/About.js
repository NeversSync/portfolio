import React from 'react';
import styled from 'styled-components';
import profileImg from '../assets/img/profile-img.jpg';

const Wrapper = styled.div`
  color: black;
  font-family: 'Raleway', sans-serif;
  height: 400px;
`;

const Text = styled.div`
  float: right;  
  width: 40%
`;

const Header = styled.h2`
  font-size: 1.75em;
  font-weight: 300;
`;

const SubHeader = styled.h3`
  font-size: 1.15em;
`;

const Copy = styled.p`
  font-size: .75em;
`;

const Image = styled.div`
margin: 10%;
  width: 30%;
  height: 600px;
  float: left;
  background: url(${profileImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center; 
`;

function About() {
  return (
    <Wrapper>
      <Image/>
      <Text>
        <Header>Nicky Evers</Header>
        <SubHeader>Software developer, tea lover, learning enthusiast</SubHeader>
        <Copy>Hi there, my name is Nicky and thanks for checking out my site!</Copy>
        <Copy>I'm a full stack software developer with a successful track record of bringing conceptual ideas to fully functional applications. I'm currently working as a freelancer, looking for full-time employment and residing in Portland, Oregon.</Copy>
        <Copy>Want to hire me? I'd love to talk to you to find out how I can help.</Copy>
        <Copy>My passion for building things combined with my enthusiasm for technology has since been a tremendous driving force for me. I've worked on countless projects ranging from web development to mobile apps for both Android and iOS.</Copy>
      </Text>
    </Wrapper >
  );
}

export default About;