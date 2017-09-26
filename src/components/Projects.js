import React from 'react';
import styled from 'styled-components';
import tableauImg from '../assets/img/landing-page-tableau.png';
import gongFuImg from '../assets/img/gong-fu-tea-screenshot.png';
import keyDownImg from '../assets/img/keydown-screenshot.png';

const Wrapper = styled.div`
  margin: 30px 0 0 0;
  width: 100%;
  height: 650px;
  font-family: 'Raleway', sans-serif;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-evenly;
`;

const Project = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-evenly;
  width: 40%;
  height: 300px;
`;

const Tableau = Project.extend`
  &:hover {
    
  }
`;
// TODO: Figure out overlay on hover for each project, possibly by having conditional rending in state or?
const Header = styled.h2`
display: block;
width: 300px;
text-align: center;
font-size: .90em;
font-weight: 600;
line-height: 1.5em;
`;

const SubHeader = styled.h3`
text-align: center;
font-size: .75em;
font-weight: 300;
line-height: 1.2em;
`;

const ImgWrapper = styled.div`
width: 400px;
`;


// TODO:
// add github button link to each project
// Add hover function for projects
// fix spacing of projects

function Projects() {
  return (
    <Wrapper>
      <Tableau>
        <Header>Tableau</Header>
        <SubHeader>React.js/Redux, Node.js, Express.js, AWS S3, <br/>MongoDB, Mongoose, Heroku, Mlab</SubHeader>
        <ImgWrapper><img style={{ width: '100%', height: '100%'}}src={tableauImg} alt=''/></ImgWrapper>
      </Tableau>
      <Project>
        <Header>Gong Fu Tea</Header>
        <SubHeader>Mobile-first, Node.js, Express.js, Google Maps API, <br/> PostgreSQL, MongoDB, Mongoose, TDD, Jquery, Heroku</SubHeader>
        <ImgWrapper><img style={{ width: '100%', height: '100%'}}src={gongFuImg} alt=''/></ImgWrapper>
      </Project>
      <Project>
        <Header>KeyDown</Header>
        <SubHeader>Vanilla Javascript, HTML 5, CSS</SubHeader>
        <ImgWrapper><img style={{ width: '100%', height: '100%'}}src={keyDownImg} alt=''/></ImgWrapper>
      </Project>
      <Project>
      <Header>React Image Gallery</Header>
        <SubHeader>React.js/Redux, Node.js, Express.js, MongoDB,<br/> Mongoose, Heroku, Mlab</SubHeader>
        <ImgWrapper><img style={{ width: '100%', height: '100%'}}src={keyDownImg} alt=''/></ImgWrapper>
      </Project>
    </Wrapper>
  );
}
export default Projects;