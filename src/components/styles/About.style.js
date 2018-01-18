import styled from 'styled-components';
import { P, H2, H3 } from './Utilities.style';

const Wrapper = styled.div`
  font-family: 'Raleway', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;
  margin: 10% 6%;

  @media(min-width: 768px) {
    min-height: 650px;
    margin: 3% 13%;
  }
`;

const HeaderWrapper = styled.div`
  margin-bottom: 30px;

  @media(min-width: 768px) {
    margin-bottom: 54px;
  }
`;

const Header = H2.extend`
text-align: center;
`;

const SubHeader = H3.extend`
text-align: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media(min-width: 768px) {
    flex-direction: row;
  }
`;

const ImgWrapper = styled.div`
  max-width: 350px;
  min-width: 150px;

  @media(min-width:768px) {
    max-width: 550px;
    min-width: 275px;
  }
`;

const CopyWrapper = styled.div`
  margin: 0px 5px;

  @media(min-width:768px) {
    margin: 0px 20px;  
  }
`;

const SubCopy = P.extend`
  margin: 1em 0 1em 0;
`;

const Social = styled.div`
  display: flex;
  justify-content: center;

  @media(min-width:768px) {
    justify-content: flex-start;
  }
`;

export { Wrapper, Content, HeaderWrapper, Header, SubHeader, ImgWrapper, CopyWrapper, SubCopy, Social };