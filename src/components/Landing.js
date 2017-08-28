import React from 'react';
import styled from 'styled-components';
import About from './About';
import ArrowIcon from 'react-material-icons/icons/hardware/keyboard-arrow-down';
import { Wrapper, Background, Header, SubTitle, Title } from './styles/Landing.style';

function Landing() {
  return (
    <Wrapper>
      <Background>
        <Header>
          <SubTitle>Web Developer</SubTitle>
          <Title>Nicky Evers</Title>
        </Header>
        <a href='' style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <ArrowIcon style={{ 
            color: 'white',
            width: 100, 
            height: 100
          }}/>
        </a>
      </Background>
    </Wrapper>
  );
}

export default Landing;
