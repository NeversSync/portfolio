import styled from 'styled-components';
import { animated } from 'react-spring';
import { H2, P } from './Utilities.style';



const TestimonialsWrapper = styled(animated.div)`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto auto auto;
  justify-content: center;
  justify-items: center;
  color: hsla(187, 5%, 33%, 1);
  align-items: center;
  padding-bottom: 7vh;

  @media (min-width: 768px) {
    padding: 0;
    grid-template-columns: 1fr auto auto 1fr;
  }
`;

const TestimonialsTitle = styled(H2)`
  justify-self: center;
`;

const TestimonialsCopy = styled(P)`
  font-style: italic;
  font-size: .8em;

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
  grid-row: 1 / 2;
  width: 70vw;
  padding: 1em;
  background: rgba(255,255,255,.85);
  align-content: center;
  border-radius: 5px;
  margin: 1em;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;

  :hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
  }

  @media (min-width: 768px) {
    padding: 2em;
    width: 45ch;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }

`;

const TestimonialsCardTwo = styled(TestimonialsCard)`
grid-column: 1 / -1;
grid-row: 3 / 4;

@media (min-width: 768px) {
  grid-column: 3 / 4;
  }
`;


export { TestimonialsWrapper, TestimonialsCard, TestimonialsCardTwo, TestimonialsTitle, TestimonialsCopy, TestimonialsLink };
