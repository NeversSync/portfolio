import React from 'react';
import { Wrapper, Header, SubHeader, Project, Img, Title } from './styles/Projects.style';
const tableauImg = 'http://res.cloudinary.com/nicky-cloudinary/image/upload/dpr_auto,f_auto,q_auto:good/v1519772075/Portfolio/tableau-screen-shot.png';
const gongFuImg = 'http://res.cloudinary.com/nicky-cloudinary/image/upload/s--OqiFZzIy--/dpr_auto,f_auto,q_jpegmini/v1519772080/Portfolio/gong-fu-tea-screenshot.png';


function Projects() {
  return (
    <div>
      <Title>Projects</Title>
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