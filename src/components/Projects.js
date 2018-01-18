import React from 'react';
import tableauImg from '../assets/img/tableau-screen-shot.png';
import gongFuImg from '../assets/img/gong-fu-tea-screenshot.png';
import { Wrapper, Header, SubHeader, Project, Img, Title } from './styles/Projects.style';

// TODO:
// add github button link to each project

function Projects() {
  return (
    <div>
      <Title><h2>Projects</h2></Title>
      <Wrapper>
        <Project>
          <a href="https://the-tableau-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <Header>Tableau</Header>
            <SubHeader>React.js/Redux, Node.js, Express.js, AWS S3, MongoDB, Mongoose, Heroku, Mlab</SubHeader>
            <Img src={tableauImg} alt=''></Img>
          </a>
        </Project>
        <Project>
          <a href="https://gongfucha.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <Header>Gong Fu Tea</Header>
            <SubHeader>Mobile-first, Node.js, Express.js, Google Maps API, PostgreSQL, MongoDB, Mongoose, TDD, Jquery, Heroku</SubHeader>
            <Img src={gongFuImg} alt=''></Img>
          </a>
        </Project>
      </Wrapper>
    </div>
  );
}
export default Projects;