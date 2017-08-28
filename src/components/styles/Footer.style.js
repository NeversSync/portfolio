import styled from 'styled-components';

const Wrapper = styled.div`
width: 100%;
font-family: 'Raleway', sans-serif;
background-color: hsla(0, 0%, 15%, 0.40);;
color: white;
height: 120px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const Copy = styled.p`
font-size: .7em;
font-style: italic;
letter-spacing: .7px;
line-height: 1.7;
`;

export { Wrapper, Copy };