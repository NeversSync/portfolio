import React from 'react';
import styled from 'styled-components';
// import tableauImg from '../assets/tableau-screen-shot.png';
import tableauImg from '../assets/landing-page-tableau.png';

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

function Projects() {
  return (
    <Wrapper>
      <Project>
        <Header>Tableau</Header>
        <SubHeader>React.js/Redux, Node.js, Express.js, AWS S3, <br/>MongoDB, Mongoose, Heroku, Mlab</SubHeader>
        <ImgWrapper><img style={{ width: '100%', height: '100%'}}src={tableauImg} alt=''/></ImgWrapper>
      </Project>
      <Project>
        Gong Fu Tea
      </Project>
      <Project>
        Projects
      </Project>
      <Project>
        Projects
      </Project>
    </Wrapper>
  );
}
export default Projects;

// Tableau     -    https://the-tableau-app.herokuapp.com
// •         Instagram   clone   built   over   4   days
// -   Technical   stack:   React.js/Redux,   Node.js,   Express.js,   AWS,   S3,   MongoDB,   Mongoose,   Styled   Components,   Material   UI,             Heroku,   Mlab
// GongFuTea    -      http://gongfutea.org
// •          Open   source   project   providing   an   interactive   map   and   user-curated   database   for   lovers   of   Chinese   tea   preparation
// -   Technical   stack:   Mobile-first,   Javascript,   Node.js,   Express.js,   Google   Maps   API,   PostgreSQL,   TDD,   MVC,   Jquery,
//          Heroku,   HerokuDB