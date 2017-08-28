import React from 'react';
import Scrollchor from 'react-scrollchor';
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
        <Scrollchor to="#about" animate={{duration: 900}} 
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}>
          <ArrowIcon style={{ 
            color: 'white',
            width: 100, 
            height: 100
          }}/>
        </Scrollchor>
      </Background>
    </Wrapper>
  );
}

export default Landing;
