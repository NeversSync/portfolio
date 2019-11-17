import styled from 'styled-components';
import { animated } from 'react-spring';
import { H2 } from './Utilities.style';
import { Card } from './Helpers';

// const fade = keyframes`
// 0% {
// fill:#61DAFB;
// }
// 50% {
//  fill:#999;
// }
// 100%{
//   fill:#61DAFB;
// }
// `;

// const pulse = keyframes`
// 0% {
//   transform: scale(0);
//   opacity: 1;
//   transform-origin: center;
// }
// 100% {
//   transform: scale(4.5);
//   opacity: 0;
//   transform-origin: center;
// }
// `;

// const TestimonialsWrapper = styled(animated.div)`
// display: grid;
// grid-template-columns: 1fr;
// justify-content: center;
// justify-items: center;
// /* grid-gap: 1em; */
// background-color: black;
// color: hsla(187, 5%, 33%, 1);
// align-items: center;
// padding: 10vh 0;
// /* margin: 2% 0%; */
// /* grid-template-rows: 350px 350px; */

// @media(min-width: 960px) {
// /* grid-template-rows: 50vh; */
//   grid-template-columns: 1fr 1fr;
//   /* margin: .5% 0px 0px 0px; */
// }
// `;

const TestimonialsWrapper = styled(animated.div)`
  display: grid;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.05);
  color: hsla(187, 5%, 33%, 1);
  align-items: center;
  padding: 10vh 0;
  /* justify-items: center; */
  /* margin: 2% 0%; */
  /* grid-template-rows: 350px 350px; */

  @media (min-width: 960px) {
    /* grid-template-rows: 50vh; */
    /* grid-template-columns: 1fr 1fr; */
    /* margin: .5% 0px 0px 0px; */
  }
`;

const TestimonialsTitle = styled(H2)`
  justify-self: center;
`;

const TestimonialsCard = styled(animated.div)`
  display: grid;
  width: 45ch;
  padding: 1em;
  background: white;
  align-content: center;
  border-radius: 5px;
  margin: 1em;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;
  border: 15px solid white;

  :hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
  }
`;

/* const TestimonialsCard = styled(Card)`
  display: grid;
  background-color: white;
  grid-column: 1 / -1;
  justify-content: center;
  align-self: center;
  min-height: 20vh;
  margin: .5em 0;
  /* padding: 2em 5px 0px 5px; */
/* width: 85%; */
/* grid-row: 3 / 4; */
/* height: 550px; */

// @media (min-width: 1200px) {
//   padding: 2em;
//   width: 50vw;
/* grid-column: 2 / 6;
    grid-row: 3 / 4; */
/* padding: 2em 5px; */
/* height: 330px; */
/* width: 80%; */
//  }
// `;

export { TestimonialsWrapper, TestimonialsCard, TestimonialsTitle };
