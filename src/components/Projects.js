import React, { Component } from 'react';
import ScrollMagic from 'scrollmagic';

import {
  Wrapper,
  Header,
  SubHeader,
  Project,
  Img,
  Title,
  ProjectSection,
} from './styles/Projects.style';

const tableauImg =
  'https://res.cloudinary.com/nicky-cloudinary/image/upload/dpr_auto,f_auto,q_auto:good/v1519772075/Portfolio/tableau-screen-shot.png';
const joeImg =
  'https://res.cloudinary.com/nicky-cloudinary/image/upload/s--bTHG76If--/f_auto,q_jpegmini/v1562789893/Portfolio/joemygoodness.com-screenshot.png';
const gongFuImg =
  'https://res.cloudinary.com/nicky-cloudinary/image/upload/s--OqiFZzIy--/dpr_auto,f_auto,q_jpegmini/v1519772080/Portfolio/gong-fu-tea-screenshot.png';
const EnterpriseImg =
  'https://res.cloudinary.com/nicky-cloudinary/image/upload/s--CmYI1J_B--/f_auto,q_jpegmini/v1549568086/Portfolio/enterprise-screenshot.png';
const LangmoreFeesImg =
  'https://res.cloudinary.com/nicky-cloudinary/image/upload/s--O-SfcUf7--/f_auto,q_jpegmini/v1562789892/Portfolio/langmorefees.com-screenshot.png';
const ProplogicImg =
  'https://res.cloudinary.com/nicky-cloudinary/image/upload/s--XeJPGpiG--/f_auto,q_jpegmini/v1534317155/PROP-LOGIC/Screen_Shot_2018-08-15_at_12.08.46_AM.png';
const PascaleImg =
  'https://res.cloudinary.com/nicky-cloudinary/image/upload/f_auto,q_auto:best/v1539649113/Portfolio/pascale-vermont-site-screenshot.png';
const DoodleImg =
  'https://res.cloudinary.com/nicky-cloudinary/image/upload/s--6Yx3USEt--/f_auto,q_jpegmini/v1549568085/Portfolio/doodlegrip-screenshot.png';

class Projects extends Component {
  componentDidMount() {
    const controller = new ScrollMagic.Controller();
    const animatedProjectComponents = [
      this.GongFuProject,
      this.TableauProject,
      this.PascaleProject,
      this.EnterpriseProject,
      this.LangmoreFeesProject,
      this.ProplogicProject,
      this.DoodleProject,
      this.JoeMyGoodnessProject,
    ];
    animatedProjectComponents.forEach(comp => {
      new ScrollMagic.Scene({
        triggerElement: comp,
        triggerHook: 0.9,
        reverse: false,
      })
        .setClassToggle(comp, 'fade-project-in')
        .addTo(controller);
    });
  }

  render() {
    return (
      <div style={{ marginBottom: '40px' }}>
        <Title>Projects</Title>
        <ProjectSection>React.JS Projects</ProjectSection>
        <Wrapper>
          <Project
            ref={comp => {
              this.PascaleProject = comp;
            }}
            className="project-comp"
          >
            <a
              href="https://www.pascalevermont.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Header>Pascale Vermont</Header>
              <SubHeader>
                React.JS, GatsbyJS,
                <br />
                Mobile-first, Styled Components
              </SubHeader>
              <Img src={PascaleImg} alt=""></Img>
            </a>
          </Project>

          <Project
            ref={comp => {
              this.TableauProject = comp;
            }}
            className="project-comp"
          >
            <a
              href="https://the-tableau-app.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Header>Tableau</Header>
              <SubHeader>
                React.JS/Redux, NodeJS, ExpressJS, AWS S3, MongoDB, Mongoose,
                Heroku, Mlab
              </SubHeader>
              <Img src={tableauImg} alt=""></Img>
            </a>
          </Project>

          <Project
            ref={comp => {
              this.JoeMyGoodnessProject = comp;
            }}
            className="project-comp"
          >
            <a
              href="https://djjoemygoodness.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Header>DJ Joe My Goodness</Header>
              <SubHeader>
                React.JS, GatsbyJS, <br />
                Styled Components, Mobile-first
              </SubHeader>
              <Img src={joeImg} alt=""></Img>
            </a>
          </Project>

          <Project
            ref={comp => {
              this.GongFuProject = comp;
            }}
            className="project-comp"
          >
            <a
              href="https://gongfucha.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Header>Gong Fu Tea</Header>
              <SubHeader>
                Mobile-first, NodeJS, ExpressJS, Google Maps API, PostgreSQL,
                MongoDB, Mongoose, TDD, Jquery, Heroku
              </SubHeader>
              <Img src={gongFuImg} alt=""></Img>
            </a>
          </Project>
        </Wrapper>
        <ProjectSection>Wordpress Sites</ProjectSection>
        <Wrapper>
          <Project
            ref={comp => {
              this.EnterpriseProject = comp;
            }}
            className="project-comp"
          >
            <a
              href="https://enterpriseforyouth.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Header>Enterprise For Youth</Header>
              <SubHeader>Mobile-first, Wordpress</SubHeader>
              <Img src={EnterpriseImg} alt=""></Img>
            </a>
          </Project>

          <Project
            ref={comp => {
              this.LangmoreFeesProject = comp;
            }}
            className="project-comp"
          >
            <a
              href="https://langmorefees.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Header>LangmoreFEES</Header>
              <SubHeader>Mobile-first, Wordpress</SubHeader>
              <Img src={LangmoreFeesImg} alt=""></Img>
            </a>
          </Project>

          <Project
            ref={comp => {
              this.DoodleProject = comp;
            }}
            className="project-comp"
          >
            <a
              href="https://www.doodlegrip.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Header>DoodleGrip®</Header>
              <SubHeader>Mobile-first, Wordpress</SubHeader>
              <Img src={DoodleImg} alt=""></Img>
            </a>
          </Project>
          <Project
            ref={comp => {
              this.ProplogicProject = comp;
            }}
            className="project-comp"
          >
            <a
              href="https://proplogic.studio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Header>Prop Logic Studio</Header>
              <SubHeader>Mobile-first, Wordpress</SubHeader>
              <Img src={ProplogicImg} alt=""></Img>
            </a>
          </Project>
        </Wrapper>
      </div>
    );
  }
}
export default Projects;
