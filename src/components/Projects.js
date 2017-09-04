import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 650px;
  font-family: 'Raleway', sans-serif;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-evenly;
`;

const Project = styled.div`
  width: 40%;
  height: 250px;
  border: 1px solid black;
`;

function Projects() {
  return (
    <Wrapper>
      <Project>
        Gong Fu Tea
      </Project>
      <Project>
        <h2>Tableau</h2>
        <p>Instagram clone built over 4 days</p>
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