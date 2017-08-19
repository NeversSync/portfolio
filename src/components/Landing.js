import React from 'react';
import styled from 'styled-components';
import ArrowIcon from 'react-material-icons/icons/hardware/keyboard-arrow-down';
import backgroundImg from '../assets/img/tetsu2.png';

const Wrapper = styled.div`
  color: white;
`;

const Background = styled.div`
  background: url(${backgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

const Header = styled.div`
  height: 87vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Raleway', sans-serif;
  text-shadow: 3px 3px 3px 1px black;
  font-size: 6.5vw;
`;

const Title = styled.h1`
  margin: 30px;
  font-weight: 400;
`;

const SubTitle = styled.h2`
  font-size: 22px;
  font-weight: 300;
`;

function Landing() {
  return (
    <Wrapper>
      <Background>
        <Header>
          <SubTitle>Web Development</SubTitle>
          <Title>NICKY EVERS</Title>
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
