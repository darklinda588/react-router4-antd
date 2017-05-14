import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>
  ,
  document.getElementById('root')
);
