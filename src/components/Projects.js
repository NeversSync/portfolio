import React, { Component } from 'react';
import ScrollMagic from 'scrollmagic';
import { Wrapper, Header, SubHeader, Project, Img, Title, ProjectSection } from './styles/Projects.style';
const tableauImg = 'http://res.cloudinary.com/nicky-cloudinary/image/upload/dpr_auto,f_auto,q_auto:good/v1519772075/Portfolio/tableau-screen-shot.png';
const gongFuImg = 'http://res.cloudinary.com/nicky-cloudinary/image/upload/s--OqiFZzIy--/dpr_auto,f_auto,q_jpegmini/v1519772080/Portfolio/gong-fu-tea-screenshot.png';
const EnterpriseImg = 'http://res.cloudinary.com/nicky-cloudinary/image/upload/c_scale,h_1576,w_2840/v1534317157/Screen_Shot_2018-08-15_at_12.07.58_AM.png';
const ProplogicImg = 'http://res.cloudinary.com/nicky-cloudinary/image/upload/c_scale,h_1576,w_2840/v1534317156/Screen_Shot_2018-08-15_at_12.09.58_AM.png';


class Projects extends Component {

  componentDidMount() {
    const controller = new ScrollMagic.Controller();
    const animatedProjectComponents = [this.GongFuProject, this.TableauProject, this.EnterpriseProject, this.ProplogicProject];
    animatedProjectComponents.forEach(comp => {
      new ScrollMagic.Scene({
        triggerElement: comp,
        triggerHook: .9,
        reverse: false
      })
      .setClassToggle(comp, 'fade-project-in')
      .addTo(controller);
    });
  }

  render() {
    return (
      <div style={{marginBottom: '40px'}}>
        <Title>Projects</Title>
            <ProjectSection>React.JS Projects</ProjectSection>
        <Wrapper>
            <Project 
            innerRef={comp => { this.TableauProject = comp;}} className='project-comp'>
              <a href="https://the-tableau-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <Header>Tableau</Header>
                <SubHeader>React.js/Redux, Node.js, Express.js, AWS S3, MongoDB, Mongoose, Heroku, Mlab</SubHeader>
                <Img src={tableauImg} alt=''></Img>
              </a>
            </Project>
            <Project
            innerRef={comp => { this.GongFuProject = comp;}} className='project-comp'>
              <a href="https://gongfucha.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <Header>Gong Fu Tea</Header>
                <SubHeader>Mobile-first, Node.js, Express.js, Google Maps API, PostgreSQL, MongoDB, Mongoose, TDD, Jquery, Heroku</SubHeader>
                <Img src={gongFuImg} alt=''></Img>
              </a>
            </Project>
          </Wrapper>
            <ProjectSection>Wordpress Sites</ProjectSection>
          <Wrapper>
            <Project
            innerRef={comp => { this.EnterpriseProject = comp;}} className='project-comp'>
              <a href="http://enterpriseforyouth.org/" target="_blank" rel="noopener noreferrer">
                <Header>Enterprise For Youth</Header>
                <SubHeader>Wordpress</SubHeader>
                <Img src={EnterpriseImg} alt=''></Img>
              </a>
            </Project>
            <Project
            innerRef={comp => { this.ProplogicProject = comp;}} className='project-comp'>
              <a href="http://proplogic.studio/" target="_blank" rel="noopener noreferrer">
                <Header>Prop Logic Studio</Header>
                <SubHeader>Mobile-first, Wordpress</SubHeader>
                <Img src={ProplogicImg} alt=''></Img>
              </a>
            </Project>
        </Wrapper>
        </div>
    );
  }
}
export default Projects;