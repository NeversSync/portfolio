import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';
import ArrowIcon from 'react-material-icons/icons/hardware/keyboard-arrow-down';
import { Wrapper, Background, Header, SubTitle, Title } from './styles/Landing.style';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'white',
      size: '100'
    };

    this.hoverToggle = this.hoverToggle.bind(this);
  }

  hoverToggle() {
    this.state.color === 'white' ? this.setState({ color: 'hsla(187, 55%, 50%, 1)' }) : this.setState({ color: 'white' });
    this.state.size === '100' ? this.setState({ size: '105'}) : this.setState({ size: '100'});
  }

  render() {
    return (
      <Wrapper>
        <Background>
          <Header>
            <SubTitle>Web Developer</SubTitle>
            <Title>Nicky Evers</Title>
          </Header>
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
        </Background>
      </Wrapper>
    );
  }
}

export default Landing;
