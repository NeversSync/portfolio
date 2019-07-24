import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import * as ScrollMagic from 'scrollmagic';
import ArrowIcon from 'react-material-icons/icons/hardware/keyboard-arrow-down';
import {
  Wrapper,
  Background,
  Header,
  SubTitle,
  Title,
  ArrowWrapper
} from './styles/Landing.style';

const windowGlobal = typeof window !== 'undefined' && window;
class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'hsla(187, 55%, 50%, 1)',
      size: '100px',
      width: props.windowSize,
      isMobile: true
    };

    this.hoverToggle = this.hoverToggle.bind(this);
    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
  }

  componentWillMount() {
    if (this.state.width >= 768) this.setState({ isMobile: false });
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
      triggerElement: this.Wrapper,
      triggerHook: 0
      // duration: this.state.width <= 768 ? '0%' : '0%'
    })
      .setPin(this.Background, { pushFollowers: false })
      .addTo(controller);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: windowGlobal.innerWidth + 'px' });
    if (this.state.width >= 768) this.setState({ isMobile: false });
  };

  hoverToggle = () => {
    this.state.color === 'hsla(187, 55%, 50%, 1)'
      ? this.setState({ color: 'hsla(187, 70%, 35%, 1)' })
      : this.setState({ color: 'hsla(187, 55%, 50%, 1)' });
    this.state.size === '100px'
      ? this.setState({ size: '110px' })
      : this.setState({ size: '100px' });
  };

  render() {
    return (
      <Wrapper
        ref={comp => {
          this.Wrapper = comp;
        }}
      >
        <ReactCSSTransitionGroup
          transitionName='fadein'
          transitionAppear={true}
          transitionAppearTimeout={1200}
          transitionEnter={false}
          transitionLeave={false}
        >
          <Background
            className='background'
            ref={comp => {
              this.Background = comp;
            }}
            key={'background'}
          >
            <Header>
              <ReactCSSTransitionGroup
                transitionName='fadedown-in'
                transitionAppear={true}
                transitionAppearTimeout={1500}
                transitionEnter={false}
                transitionLeave={false}
              >
                <SubTitle key={'subtitle'}>Web Developer | Designer</SubTitle>
              </ReactCSSTransitionGroup>
              <ReactCSSTransitionGroup
                transitionName='fadeup-in'
                transitionAppear={true}
                transitionAppearTimeout={1500}
                transitionEnter={false}
                transitionLeave={false}
              >
                <Title key={'title'}>Nicky Evers</Title>
              </ReactCSSTransitionGroup>
            </Header>
            <ArrowWrapper className='about-arrow' href='#about'>
              <ArrowIcon
                onMouseEnter={this.hoverToggle}
                onMouseLeave={this.hoverToggle}
                style={{
                  color: this.state.color,
                  width: this.state.size,
                  height: this.state.size
                }}
              />
            </ArrowWrapper>
          </Background>
        </ReactCSSTransitionGroup>
      </Wrapper>
    );
  }
}

export default Landing;
