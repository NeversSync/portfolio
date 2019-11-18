import styled from 'styled-components';

const H2 = styled.h2`
font-size: 1.3em;
font-weight: 700;
color: hsla(187,5%,33%,1);

@media(min-width:768px) {
  font-size: 1.5em;
}
`;

const H3 = styled.h3`
  font-size: 1.2em;
  font-weight: 300;
  color: hsla(187,5%,33%,1);

  @media(min-width:768px) {
    font-size: 1.05em;
  }
`;

const P = styled.p`
  font-size: 1.1em;
  font-weight: 400;
  color: hsla(187,5%,33%,1);
  line-height: 28px;

  @media(min-width:768px) {
    font-size: .9em;
  }
`;

export { P, H2, H3 };
