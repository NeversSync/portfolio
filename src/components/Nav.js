import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Headroom from 'react-headroom';
import styled from 'styled-components';

const Header = styled.div`
  font-size: 2em;
  text-align: center;
`;

function Nav() {
  return (
    <Headroom >
      <div>
        <Header>
          <h1>Nicky Evers</h1>
          <h3></h3>
        </Header>
      </div>
    </Headroom>
  );
}

export default Nav;