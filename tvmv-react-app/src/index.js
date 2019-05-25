import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';

window.scroll(0, 0);
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
