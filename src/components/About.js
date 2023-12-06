import React, { Component } from 'react';
import * as ScrollMagic from 'scrollmagic';
import { FaLinkedin, FaGithubSquare, FaEnvelope } from 'react-icons/fa';
import AboutImage from './AboutImage';
import {
  Wrapper,
  Content,
  HeaderWrapper,
  Header,
  SubHeader,
  CopyWrapper,
  SubCopy,
  Social,
  SocialIcon,
} from './styles/About.style';

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 'hsla(0, 0%, 37%, 1)',
      emailSize: 50,
      github: 'hsla(0, 0%, 37%, 1)',
      githubSize: 50,
      linkedIn: 'hsla(0, 0%, 37%, 1)',
      linkedInSize: 50,
    };

    this.toggleEmailHover = this.toggleEmailHover.bind(this);
    this.toggleGithubHover = this.toggleGithubHover.bind(this);
    this.toggleLinkedInHover = this.toggleLinkedInHover.bind(this);
  }

  componentDidMount() {
    // Header and Content scroll animations
    const controller = new ScrollMagic.Controller();
    const animatedComponents = [this.Header, this.Content];
    animatedComponents.forEach(comp => {
      new ScrollMagic.Scene({
        triggerElement: comp,
        triggerHook: 0.9,
        reverse: false,
      })
        .setClassToggle(comp, 'fade-title-in')
        .addTo(controller);
    });
  }

  toggleEmailHover() {
    this.state.email === 'hsla(0, 0%, 37%, 1)'
      ? this.setState({ email: 'hsla(187, 55%, 50%, 1)' })
      : this.setState({ email: 'hsla(0, 0%, 37%, 1)' });
    this.state.emailSize === 50
      ? this.setState({ emailSize: 45 })
      : this.setState({ emailSize: 50 });
  }

  toggleGithubHover() {
    this.state.github === 'hsla(0, 0%, 37%, 1)'
      ? this.setState({ github: 'hsla(187, 55%, 50%, 1)' })
      : this.setState({ github: 'hsla(0, 0%, 37%, 1)' });
    this.state.githubSize === 50
      ? this.setState({ githubSize: 45 })
      : this.setState({ githubSize: 50 });
  }

  toggleLinkedInHover() {
    this.state.linkedIn === 'hsla(0, 0%, 37%, 1)'
      ? this.setState({ linkedIn: 'hsla(187, 55%, 50%, 1)' })
      : this.setState({ linkedIn: 'hsla(0, 0%, 37%, 1)' });
    this.state.linkedInSize === 50
      ? this.setState({ linkedInSize: 45 })
      : this.setState({ linkedInSize: 50 });
  }

  render() {
    return (
      <Wrapper id="about">
        <HeaderWrapper
          ref={comp => {
            this.Header = comp;
          }}
          className="header-title"
        >
          <Header>Hi, I'm Nico</Header>
          <SubHeader>
            I'm a design driven Frontend Software Engineer and I'm here to help
          </SubHeader>
        </HeaderWrapper>
        <Content
          ref={comp => {
            this.Content = comp;
          }}
          className="content-comp"
        >
          <AboutImage />
          <CopyWrapper>
            <SubCopy>
              My passion for learning combined with my love for elegance is a
              tremendous driving force in everything I do, from designing the
              perfect landing page, to writing code, to juggling or sourcing tea
              from Taiwan.
            </SubCopy>
            <SubCopy>
              I care about creating clean, effective websites and designs for
              people and businesses. I love the feeling of helping clients
              transform their ideas into a home on the web that is easy to use
              and inspiring. I'm currently open to freelance projects and also completing my masters degree in Counseling while based in beautiful
              Portland, Oregon.
            </SubCopy>
            <Social>
              <SocialIcon
                href="mailto:nicoeversdesign@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope
                  color={this.state.email}
                  size={this.state.emailSize}
                  onMouseEnter={this.toggleEmailHover}
                  onMouseLeave={this.toggleEmailHover}
                  style={{ transition: '.3s ease' }}
                />
              </SocialIcon>
              <SocialIcon
                href="https://github.com/NeversSync"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithubSquare
                  color={this.state.github}
                  size={this.state.githubSize}
                  onMouseEnter={this.toggleGithubHover}
                  onMouseLeave={this.toggleGithubHover}
                  style={{ transition: '.3s ease' }}
                />
              </SocialIcon>
              <SocialIcon
                href="https://www.linkedin.com/in/nicky-evers/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  color={this.state.linkedIn}
                  size={this.state.linkedInSize}
                  onMouseEnter={this.toggleLinkedInHover}
                  onMouseLeave={this.toggleLinkedInHover}
                  style={{ transition: '.3s ease' }}
                />
              </SocialIcon>
            </Social>
          </CopyWrapper>
        </Content>
      </Wrapper>
    );
  }
}

export default About;
