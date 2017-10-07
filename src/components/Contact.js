import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import EmailIcon from 'react-material-icons/icons/communication/email';
import resumeLink from '../assets/Nicky-Evers-Tech-Resume.pdf';
import ResumeIcon from 'react-material-icons/icons/action/description';
import { Wrapper, Copy, Copyright } from './styles/Contact.style';

function Contact() {
  return (
    <Wrapper>
      <Copy>Hiring? Need help on a project? Lets talk.</Copy>
      <div>
        <RaisedButton 
          href='mailto:livelyevers@gmail.com'
          target='_blank'
          primary={true} 
          label='Email Me' 
          style={{width: '150', height: '50', margin: '10px 15px'}}
          icon={<EmailIcon/>}
        />
        <RaisedButton 
          label='Resume' 
          href={resumeLink}
          primary={true} 
          target='_blank'
          style={{width: '150', height: '50', margin: '10px 15px', textTransform: 'lowercase'}}
          icon={<ResumeIcon/>}
        />
        <Copyright>&copy; Nicky Evers 2017</Copyright>
      </div>
    </Wrapper>
  );
}

export default Contact;