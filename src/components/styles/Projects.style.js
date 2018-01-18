import styled from 'styled-components';
import { P, H3 } from './Utilities.style';

const Wrapper = styled.div`
  font-family: 'Raleway', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10% 4%;

  @media(min-width: 960px) {
    flex-direction: row;
    justify-content: space-evenly;
    min-height: 450px;
    margin: 2% 0;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 140px;
  font-size: 2.2em;
  color: white;
  background-color: hsla(187, 65%, 40%, .75);

  @media(min-width:768px) {
    font-size; 2em;
  }
`;

const Project = styled.div`
  padding: 15px;
  padding-top: 5px;
  max-width: 400px;
  transition: all 0.5s cubic-bezier(.25,.8,.25,1);

  @media(min-width:960px) {
    &:hover {
      background-color: hsla(187, 90%, 40%, .25);
      cursor: pointer;
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
  }
`;

const Header = H3.extend`
  text-align: center;
  font-weight: 600;
  margin: 2px;
`;

const SubHeader = styled.h3`
  text-align: center;
  font-size: .85em;
  font-weight: 300;
  line-height: 1.6em;
  margin: 2px 0 15px 0;

  @media(min-width:768px) {
    font-size: .75em;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

export { Wrapper, Header, SubHeader, Img, Project, Title };