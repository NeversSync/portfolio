import React, { useState } from 'react';
import { useSpring, config } from 'react-spring';
import { Waypoint } from 'react-waypoint';
import {
  TestimonialsWrapper,
  TestimonialsTitle,
  TestimonialsCard
} from './styles/Testimonials.style';
import cloudSvg from '../assets/endless-clouds.svg';

const Testimonials = () => {
  const [onWrapper, toggleWrapper] = useState(false);
  const [onCard, toggleCard] = useState(false);
  const [onCardTwo, toggleCardTwo] = useState(false);

  const fadeUp = useSpring({
    backgroundColor: onWrapper ? 'black' : 'white',
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
        <TestimonialsCard style={slideInOne}>
          <TestimonialsTitle>"</TestimonialsTitle>
          <p>I have turned to Nicky twice in the past for professional web design, the first time to design my website and recently to revise it and make it even more relevant and appealing. Both times Nicky’s technical expertise and creative eye resulted in a website that best represents my work and personality and is user-friendly. Independent comments from my clients also expressed their appreciation. Nicky’s professional and kind manner made this a wonderful collaboration. His work came in on time and on budget and I can not recommend him enough.
            -Pascale Vermont
          </p>
        </TestimonialsCard>
        <Waypoint
          scrollableAncestor={window}
          bottomOffset='35%'
          onEnter={() => {
            if (!onCardTwo) toggleCardTwo(true);
          }}
        />
        <TestimonialsCard style={slideInTwo}>
          <TestimonialsTitle>"</TestimonialsTitle>
          <p>Nicky Evers brought my website from the 20th century to the 21st century! I have had many positive comments about its look and functionality.  My topic was new to him but he learned what I needed to convey and took over!  Many thanks to him.
          -Susan Langmore
          </p>
        </TestimonialsCard>
      </TestimonialsWrapper>
    </>
  );
};

export default Testimonials;
