import React from 'react';
import resumeLink from '../assets/Nicky-Evers-Tech-Resume.pdf';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: turquoise;
  text-align: center;
`;

function Footer() {
  return (
    <Wrapper>
      <button href={resumeLink}>Resume</button>
      <p>&copy; Nicky Evers 2017</p>
    </Wrapper>
  );
}

export default Footer;