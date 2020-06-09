import React from 'react';
import Layout from '../components/layout'
import { InternalButton, SubTitle, Title } from '../components/styles/Helpers';
import { ButtonWrapper } from '../components/styles/Footer.style';


const Thanks = () => (
  <Layout>
    <div style={{minHeight: '80vh', display: 'grid', justifyContent: 'center', alignContent: 'center'}}>
      <SubTitle style={{margin: '2em'}}>Thank you! We will be in touch shortly.</SubTitle>
<ButtonWrapper>
      <InternalButton to='/'>HOME</InternalButton>
      </ButtonWrapper>
    </div>
  </Layout>
);

export default Thanks;
