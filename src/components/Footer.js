import React from 'react';
import resumeLink from '../assets/Nicky-Evers-Tech-Resume.pdf';
import ResumeIcon from 'react-material-icons/icons/action/description';
import { Wrapper, Copy, Copyright, ButtonWrapper, Button, LabelWrapper } from './styles/Footer.style';

function Footer() {
  return (
    <Wrapper>
      <Copy>Hiring? Need help on a project? Lets talk.</Copy>
      <ButtonWrapper>
        <Button><a href={resumeLink} target="_blank" rel="noopener noreferrer"><LabelWrapper><ResumeIcon color={'white'} style={{ margin: '0px 4px' }} /><p>Resume</p></LabelWrapper></a></Button>
      </ButtonWrapper>
      <Copyright>This site built with React.js <br />
        &copy; Nicky Evers 2017
        </Copyright>
    </Wrapper>
  );
}

export default Footer;