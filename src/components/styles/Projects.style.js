import styled from 'styled-components';
import{ P } from './Utilities.style';

const Wrapper = styled.div`
  width: 100%;
  font-family: 'Raleway', sans-serif;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-evenly;

  @media(min-width: 768px) {
    justify-content: space-evenly;
    flex-direction: row;
    // margin: 50px 0 0 0;
  }
`;

const Title = styled.div`
  font-family: 'Raleway', sans-serif;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 140px;
  font-size: 2em;
  color: white;
  background-color: hsla(187, 65%, 40%, .75);
`;

const Project = styled.div`
  display: flex;
  // flex-wrap: wrap;
  // justify-content: space-evenly;
  // align-content: space-evenly;
  margin: 10px;
    &:hover {
      margin: 12px;
      background-color: hsla(187, 90%, 40%, .25);
      cursor: pointer;
    }

    @media(min-width:768px) {
      width: 40%;
      height: 350px;
    }
`;

const Header = P.extend`
  text-align: center;
  font-weight: 600;
  line-height: 1.5em;
  margin: 2px;
`;

const SubHeader = styled.h3`
  text-align: center;
  font-size: .85em;
  font-weight: 300;
  line-height: 1.5em;
  margin: 2px 0 30px 0;

  @media(min-width:768px) {
    font-size: .75em;
  }
`;

const ImgWrapper = styled.div`
  width: 300px;
  box-shadow: .5px .5px 8px .2px grey;

  @media(min-width:768px) {
    width: 400px;
  }
`;

export { Wrapper, Header, SubHeader, ImgWrapper, Project, Title };