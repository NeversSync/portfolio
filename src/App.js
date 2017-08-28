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
        <div className="App">
            <Switch>
              <Route exact path='/' render={() => <Main />} />
              {/* <Route path='/about' render={() => <About />} />
              <Route path='/places' render={() => <Main />} />
              <Route path='/vendors' render={() => <Vendors/>} /> */}
              <Redirect to='/' />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
