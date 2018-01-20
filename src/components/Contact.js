import React, { Component } from 'react';
import resumeLink from '../assets/Nicky-Evers-Tech-Resume.pdf';
import ResumeIcon from 'react-material-icons/icons/action/description';
import { Wrapper, Copy, Copyright, ButtonWrapper, Button, LabelWrapper } from './styles/Contact.style';

const orange = 'hsl(23, 95%, 55%';
const hoverOrange = 'hsl(23, 100%, 35%';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: orange,
      github: orange,
      linkedIn: orange
    };

    this.toggleEmailHover = this.toggleEmailHover.bind(this);
    this.toggleGithubHover = this.toggleGithubHover.bind(this);
    this.toggleLinkedInHover = this.toggleLinkedInHover.bind(this);
  }

  toggleEmailHover() {
    this.state.email === orange ? (this.setState({ email: hoverOrange })) : (this.setState({ email: orange }));
  }

  toggleGithubHover() {
    this.state.github === orange ? (this.setState({ github: hoverOrange })) : (this.setState({ github: orange }));
  }

  toggleLinkedInHover() {
    this.state.linkedIn === orange ? (this.setState({ linkedIn: hoverOrange })) : (this.setState({ linkedIn: orange }));
  }

  render() {
    return (
      <Wrapper>
        <Copy>Hiring? Need help on a project? Lets talk.</Copy>
        <ButtonWrapper>
          <Button><a href={resumeLink} target='_blank'><LabelWrapper><ResumeIcon color={'white'} style={{ margin: '0px 4px'}}/>Resume</LabelWrapper></a></Button>
        </ButtonWrapper>
        <Copyright>&copy; Nicky Evers 2017
        </Copyright>
      </Wrapper>
    );
  }
}

export default Contact;