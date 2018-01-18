import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: 'Raleway', sans-serif;
  width: 100%;
  display: flex;
  color: black;
  flex-direction: column;
  justify-content: space-around;
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
  max-width: 300px;
  min-width: 200px;

  @media(min-width:768px) {
    // width: 300px;
  }
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

const Social = styled.div`
  display: flex;
  justify-content: center;

  @media(min-width:768px) {
    justify-content: flex-start;
  }
`;

export { Wrapper, Text, HeaderWrapper, Header, SubHeader, ImgWrapper, CopyWrapper, Copy, SubCopy, Social };

// Center social icons on mobile