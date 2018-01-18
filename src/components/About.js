import React, { Component } from 'react';
import profileImg from '../assets/img/profile-img.jpg';
import { Wrapper, Content, HeaderWrapper, Header, SubHeader, ImgWrapper, CopyWrapper, SubCopy, Social, SocialIcon } from './styles/About.style';
import LinkedInIcon from 'react-icons/lib/fa/linkedin-square';
import GithubIcon from 'react-icons/lib/fa/github-square';
import EmailIcon from 'react-icons/lib/fa/envelope-square';

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 'black',
      github: 'black',
      linkedIn: 'black'
    };

    this.toggleEmailHover = this.toggleEmailHover.bind(this);
    this.toggleGithubHover = this.toggleGithubHover.bind(this);
    this.toggleLinkedInHover = this.toggleLinkedInHover.bind(this);
  }

  toggleEmailHover() {
    this.state.email === 'black' ? (this.setState({ email: 'hsla(187, 55%, 50%, 1)' })) : (this.setState({ email: 'black' }));
  }

  toggleGithubHover() {
    this.state.github === 'black' ? (this.setState({ github: 'hsla(187, 55%, 50%, 1)' })) : (this.setState({ github: 'black' }));
  }

  toggleLinkedInHover() {
    this.state.linkedIn === 'black' ? (this.setState({ linkedIn: 'hsla(187, 55%, 50%, 1)' })) : (this.setState({ linkedIn: 'black' }));
  }

  render() {
    return (
      <Wrapper id='about'>
        <HeaderWrapper>
          <div><Header>Hi, I'm Nicky.</Header>
          </div>
          <SubHeader>I'm a design driven Web Developer and I'm ready to work.</SubHeader>
        </HeaderWrapper>
        <Content>
          <ImgWrapper>
            <img style={{
              width: '100%',
              boxShadow: '0 0 5px 0 rgba(0,0,0,.5)'
            }} src={profileImg} alt='' />
          </ImgWrapper>
          <CopyWrapper>
            <SubCopy>My passion for learning combined with my love for elegant problem solving is a tremendous driving force for me in everything I do, from writing DRY code, to juggling, to sourcing tea from Taiwan.
          </SubCopy>
            <SubCopy>I care about UI/UX and love to transform ideas into fully functional web applications. I'm currently looking for full-time employment while working as a freelancer in Portland, Oregon.</SubCopy>
            <Social>
              <SocialIcon href='mailto:livelyevers@gmail.com' target="_blank" rel="noopener noreferrer"><EmailIcon 
              color={this.state.email} size={40} 
              onMouseEnter={this.toggleEmailHover} onMouseLeave={this.toggleEmailHover}
              style={{ transition: '.3s ease'}} /></SocialIcon>
              <SocialIcon href="https://github.com/NeversSync" target="_blank" rel="noopener noreferrer"><GithubIcon 
              color={this.state.github} size={40} 
              onMouseEnter={this.toggleGithubHover} onMouseLeave={this.toggleGithubHover}
              style={{ transition: '.3s ease'}}/></SocialIcon>
              <SocialIcon href="https://www.linkedin.com/in/nicky-evers/" target="_blank" rel="noopener noreferrer"><LinkedInIcon 
              color={this.state.linkedIn} size={40} onMouseEnter={this.toggleLinkedInHover} onMouseLeave={this.toggleLinkedInHover} 
              style={{ transition: '.3s ease'}}/></SocialIcon>
            </Social>
          </CopyWrapper>
        </Content>
      </Wrapper >
    );
  }
}

export default About;