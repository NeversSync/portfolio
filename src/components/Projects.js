import React from 'react';
import styled from 'styled-components';
import tableauImg from '../assets/img/tableau-screen-shot.png';
import gongFuImg from '../assets/img/gong-fu-tea-screenshot.png';
import { Wrapper, Header, SubHeader, ImgWrapper, Project, Title } from './styles/Projects.style';

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
            <SubHeader>React.js/Redux, Node.js, Express.js, AWS S3, <br/>MongoDB, Mongoose, Heroku, Mlab</SubHeader>
            <ImgWrapper><img style={{ width: '100%', height: '100%' }}src={tableauImg} alt=''/></ImgWrapper>
          </a>
        </Project>
        <Project>
          <a href="https://gongfucha.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <Header>Gong Fu Tea</Header>
            <SubHeader>Mobile-first, Node.js, Express.js, Google Maps API, <br/> PostgreSQL, MongoDB, Mongoose, TDD, Jquery, Heroku</SubHeader>
            <ImgWrapper><img style={{ width: '100%', height: '100%' }}src={gongFuImg} alt=''/></ImgWrapper>
          </a>
        </Project>
      </Wrapper>
    </div>
  );
}
export default Projects;