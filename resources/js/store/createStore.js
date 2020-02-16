import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from '../reducers/index';
import sagas from '../sagas/index';

export default (initialState) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    combineReducers(reducers),
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );

  sagaMiddleware.run(sagas);

  return store;
};
