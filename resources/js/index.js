import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import BaseRouter from './components/BaseRouter/BaseRouter';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BaseRouter />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
