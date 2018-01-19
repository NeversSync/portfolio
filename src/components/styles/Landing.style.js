import styled from 'styled-components';
import backgroundImg from '../../assets/img/tetsu2.jpg';
// import backgroundImg from '../../assets/img/redwood-img.jpg';

const Wrapper = styled.div`
color: white;
`;

const Background = styled.div`
background: url(${backgroundImg});
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
`;

const Header = styled.div`
height: 87vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
font-family: 'Raleway', sans-serif;
text-shadow: 3px 3px 3px 1px black;
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

export { Wrapper, Background, Header, SubTitle, Title };
