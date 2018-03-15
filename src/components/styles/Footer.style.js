import styled from 'styled-components';

const Wrapper = styled.div`
font-family: 'Raleway', sans-serif;
background-color: hsla(0, 0%, 55%, 0.6); 
color: white;
min-height: 250px;
padding-top: 2%;
display: flex;
justify-content: space-evenly;
flex-direction: column;
`;

const CallToAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 175px;
  min-height: 60px;
  margin-top: 20px;

  @media(min-width: 768px) {
    flex-direction: row;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  
  @media(min-width: 768px) {
    flex-direction: row;
    margin-top: 0;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center; 
  font-family: 'Raleway', sans-serif;
  width: 200px;
  height: 57px;
  font-size: 1em; 
  padding: 6px 0px;
  margin-bottom: 15px;
  background: linear-gradient(hsla(187, 65%, 55%, 1), hsla(187, 65%, 40%, 1));
  border: none;
  border-bottom: 3px solid hsla(187, 65%, 30%, .7);
  box-shadow: 0px 2px 3px -1px rgba(0, 0, 0, 0.3);
  transition: .3s ease;
  letter-spacing: 1.8px;
  cursor: pointer;

  @media(min-width: 768px) {
    margin: 0 10px;
    font-size: .9em;

    &:hover {
      background: linear-gradient(hsla(187, 65%, 58%, 1), hsla(187, 65%, 40%, 1));
      box-shadow: 0 4px 4px rgba(0,0,0,.25);
    }
  }

  &:active {
    background: linear-gradient(hsla(187, 65%, 45%, 1), hsla(187, 65%, 35%, 1));
    -webkit-transform: translate(0px, 2px);
    transform: translate(0px, 2px);
    border-bottom: none;
    box-shadow: none;
  }
`;

const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const Copy = styled.p`
  margin: 0 30px;
  text-align: center;
  font-size: 1.5em;
  font-style: italic;
  font-weight: 400;
  letter-spacing: .7px;

  @media(min-width:768px) {
    font-size: 1.2em;
  }
`;

const Copyright = Copy.extend`
  text-align: center;
  font-size: .8em;
  margin: 50px 0 0 0;
  
  @media(min-width:768px) {
    margin: 70px 0 0 0;
    font-size: .9em;
  }
`;

export { Wrapper, Copy, Copyright, ButtonWrapper, Button, LabelWrapper, CallToAction };
