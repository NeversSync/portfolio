import styled from 'styled-components';
import { H3 } from './Utilities.style';

const Wrapper = styled.div`
  font-family: 'Raleway', sans-serif;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(600px, 600px));
  grid-template-rows: 350px 350px;
  justify-content: center;
  justify-items: center;
  grid-gap: 1em;
  margin: 2% 4%;
  color: hsla(187, 5%, 33%, 1);
  align-items: center;


  @media(min-width: 960px) {
    margin: .5% 0;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 140px;
  font-size: 2.2em;
  color: white;
  background-color: hsla(187, 65%, 40%, .75);

  @media(min-width:768px) {
    font-size: 2em;
  }
`;

const ProjectSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  font-size: 2.2em;
  color: hsla(187, 5%, 33%, 1);
  margin: 50px 0px 0px 0px;

  @media(min-width:768px) {
    font-size: 2em;
  }
`;

const Project = styled.div`
  display: grid;
  height: auto;
  padding: 15px;
  padding-top: 5px;
  max-width: 400px;
  transition: background-color 0.5s cubic-bezier(.25,.8,.25,1), box-shadow 0.5s cubic-bezier(.25,.8,.25,1), opacity 2000ms ease-out, transform 2000ms ease-out;
  opacity: 0;
  transform: translateY(40px);

  @media(min-width:960px) {
    &:hover {
      background-color: hsla(187, 90%, 40%, .25);
      cursor: pointer;
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
  }

  &:active {
    -webkit-transform: translate(0px, 3px);
    transform: translate(0px, 3px);
    box-shadow: none;
  }
`;

const Header = styled(H3)`
  color: hsl(187, 40%, 2%);
  text-align: center;
  font-weight: 600;
  margin: 2px;
  color: hsla(187, 5%, 33%, 1);
`;

const SubHeader = styled.h3`
  color: hsla(187, 5%, 33%, 1);
  text-align: center;
  font-size: .85em;
  font-weight: 300;
  line-height: 1.6em;
  margin: 2px 0 15px 0;

  @media(min-width:768px) {
    font-size: .75em;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

export { Wrapper, Header, SubHeader, Img, Project, Title, ProjectSection };
