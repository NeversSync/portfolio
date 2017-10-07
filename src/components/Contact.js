import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import EmailIcon from 'react-material-icons/icons/communication/email';
import { Wrapper, Copy } from './styles/Contact.style';

function Contact() {
  return (
    <Wrapper>
      <Copy>Hiring? Need help on a project? Lets talk.</Copy> <br/>
      <RaisedButton 
        href='mailto:livelyevers@gmail.com'
        target='_blank'
        primary={true} 
        label='Email Me' 
        style={{width: '150', height: '50', marginBottom: '30px'}}
        icon={<EmailIcon/>}
      />
    </Wrapper>
  );
}

export default Contact;