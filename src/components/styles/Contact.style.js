import styled from 'styled-components';

const Wrapper = styled.div`
width: 100%;
font-family: 'Raleway', sans-serif;
background-color: hsla(0, 0%, 55%, 0.6); 
color: white;
height: 200px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const Copy = styled.p`
font-size: 1em;
font-style: italic;
font-weight: 400;
letter-spacing: .7px;
margin-bottom: 10px;
`;

const Copyright = Copy.extend`
  text-align: center;
  font-size: .7em;
  margin: 15px 0 0 0;
`;

const SocialIcon = styled.a`
  margin: 4px;
    &:hover {
      color: orange;
    }
`;

export { Wrapper, Copy, Copyright, SocialIcon };

// fix centering when wrapper for footer text