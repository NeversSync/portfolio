import styled from 'styled-components';

const Wrapper = styled.div`
width: 100%;
font-family: 'Raleway', sans-serif;
display: flex;
background-color: hsla(0, 0%, 15%, 0.40);;
color: white;
height: 120px;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const Copyright = styled.p`
font-size: .7em;
font-style: italic;
letter-spacing: .7px;
`;

export { Wrapper, Copyright };