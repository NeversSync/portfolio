import styled from 'styled-components';

const Wrapper = styled.div`
font-family: 'Raleway', sans-serif;
background-color: hsla(0, 0%, 55%, 0.6); 
color: white;
min-height: 250px;
padding-top: 2%;
display: flex;
justify-content: space-around;
flex-direction: column;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 175px;
  min-height: 60px;
  max-height: 53px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center; 
  font-family: 'Raleway', sans-serif;
  width: 169px;
  height: 53px;
  font-size: 1.4em; 
  padding: 6px 13px;
  margin-top: .7rem;
  background: linear-gradient(hsla(187, 65%, 55%, 1), hsla(187, 65%, 40%, 1));
  color: #fff;
  border: none;
  border-bottom: 3px solid hsla(187, 65%, 30%, .7);
  box-shadow: 0px 2px 3px -1px rgba(0, 0, 0, 0.3);
  transition: .3s ease;
  cursor: pointer;

  @media(min-width: 768px) {
    font-size: 1.2em;
    margin-top: .7rem;

    &:hover {
      width: 172px;
      height: 58px;
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


  @media(min-width:768px) {
    font-size: .9em;
  }
`;

export { Wrapper, Copy, Copyright, ButtonWrapper, Button, LabelWrapper };
