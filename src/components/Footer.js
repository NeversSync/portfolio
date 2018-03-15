import React from 'react';
import resumeLink from '../assets/Nicky-Evers-Tech-Resume.pdf';
import ResumeIcon from 'react-material-icons/icons/action/description';
import EmailIcon from 'react-icons/lib/fa/envelope-square';
import { Wrapper, Copy, Copyright, ButtonWrapper, Button, LabelWrapper, CallToAction } from './styles/Footer.style';

function Footer() {
  return (
    <Wrapper>
      <CallToAction>
        <Copy>Hiring? Need help on a project? Lets talk.</Copy>
        <ButtonWrapper>
          <Button>
            <a href='mailto:livelyevers@gmail.com' target="_blank" rel="noopener noreferrer">
            <LabelWrapper>
            <EmailIcon 
              color={'white'} 
              style={{ margin: '0px 9px 0px 0px', fontSize: '29px' }} />
              <p>CONTACT ME</p>
            </LabelWrapper></a>
          </Button>
          <Button>
            <a href={resumeLink} target="_blank" rel="noopener noreferrer">
            <LabelWrapper>
              <ResumeIcon 
                color={'white'} 
                style={{ margin: '0px 9px 0px 0px', height: '32px', width: '32px' }} />
                <p>RESUME</p>
            </LabelWrapper></a></Button>
        </ButtonWrapper>
      </CallToAction>
      <Copyright>This site built with React.js <br />
        &copy; Nicky Evers 2017
      </Copyright>
    </Wrapper>
  );
}

export default Footer;