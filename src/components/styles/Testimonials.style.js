import styled, { keyframes } from 'styled-components';
import {H2} from './Utilities.style';

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

const TestimonialsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 350px 350px;
  justify-content: center;
  justify-items: center;
  grid-gap: 1em;
  margin: 2% 0%;
  color: hsla(187, 5%, 33%, 1);
  align-items: center;

  /* .cloud-svg {
    animation: ${fade} infinite 20s linear;
    color: red;
    fill: red;
  }

  .cloud-path {
animation: ${pulse} infinite 20s linear;
    color: red;
    fill: red;
  } */


  @media(min-width: 960px) {
    grid-template-columns: 1fr 1fr;
    margin: .5% 0px 0px 0px;
  }
`;

const TestimonialsTitle = styled(H2)`

`;

export { TestimonialsWrapper, TestimonialsTitle };
