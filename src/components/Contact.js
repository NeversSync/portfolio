import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import resumeLink from '../assets/Nicky-Evers-Tech-Resume.pdf';
import ResumeIcon from 'react-material-icons/icons/action/description';
import LinkedInIcon from 'react-icons/lib/fa/linkedin-square';
import GithubIcon from 'react-icons/lib/fa/github-square';
import EmailIcon from 'react-icons/lib/fa/envelope';
import { Wrapper, Copy, Copyright, SocialIcon } from './styles/Contact.style';

function Contact() {
  return (
    <Wrapper>
      <Copy>Hiring? Need help on a project? Lets talk.</Copy>
      <div>
          <SocialIcon href='mailto:livelyevers@gmail.com' target="_blank" rel="noopener noreferrer"><EmailIcon size={40} color={'hsl(24, 100%, 55%)'}/></SocialIcon>
          <SocialIcon href="https://github.com/NeversSync" target="_blank" rel="noopener noreferrer"><GithubIcon size={40} color={'hsl(24, 100%, 55%)'}/></SocialIcon>
          <SocialIcon href="https://www.linkedin.com/in/nicky-evers/" target="_blank" rel="noopener noreferrer"><LinkedInIcon size={40} color={'hsl(24, 100%, 55%)'}/></SocialIcon>
        <RaisedButton 
          label='Resume' 
          href={resumeLink}
          primary={true} 
          target='_blank'
          style={{width: '150', height: '50', margin: '10px 15px', textTransform: 'lowercase'}}
          icon={<ResumeIcon/>}
        />
        <Copyright>&copy; Nicky Evers 2017
        </Copyright>
      </div>
    </Wrapper>
  );
}

export default Contact;