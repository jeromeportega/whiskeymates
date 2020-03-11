import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { ConnectedRouter } from 'connected-react-router'

import BaseRouter from './components/BaseRouter/BaseRouter';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter>
      <BaseRouter />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
