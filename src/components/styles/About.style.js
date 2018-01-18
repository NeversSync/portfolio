import styled from 'styled-components';

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  color: black;
  font-family: 'Raleway', sans-serif;
  margin-top: 30px;
  letter-spacing: .2px;
  line-height: 1.7;

  @media(min-width: 768px) {
    // padding: 50px;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media(min-width: 768px) {
    flex-direction: row;
  }
`;

const HeaderWrapper = styled.div`
  margin-bottom: 1em;
`;

const Header = styled.h2`
  text-align: center;
  font-size: 1.15em;
  font-weight: 700;
`;

const SubHeader = styled.h3`
  text-align: center;
  font-size: 1.05em;
  font-weight: 300;
`;

const ImgWrapper = styled.div`
  width: 70%;

  @media(min-width:768px) {
    // width: 300px;
  }
  // justify-content: space-around;
  // padding: 0 40px 0 40px;
`;

const CopyWrapper = styled.div`
  margin: 20px;
`;

const Copy = styled.p`
  font-size: .8em;
  font-weight: 400;
`;

const SubCopy = styled.p`
  font-size: .75em;
  margin: 1em 0 1em 0;
`;

export { Wrapper, Text, HeaderWrapper, Header, SubHeader, ImgWrapper, CopyWrapper, Copy, SubCopy};