import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  letter-spacing: .2px;
  line-height: 1.7;
  font-family: 'Raleway', sans-serif;
`;

const Content = styled.div`
  background: linear-gradient(rgba(255,255,255,0) 0%, rgba(255,255,255,1) 12%);
  position: relative;
`;

export { Wrapper, Content };
