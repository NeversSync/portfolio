import React, { Component } from 'react';
import { push as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavItem = styled.li`
  font-size: 2em;
  display: block;
  text-decoration: none;
  color: white;

  &:hover {
    color: turquoise;
  }

  @media (min-width: 700px) {
    display: inline-block;
  }
`;

class Nav extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div id="outer-container">
        <Menu pageWrapId="page-wrap" outerContainerId="outer-container">
          <Link to="/">
            <NavItem>Home</NavItem>
          </Link>
          <Link to="/about">
            <NavItem>About</NavItem>
          </Link>
          <Link to="/projects">
            <NavItem>Projects</NavItem>
          </Link>
          <Link to="/contact">
            <NavItem>Contact</NavItem>
          </Link>
        </Menu>
      </div>
    );
  }
}

export default Nav;
