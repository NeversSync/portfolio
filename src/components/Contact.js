import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  font-family: 'Raleway', sans-serif;
  background-color: grey;
  color: white;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items; center;
`;

const Copy = styled.p`
  font-size: .8em;
  letter-spacing: .2px;
  line-height: 1.7;
`;

function Contact() {
  return (
    <Wrapper>
      <Copy>Hiring? Need help on a project? Lets talk.</Copy> <br/>
      <button><a href=''>Email me</a></button>
    </Wrapper>
  );
}

export default Contact;