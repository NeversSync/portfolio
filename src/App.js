import React, { Component } from 'react';
import { BrowserRouter as Router,
         Route,
         Switch,
         Redirect
} from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Landing from './components/Landing';

const Footer = styled.div`
  text-align: center;
  color: lightgrey;
  padding: 1em 0;
  min-height: 1%;
`;

const Routes = (
  <Switch>
    {/* <Route exact path="/feed" render={() => <Feed />} />
    <Route exact path="/" render={() => <Login />} />
    <Route path="/AddPic" render={() => <AddPic />} /> */}
    <Redirect to="/" />
  </Switch>
);

class App extends Component {
  render() {
    return (
        <Router>
        <div>
          <main>
            {Routes}
          </main>
          <Landing/>
          <Footer>
            &copy; NickyEvers 2017
          </Footer>
        </div>
      </Router>
    );
  }
}

export default App;
