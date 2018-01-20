import styled from 'styled-components';

const Wrapper = styled.div`
font-family: 'Raleway', sans-serif;
background-color: hsla(0, 0%, 55%, 0.6); 
color: white;
min-height: 250px;
display: flex;
justify-content: center;
flex-direction: column;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 175px;
  min-height: 60px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsla(187, 65%, 45%, 1);
  font-family: 'Raleway', sans-serif;
  width: 169px;
  height: 53px;
  font-size: 1.4em;

  border: none;
  transition: .3s ease;
  cursor: pointer;

  @media(min-width: 768px) {
    font-size: 1.2em;

    &:hover {
      width: 175px;
      height: 60px;
      background-color: hsla(187, 100%, 30%, 1);
      box-shadow: 0 4px 4px rgba(0,0,0,.25);
  }
`;

const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between:
  align-items: center;
  color: white;
`;

const Copy = styled.p`
  margin: 0 15%;
  text-align: center;
  font-size: 1.5em;
  font-style: italic;
  font-weight: 400;
  letter-spacing: .7px;
  margin-bottom: 16px;

  @media(min-width:768px) {
    font-size: 1.2em;
  }
`;

const Copyright = Copy.extend`
  text-align: center;
  font-size: .8em;
  margin: 60px 0 0 0;
`;

export { Wrapper, Copy, Copyright, ButtonWrapper, Button, LabelWrapper};
