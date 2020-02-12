import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import BaseRouter from './components/BaseRouter/BaseRouter';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
    <BaseRouter />
  </BrowserRouter>,
  document.getElementById('app')
);
