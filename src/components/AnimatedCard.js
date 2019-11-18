import React from 'react';
import { useSpring, animated, config, useTransition } from 'react-spring';
import styled from 'styled-components';
import { Header, SubTitle, Title } from './styles/Landing.style';

const AnimatedCardContainer = styled(animated.div)`
  display: grid;
  height: 87vh;
  justify-content: center;
  align-items: center;

  @media (min-width: 960px) {
    /* grid-template-rows: 50vh; */
    /* grid-template-columns: 1fr 1fr; */
  }
`;

const AnimatedCardWrapper = styled(animated.div)`
  display: grid;
  padding: 1em;
  align-content: center;
  border-radius: 10px;
  margin: 1em;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.5s;
  will-change: transform;
  border: 20px solid rgba(0, 0, 0, 0.15);

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

function AnimatedCard({ isMounted }) {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));

  const transitionOne = useTransition(isMounted, null, {
    from: { opacity: 0, transform: 'translate3d(0,-100%,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
    config: config.molasses
  });

  const transitionTwo = useTransition(isMounted, null, {
    from: { opacity: 0, transform: 'translate3d(0,100%,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
    config: config.molasses
  });

  return (
    <AnimatedCardContainer>
      <AnimatedCardWrapper
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <Header>
          {transitionOne.map(
            ({ item, key, props }) =>
              item && (
                <SubTitle key={key} style={props}>
                  Web Developer | Designer
                </SubTitle>
              )
          )}
          {transitionTwo.map(
            ({ item, key, props }) =>
              item && (
                <Title key={key} style={props}>
                  Nicky Evers
                </Title>
              )
          )}
        </Header>
      </AnimatedCardWrapper>
    </AnimatedCardContainer>
  );
}

export default AnimatedCard;
