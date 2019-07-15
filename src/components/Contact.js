import React from 'react';
import Footer from './Footer';

import {
  ContactWrapper,
  ContactForm,
  SubmitButton,
  ContactCard,
  ContactTitle,
  LeftHalfInputs,
  RightHalfInputs,
  RightTextArea,
  LeftInput
} from './styles/Contact.styles';

const Contact = () => (
  <ContactWrapper>
    <ContactTitle>
      Hiring? Need help on a project?
      <br /> Lets talk.
    </ContactTitle>
    <ContactCard>
      <ContactForm
        netlify
        netlify='true'
        data-netlify='true'
        method='POST'
        netlify-honeypot='bot-field'
        data-netlify-honeypot='bot-field'
        name='contact-form-portfolio'
      >
        <LeftHalfInputs>
          <LeftInput name='name' type='text' placeholder='Name' />
          <LeftInput name='email' type='email' placeholder='Email address' />
          <LeftInput name='subject' type='text' placeholder='Subject' />
          <input type='hidden' name='form-name' value='contact-form-portfolio' />
        </LeftHalfInputs>
        <RightHalfInputs>
          <RightTextArea name='message' type='text' placeholder='Message' />
        </RightHalfInputs>
        <div data-netlify-recaptcha='true' />
        <SubmitButton type='submit' value='submit'>
          SUBMIT
        </SubmitButton>
      </ContactForm>
    </ContactCard>
    <Footer />
  </ContactWrapper>
);

export default Contact;
