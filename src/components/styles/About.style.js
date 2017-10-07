import styled from 'styled-components';

const Wrapper = styled.div`
  color: black;
  font-family: 'Raleway', sans-serif;
  height: 375px;
  margin: 50px;
  margin-top: 70px;
  letter-spacing: .2px;
  line-height: 1.7;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%
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
  width: 400px;
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