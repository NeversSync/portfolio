import { animated } from 'react-spring';
import styled from 'styled-components';
import { H2, P } from './Utilities.style';

const TestimonialsWrapper = styled(animated.div)`
  display: grid;
  grid-template-columns: 1fr auto auto 1fr;
  grid-template-rows: 5vh auto auto auto auto 5vh;
  justify-content: center;
  justify-items: center;
  color: hsla(187, 5%, 33%, 1);
  align-items: center;
  padding: 0 4vw 7vh 4vw;
  padding-bottom: 7vh;

  @media (min-width: 768px) {
    padding: 3vh;
  }

  @media (min-width: 900px) {
    padding-top: 0;
    grid-template-rows: 10vh auto auto 10vh;
  }
`;

const TestimonialsTitle = styled(H2)`
  justify-self: center;
`;

const TestimonialsCopy = styled(P)`
  font-style: italic;
  font-size: .9em;

  @media (min-width: 768px) {
    font-size: 1em;
  }
`;

const TestimonialsLink = styled.a`
  display: grid;
  width: fit-content;
  margin: 0 auto;
  color: hsla(187, 55%, 50%, 1);
  transition: 300ms all;

  :hover {
    color: hsla(187, 70%, 35%, 1);
    transform: scale(1.1);
  }
`;

const TestimonialsCard = styled(animated.div)`
  display: grid;
  grid-column: 1 / -1;
  grid-row: 2 / 3;
  width: 70vw;
  padding: 1em;
  background: rgba(255,255,255,.85);
  align-content: center;
  border-radius: 5px;
  margin:1em;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;
  z-index: 5;

  :hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
  }

  @media (min-width: 768px) {
    margin: 12vh 1em 1em 1em;
    padding: 1.5em;
    width: 33vw;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }

  @media (min-width: 900px) {
    margin: 12vh 1em 1em 1em;
    padding: 2em;
    width: 35vw;
  }

  @media (min-width: 1200px) {
    margin: 15vh 1em 1em 1em;
  }

  @media (min-width: 1400px) {
    margin: 20vh 1em 1em 1em;
  }

`;

const TestimonialsCardTwo = styled(TestimonialsCard)`
grid-column: 1 / -1;
grid-row: 3 / 4;

@media (min-width: 768px) {
  grid-column: 3 / 4;
  }
`;


const TestimonialsCardThree = styled(TestimonialsCard)`
  grid-column: 1 / -1;
  grid-row: 4 / 5;
  /* margin: 0px; */

@media (min-width: 768px) {
  margin: 1em ;
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  }
`;

const TestimonialsCardFour = styled(TestimonialsCard)`
  grid-column: 1 / -1;
  grid-row: 5 / 6;
  /* margin: 0px; */

@media (min-width: 768px) {
  margin: 1em ;
  grid-column: 3 / 4;
  grid-row: 3 / 4;
  }
`;



export { TestimonialsWrapper, TestimonialsCard, TestimonialsCardTwo, TestimonialsCardThree, TestimonialsCardFour, TestimonialsTitle, TestimonialsCopy, TestimonialsLink };
