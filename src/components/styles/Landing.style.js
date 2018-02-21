import styled from 'styled-components';
import backgroundImg4 from '../../assets/img/aerial-forest-compressed.jpg';

const Wrapper = styled.div`
  color: white; 
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 33.3vh 33.3vh 33.3vh;
`;

// const Background = styled.div`
// background: linear-gradient(rgba(255,255,255,0) 0%, rgba(255,255,255,0) 60%, rgba(255,255,255, .5) 80%, rgba(255,255,255,1) 100%), url(${backgroundImg4});
// background-size: cover;
// background-repeat: no-repeat;
// background-position: center center;
// `;

const Header = styled.div`
/* height: 87vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column; */
display: grid;
grid-column: 2 / 3;
grid-row: 2 / 3;
justify-items: center;
align-items: flex-end;
grid-template-rows: 100px 100px;
grid-gap: 20px;
font-family: 'Raleway', sans-serif;
text-shadow: 3px 3px 14px black;
font-size: 6.5vw;
`;

const Title = styled.h1`
margin: 30px;
font-size: 1.8em; 
font-weight: 400;

  @media(min-width: 768px) {
    font-size: .7em;
  }
`;

const SubTitle = styled.h2`
  font-size: .9em;
  font-weight: 300;

  @media(min-width: 768px) {
    font-size: .38em;
  }
`;

const ArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100px;
`;

export { Wrapper, Header, SubTitle, Title, ArrowWrapper };
