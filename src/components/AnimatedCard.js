import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import styled from 'styled-components';
import { Header, SubTitle, Title } from './styles/Landing.style';

const AnimatedCardContainer = styled(animated.div)`
  display: grid;
  height: 87vh;
  justify-content: center;
  /* background-color: rgba(0, 0, 0, 0.05); */
  /* color: hsla(187, 5%, 33%, 1); */
  align-items: center;
  /* padding: 10vh 0; */

  @media (min-width: 960px) {
    /* grid-template-rows: 50vh; */
    /* grid-template-columns: 1fr 1fr; */
  }
`;

const AnimatedCardWrapper = styled(animated.div)`
  display: grid;
  padding: 2em;
  align-content: center;
  border-radius: 5px;
  margin: 1em;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;
  border: 25px solid rgba(0, 0, 0, 0.1);

  :hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
  }
`;

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1
];

const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function AnimatedCard() {
  const [onWrapper, toggleWrapper] = useState(false);

  const fadeUp = useSpring({
    backgroundColor: onWrapper ? 'black' : 'white',
    opacity: onWrapper ? 1 : 0,
    transform: onWrapper ? 'translate3d(0, 0, 0)' : 'translate3d(0, 50%, 0)',
    config: config.slow
  });
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));

  return (
    <AnimatedCardContainer
      style={fadeUp}
      onEnter={() => {
        if (!onWrapper) toggleWrapper(true);
      }}
    >
      <AnimatedCardWrapper
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <Header>
          <SubTitle>Web Developer | Designer</SubTitle>
          <Title>Nicky Evers</Title>
        </Header>
      </AnimatedCardWrapper>
    </AnimatedCardContainer>
  );
}

export default AnimatedCard;

// TODO: fix fade in animation
