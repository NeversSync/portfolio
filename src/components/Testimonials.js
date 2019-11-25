/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from 'react';
import { useSpring, config } from 'react-spring';
import { Waypoint } from 'react-waypoint';
import {
  TestimonialsWrapper,
  TestimonialsCopy,
  TestimonialsLink,
  TestimonialsCard,
  TestimonialsCardTwo
} from './styles/Testimonials.style';

const windowGlobal = typeof window !== 'undefined' && window;

const Testimonials = () => {
  const [on, toggle] = useState(false);

  const slideInOne = useSpring({
    opacity: on ? 1 : 0,
    transform: on ? 'translate3d(0, 0, 0)' : 'translate3d(-50%, 0, 0)',
    config: config.slow
  });

  const slideInTwo = useSpring({
    opacity: on ? 1 : 0,
    transform: on ? 'translate3d(0, 0, 0)' : 'translate3d(50%, 0, 0)',
    config: config.slow
  });

  return (
    <>
      <Waypoint
        scrollableAncestor={windowGlobal}
        bottomOffset='50%'
        onEnter={() => {
          toggle(true);
        }}
      />
      <TestimonialsWrapper>
        <div className='svg-container'>
          <svg
            className='svg'
            viewBox='0 0 200 200'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect />
            <g>
              <defs>
                <linearGradient
                  id='gradient'
                  x1='0%'
                  y1='0%'
                  x2='100%'
                  y2='100%'
                >
                  <stop id='stop1' offset='0%' />
                  <stop id='stop2' offset='33%' />
                  <stop id='stop3' offset='66%' />
                  <stop id='stop4' offset='100%' />
                </linearGradient>
              </defs>
              <path
                fill='url(#gradient)'
                className='svg-path'
                d='M0.69375 131.25V131.242L0.69351 131.235L0.5 124.992C0.504168 77.1137 39.1838 38.2705 87 38.0014V62.0019C70.3604 62.1304 54.7348 68.6706 42.9527 80.4527C40.6595 82.7459 38.5746 85.1836 36.6854 87.7404L35.9613 88.7203L37.165 88.5315C39.3714 88.1853 41.6393 88 43.9438 88C67.8301 88 87.1937 107.364 87.1937 131.25C87.1937 155.136 67.8301 174.5 43.9438 174.5C20.0574 174.5 0.69375 155.136 0.69375 131.25ZM113.194 131.25V131.242L113.194 131.235L113 124.992C113.004 77.1137 151.684 38.2705 199.5 38.0014V62.0019C182.86 62.1304 167.235 68.6706 155.453 80.4527C153.16 82.7459 151.075 85.1836 149.185 87.7404L148.462 88.7197L149.665 88.5315C151.878 88.1853 154.139 88 156.444 88C180.33 88 199.694 107.364 199.694 131.25C199.694 155.136 180.33 174.5 156.444 174.5C132.557 174.5 113.194 155.136 113.194 131.25Z'
              />
            </g>
          </svg>
        </div>
        <TestimonialsCard style={slideInOne}>
          <TestimonialsCopy>
            I have turned to Nicky twice in the past for professional web
            design, the first time to design my website and recently to revise
            it and make it even more relevant and appealing. Both times Nicky’s
            technical expertise and creative eye resulted in a website that best
            represents my work and personality and is user-friendly. Independent
            comments from my clients also expressed their appreciation. Nicky’s
            professional and kind manner made this a wonderful collaboration.
            His work came in on time and on budget and I can not recommend him
            enough.
            <br />
            <TestimonialsLink
              href='https://www.pascalevermont.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              - Pascale Vermont
            </TestimonialsLink>
          </TestimonialsCopy>
        </TestimonialsCard>
        <TestimonialsCardTwo style={slideInTwo}>
          <TestimonialsCopy>
            Nicky Evers brought my website from the 20th century to the 21st
            century! I have had many positive comments about its look and
            functionality. My topic was new to him but he learned what I needed
            to convey and took over! Many thanks to him.
            <br />
            <TestimonialsLink
              href='https://www.langmorefees.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              - Susan Langmore
            </TestimonialsLink>
          </TestimonialsCopy>
        </TestimonialsCardTwo>
        <div className='svg-container svg-container-two'>
          <svg
            className='svg'
            viewBox='0 0 200 200'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect />
            <g>
              <defs>
                <linearGradient
                  id='gradient'
                  x1='0%'
                  y1='0%'
                  x2='100%'
                  y2='100%'
                >
                  <stop id='stop1' offset='0%' />
                  <stop id='stop2' offset='33%' />
                  <stop id='stop3' offset='66%' />
                  <stop id='stop4' offset='100%' />
                </linearGradient>
              </defs>
              <path
                fill='url(#gradient)'
                className='svg-path'
                d='M0.69375 131.25V131.242L0.69351 131.235L0.5 124.992C0.504168 77.1137 39.1838 38.2705 87 38.0014V62.0019C70.3604 62.1304 54.7348 68.6706 42.9527 80.4527C40.6595 82.7459 38.5746 85.1836 36.6854 87.7404L35.9613 88.7203L37.165 88.5315C39.3714 88.1853 41.6393 88 43.9438 88C67.8301 88 87.1937 107.364 87.1937 131.25C87.1937 155.136 67.8301 174.5 43.9438 174.5C20.0574 174.5 0.69375 155.136 0.69375 131.25ZM113.194 131.25V131.242L113.194 131.235L113 124.992C113.004 77.1137 151.684 38.2705 199.5 38.0014V62.0019C182.86 62.1304 167.235 68.6706 155.453 80.4527C153.16 82.7459 151.075 85.1836 149.185 87.7404L148.462 88.7197L149.665 88.5315C151.878 88.1853 154.139 88 156.444 88C180.33 88 199.694 107.364 199.694 131.25C199.694 155.136 180.33 174.5 156.444 174.5C132.557 174.5 113.194 155.136 113.194 131.25Z'
              />
            </g>
          </svg>
        </div>
      </TestimonialsWrapper>
    </>
  );
};

export default Testimonials;
