import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import resumeLink from '../assets/Nicky-Evers-Tech-Resume.pdf';
import ResumeIcon from 'react-material-icons/icons/action/description';
import LinkedInIcon from 'react-icons/lib/fa/linkedin-square';
import GithubIcon from 'react-icons/lib/fa/github-square';
import EmailIcon from 'react-icons/lib/fa/envelope';
import { Wrapper, Copy, Copyright, SocialIcon, ButtonWrapper, IconWrapper } from './styles/Contact.style';

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
          {/* <IconWrapper>
            <SocialIcon href='mailto:livelyevers@gmail.com' target="_blank" rel="noopener noreferrer"><EmailIcon 
            size={50} color={this.state.email} 
            onMouseEnter={this.toggleEmailHover} 
            onMouseLeave={this.toggleEmailHover}
            style={{ transition: '.3s ease'}}/></SocialIcon>
            <SocialIcon href="https://github.com/NeversSync" target="_blank" rel="noopener noreferrer"><GithubIcon 
            size={50} color={this.state.github} 
            onMouseEnter={this.toggleGithubHover} 
            onMouseLeave={this.toggleGithubHover}
            style={{ transition: '.3s ease'}} /></SocialIcon>
            <SocialIcon href="https://www.linkedin.com/in/nicky-evers/" target="_blank" rel="noopener noreferrer"><LinkedInIcon size={50} color={this.state.linkedIn} 
            onMouseEnter={this.toggleLinkedInHover} 
            onMouseLeave={this.toggleLinkedInHover}
            style={{ transition: '.3s ease'}} /></SocialIcon>
          </IconWrapper> */}
          <RaisedButton
            label='Resume'
            href={resumeLink}
            primary={true}
            target='_blank'
            style={{ width: '150px', height: '50px', margin: '10px 15px'}}
            labelPosition='center'
            labelStyle={{ fontSize: '16px'}}
            icon={<ResumeIcon />}
          />
        </ButtonWrapper>
        <Copyright>&copy; Nicky Evers 2017
        </Copyright>
      </Wrapper>
    );
  }
}

export default Contact;