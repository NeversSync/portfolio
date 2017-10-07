import React from 'react';
import resumeLink from '../assets/Nicky-Evers-Tech-Resume.pdf';
import RaisedButton from 'material-ui/RaisedButton';
import ResumeIcon from 'react-material-icons/icons/action/description';
import { Wrapper, Copy } from './styles/Footer.style';

function Footer() {
  return (
    <Wrapper>
      <RaisedButton 
        label='Resume' 
        href={resumeLink} 
        target='_blank'
        style={{margin: '20px', textTransform: 'lowercase'}}
        icon={<ResumeIcon/>}
      />
      <Copy>&copy; Nicky Evers 2017</Copy>
    </Wrapper>
  );
}

export default Footer;