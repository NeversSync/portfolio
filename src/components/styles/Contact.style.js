import styled from 'styled-components';

const Wrapper = styled.div`
font-family: 'Raleway', sans-serif;
background-color: hsla(0, 0%, 55%, 0.6); 
color: white;
min-height: 250px;
display: flex;
justify-content: center;
// align-items: space-evenly;
flex-direction: column;
`;

const ButtonWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;

@media(min-width: 768px) {
  flex-direction: row;
}
`;

const Copy = styled.p`
text-align: center;
font-size: 1em;
font-style: italic;
font-weight: 400;
letter-spacing: .7px;
margin-bottom: 10px;
`;

const Copyright = Copy.extend`
  text-align: center;
  font-size: .8em;
  margin: 15px 0 0 0;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const SocialIcon = styled.a`
  margin: 4px;
`;

export { Wrapper, Copy, Copyright, SocialIcon, ButtonWrapper, IconWrapper };
