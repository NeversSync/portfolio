import React from 'react';
import resumeLink from '../../static/Nicky-Evers-Tech-Resume.pdf';
import ResumeIcon from 'react-material-icons/icons/action/description';
import { FooterWrapper, Copyright, ButtonWrapper, Button, LabelWrapper, CallToAction } from './styles/Footer.style';
import { UpArrow } from '../components/styles/Helpers';

function Footer() {
  return (
    <FooterWrapper>
      <CallToAction>
        <ButtonWrapper>
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
      <Copyright>This site built with React.JS <br />
      </Copyright>
      <UpArrow/>
    </FooterWrapper>
  );
}

export default Footer;
