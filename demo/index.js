import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import 'normalize.css';
import './index.css';

import App from './presentational/App';

const root = document.getElementById('root');
render(
  <Router>
    <App />
  </Router>,
  root,
);
