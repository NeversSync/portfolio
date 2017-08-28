import styled from 'styled-components';

const Wrapper = styled.div`
width: 100%;
font-family: 'Raleway', sans-serif;
background-color: hsla(0, 0%, 55%, 0.40); 
color: white;
height: 220px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const Copy = styled.p`
font-size: 1em;
font-style: italic;
font-weight: 400;
letter-spacing: .7px;
line-height: 1.7;
margin: 30px 0 10px 0;
`;

export { Wrapper, Copy };