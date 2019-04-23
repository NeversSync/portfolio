import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import './App.css';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" style={{ width: '100%' }}>
          <Switch>
            <Route exact path='/' render={() => <Main />} />
            <Redirect to='/' />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
