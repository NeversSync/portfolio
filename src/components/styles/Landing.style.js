import styled from 'styled-components';
import backgroundImg from '../../assets/img/tetsu2.png';

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
font-weight: 400;
`;

const SubTitle = styled.h2`
font-size: 22px;
font-weight: 300;
`;

export { Wrapper, Background, Header, SubTitle, Title };