import styled from 'styled-components';
import { animated } from 'react-spring';
import { P, H2, H3 } from './Utilities.style';

const Wrapper = styled.div`
  font-family: 'Raleway', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: hsla(187, 5%, 33%, 1);
  padding: 10% 6%;

  @media(min-width: 768px) {
    padding: 3% 6% 4% 6%;
    height: 80vh;
  }
`;

const HeaderWrapper = styled.div`
  margin-bottom: 30px;

  @media(min-width: 768px) {
    margin-bottom: 54px;
  }
`;

const Header = styled(H2)`
  text-align: center;
`;

const SubHeader = styled(H3)`
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

const ImgWrapper = styled(animated.div)`
  display: grid;
  align-items: center;
  justify-content: center;
  max-width: 60vw;
  min-width: 150px;

  @media(min-width:768px) {
    max-width: 15vw;
    min-width: 275px;
  }
`;

const AnimatedImage = styled(animated.img)`
  width: 100%;
  max-width: 350px;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.5s;
  will-change: transform;
  border-radius: 5px;

  :hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.2);
  }
`;

const CopyWrapper = styled.div`
  display: grid;
  margin: 0px 5px 50px 5px;
  max-width: 60ch;
  margin: 2% 4%;

  @media(min-width:768px) {
    width: 50vw;
    margin: 0 3vw;
  }
`;

const SubCopy = styled(P)`
  margin: 1em 0 1em 0;

  @media(min-width:768px) {
    margin: 0em 0 1em 0;
  }
`;

const Social = styled.div`
  display: flex;
  justify-content: center;

  @media(min-width:768px) {
    justify-content: flex-start;
  }
`;

const SocialIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50px;
  margin: 2px;
`;

export { Wrapper, Content, HeaderWrapper, Header, SubHeader, ImgWrapper, CopyWrapper, SubCopy, Social, SocialIcon, AnimatedImage };
