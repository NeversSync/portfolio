import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import * as Scrollmagic from 'scrollmagic';
import ArrowIcon from 'react-material-icons/icons/hardware/keyboard-arrow-down';
import { Wrapper, Background, Header, SubTitle, Title, ArrowWrapper } from './styles/Landing.style';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'hsla(187, 55%, 50%, 1)',
      size: '100px'
    };

    this.hoverToggle = this.hoverToggle.bind(this);
  }

  hoverToggle() {
    this.state.color === 'hsla(187, 55%, 50%, 1)' ? this.setState({ color: 'hsla(187, 70%, 35%, 1)' }) : this.setState({ color: 'hsla(187, 55%, 50%, 1)' });
    this.state.size === '100px' ? this.setState({ size: '110px' }) : this.setState({ size: '100px' });
  }
  
  
  render() {
    
    // const controller = new Scrollmagic.Controller();
    // const pinIntroScene = new Scrollmagic.Scene({
    //   triggerElement: '.background',
    //   triggerHook: 0
    // })
    // .setPin('.background')
    // .addIndicators()
    // .addTo(controller);
    
    return (
      <Wrapper>
        <ReactCSSTransitionGroup
          transitionName='fadein'
          transitionAppear={true}
          transitionAppearTimeout={1200}
          transitionEnter={false}
          transitionLeave={false}>
          <Background className="background" key={'background'}>

        <Header>
          <ReactCSSTransitionGroup
            transitionName='fadedown-in'
            transitionAppear={true}
            transitionAppearTimeout={1500}
            transitionEnter={false}
            transitionLeave={false}>
              <SubTitle key={'subtitle'}>Web Developer</SubTitle>
          </ReactCSSTransitionGroup>
          <ReactCSSTransitionGroup
            transitionName='fadeup-in'
            transitionAppear={true}
            transitionAppearTimeout={1500}
            transitionEnter={false}
            transitionLeave={false}>
            <Title key={'title'}>Nicky Evers</Title>
          </ReactCSSTransitionGroup>
        </Header>
        <ArrowWrapper>
          <Scrollchor to="#about" animate={{ duration: 900 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}>
            <ArrowIcon
              onMouseEnter={this.hoverToggle} onMouseLeave={this.hoverToggle}
              style={{
                color: this.state.color,
                width: this.state.size,
                height: this.state.size
              }} />
          </Scrollchor>
        </ArrowWrapper>
        </Background>
        </ReactCSSTransitionGroup>
      </Wrapper>
    );
  }
}

export default Landing;
