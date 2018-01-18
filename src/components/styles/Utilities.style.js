import styled from 'styled-components';

const H2 = styled.h2`
font-size: 1.2em;
font-weight: 700;

@media(min-width:768px) {
  font-size: 1.15em;
}
`;

const H3 = styled.h3`
  font-size: 1.1em;
  font-weight: 300;

  @media(min-width:768px) {
    font-size: 1.05em;
  }
`;

const P = styled.p`
  font-size: .9em;
  font-weight: 400;

  @media(min-width:768px) {
    font-size: .85em;
  }
`;

export { P, H2, H3 };