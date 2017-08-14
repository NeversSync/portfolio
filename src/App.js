import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Nav from './components/Nav';
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
        <div className="App">
          <Nav/>
          <Footer/>
          <main id='page-wrap'>
            <Switch>
              <Route exact path='/' render={() => <Landing />} />
              {/* <Route path='/about' render={() => <About />} />
              <Route path='/places' render={() => <Main />} />
              <Route path='/vendors' render={() => <Vendors/>} /> */}
              <Redirect to='/' />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
