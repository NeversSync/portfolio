import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { Waypoint } from 'react-waypoint';
import {
  TestimonialsWrapper,
  TestimonialsTitle,
  TestimonialsCard
} from './styles/Testimonials.style';

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Testimonials = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));

  const [onWrapper, toggleWrapper] = useState(false);
  const [onCard, toggleCard] = useState(false);
  const [onCardTwo, toggleCardTwo] = useState(false);

  const fadeUp = useSpring({
    // backgroundColor: onWrapper ? 'black' : 'white',
    opacity: onWrapper ? 1 : 0,
    transform: onWrapper ? 'translate3d(0, 0, 0)' : 'translate3d(0, 50%, 0)',
    config: config.slow
  });

  const slideInOne = useSpring({
    opacity: onCard ? 1 : 0,
    transform: onCard ? 'translate3d(0, 0, 0)' : 'translate3d(0, 50%, 0)',
    config: config.molasses
  });

  const slideInTwo = useSpring({
    opacity: onCardTwo ? 1 : 0,
    transform: onCardTwo ? 'translate3d(0, 0, 0)' : 'translate3d(0, 50%, 0)',
    config: config.molasses
  });

  return (
    <>
      <Waypoint
        scrollableAncestor={window}
        bottomOffset='20%'
        onEnter={() => {
          if (!onWrapper) toggleWrapper(true);
        }}
      />
      <TestimonialsWrapper style={fadeUp}>
        <Waypoint
          scrollableAncestor={window}
          bottomOffset='35%'
          onEnter={() => {
            if (!onCard) toggleCard(true);
          }}
        />
        <TestimonialsCard
          style={slideInOne}
          // onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          // onMouseLeave={() => set({ xys: [0, 0, 1] })}
          // style={{ transform: props.xys.interpolate(trans) }}
        >
          <p>
            {' '}
            I have turned to Nicky twice in the past for professional web
            design, the first time to design my website and recently to revise
            it and make it even more relevant and appealing. Both times Nicky’s
            technical expertise and creative eye resulted in a website that best
            represents my work and personality and is user-friendly. Independent
            comments from my clients also expressed their appreciation. Nicky’s
            professional and kind manner made this a wonderful collaboration.
            His work came in on time and on budget and I can not recommend him
            enough. -Pascale Vermont
          </p>
        </TestimonialsCard>

        <Waypoint
          scrollableAncestor={window}
          bottomOffset='35%'
          onEnter={() => {
            if (!onCardTwo) toggleCardTwo(true);
          }}
        />
        <TestimonialsCard
          style={slideInTwo}
          // onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          // onMouseLeave={() => set({ xys: [0, 0, 1] })}
          // style={{ transform: props.xys.interpolate(trans) }}
        >
          {/* <TestimonialsTitle>"</TestimonialsTitle> */}
          <p>
            Nicky Evers brought my website from the 20th century to the 21st
            century! I have had many positive comments about its look and
            functionality. My topic was new to him but he learned what I needed
            to convey and took over! Many thanks to him. -Susan Langmore
          </p>
        </TestimonialsCard>
      </TestimonialsWrapper>
    </>
  );
};

export default Testimonials;
