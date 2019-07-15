import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'reset-css/reset.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

ReactDOM.render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
  , document.getElementById('root'));
registerServiceWorker();
