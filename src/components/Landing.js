import React, { Component } from 'react';
import ArrowIcon from 'react-material-icons/icons/hardware/keyboard-arrow-down';
import { Wrapper, Background, ArrowWrapper } from './styles/Landing.style';
import AnimatedHeaderCard from './AnimatedHeaderCard';

const windowGlobal = typeof window !== 'undefined' && window;
class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'hsla(187, 55%, 50%, 1)',
      size: '100px',
      width: props.windowSize,
      isMobile: true,
      isMounted: false,
    };

    this.hoverToggle = this.hoverToggle.bind(this);
    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
  }

  componentWillMount() {
    if (this.state.width >= 768) this.setState({ isMobile: false });
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
    this.setState({ isMounted: true });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: `${windowGlobal.innerWidth  }px` });
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
      <Wrapper>
        <Background>
          <AnimatedHeaderCard isMounted={this.state.isMounted} />
          <ArrowWrapper className="about-arrow" href="#about">
            <ArrowIcon
              onMouseEnter={this.hoverToggle}
              onMouseLeave={this.hoverToggle}
              style={{
                color: this.state.color,
                width: this.state.size,
                height: this.state.size,
              }}
            />
          </ArrowWrapper>
        </Background>
      </Wrapper>
    );
  }
}

export default Landing;
