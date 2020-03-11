import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import reducers from '../reducers/index';
import sagas from '../sagas/index';

export const history = createBrowserHistory();

export default (initialState) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    connectRouter(history)(combineReducers(reducers)),
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware, routerMiddleware(history))),
  );

  sagaMiddleware.run(sagas);

  return store;
};
