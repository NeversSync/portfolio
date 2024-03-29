import React, { Component } from 'react';
import ScrollMagic from 'scrollmagic';
import {
  Header,


  Img, Project,


  ProjectSection, SubHeader,


  Title, Wrapper
} from './styles/Projects.style';


const tableauImg =
  'https://res.cloudinary.com/nicky-cloudinary/image/upload/s--0rCQ98Y_--/f_auto,q_jpegmini/v1577230905/Portfolio/TABLEAU/TABLEAU-LANDING-SS.png';
const joeImg =
  'https://res.cloudinary.com/nicky-cloudinary/image/upload/s---rc8HLjD--/f_auto,q_jpegmini/v1577230734/Portfolio/joemygoodness/JOEMYGOODNESS-LANDING-SS.png';
const gongFuImg =
  'https://res.cloudinary.com/nicky-cloudinary/image/upload/s--I-UvsQEZ--/f_auto,q_jpegmini:2/v1577230665/Portfolio/gongfutea/GONGFUTEA-LANDING-SS.png';
const EnterpriseImg =
  'https://res.cloudinary.com/nicky-cloudinary/image/upload/s--kR__kW82--/f_auto,q_jpegmini/v1577230438/Portfolio/enterprise/ENTERPRISE-LANDING-SS.png';
const LangmoreFeesImg =
  'https://res.cloudinary.com/nicky-cloudinary/image/upload/s--sj7ogtGK--/f_auto,q_jpegmini/v1577229365/Portfolio/langmore/LANGMORE-LANDING-SS.png';
// const ProplogicImg =
//   'https://res.cloudinary.com/nicky-cloudinary/image/upload/s--1wbXUvlp--/f_auto,q_jpegmini/v1577230853/Portfolio/prop-logic/PROPLOGIC-LANDING-SS.png';
const PascaleImg =
  'https://res.cloudinary.com/nicky-cloudinary/image/upload/s--_lVPLDYj--/f_auto,q_jpegmini/v1577230813/Portfolio/pascale-vermont/PASCALEVERMONT-LANDING-SS.png';
const JessVegaImg = 'https://res.cloudinary.com/nicky-cloudinary/image/upload/v1598553589/Portfolio/jessvega-landing-screenshot.jpg';
const IanessaImg = 'https://res.cloudinary.com/nicky-cloudinary/image/upload/v1597951358/Portfolio/ianessa-landing.jpg';

class Projects extends Component {
  componentDidMount() {
    const controller = new ScrollMagic.Controller();
    const animatedProjectComponents = [
      this.GongFuProject,
      this.TableauProject,
      this.PascaleProject,
      this.EnterpriseProject,
      this.LangmoreFeesProject,
      this.JoeMyGoodnessProject,
      this.JessVegaProject,
      this.IanessaProject,
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
              this.IanessaProject = comp;
            }}
            className="project-comp"
          >
            <a
              href="https://www.ianessahumbert.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Header>Ianessa Humbert</Header>
              <SubHeader>Mobile-first, Wordpress</SubHeader>
              <Img src={IanessaImg} alt=""></Img>
            </a>
          </Project>
          <Project
            ref={comp => {
              this.JessVegaProject = comp;
            }}
            className="project-comp"
          >
            <a
              href="https://www.jessvega.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Header>Jess Vega</Header>
              <SubHeader>Mobile-first, Wordpress</SubHeader>
              <Img src={JessVegaImg} alt=""></Img>
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
        </Wrapper>
      </div>
    );
  }
}
export default Projects;
