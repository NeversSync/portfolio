import React from 'react';
import styled from 'styled-components';
import tableauImg from '../assets/img/tableau-screen-shot.png';
import gongFuImg from '../assets/img/gong-fu-tea-screenshot.png';

const Wrapper = styled.div`
  margin: 30px 0 0 0;
  width: 100%;
  height: 400px;
  font-family: 'Raleway', sans-serif;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-evenly;
`;

const Title = styled.div`
  font-family: 'Raleway', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 170px;
  font-size: 2em;
  color: white;
  background-color: hsla(187, 71%, 41%, 0.79);
`;

const Project = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-evenly;
  width: 40%;
  height: 300px;
  margin: 10px;
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
margin: 2px;
`;

const SubHeader = styled.h3`
text-align: center;
font-size: .75em;
font-weight: 300;
line-height: 1.2em;
margin: 2px;
`;

const ImgWrapper = styled.div`
width: 400px;
height: 300px;
// border: .2px solid black;
box-shadow: .5px .5px 8px .2px grey;
`;


// TODO:
// add github button link to each project
// Add hover function for projects
// fix spacing of projects

function Projects() {
  return (
    <div>
      <Title><h2>Projects</h2></Title>
      <Wrapper>
        <Tableau>
          <Header>Tableau</Header>
          <SubHeader>React.js/Redux, Node.js, Express.js, AWS S3, <br/>MongoDB, Mongoose, Heroku, Mlab</SubHeader>
          <ImgWrapper><img style={{ width: '100%'}}src={tableauImg} alt=''/></ImgWrapper>
        </Tableau>
        <Project>
          <Header>Gong Fu Tea</Header>
          <SubHeader>Mobile-first, Node.js, Express.js, Google Maps API, <br/> PostgreSQL, MongoDB, Mongoose, TDD, Jquery, Heroku</SubHeader>
          <ImgWrapper><img style={{ width: '100%'}}src={gongFuImg} alt=''/></ImgWrapper>
        </Project>
      </Wrapper>
    </div>
  );
}
export default Projects;