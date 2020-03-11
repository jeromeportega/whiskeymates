import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware, connectRouter } from 'connected-react-router';

import reducers from '../reducers/index';
import sagas from '../sagas/index';

export const history = createBrowserHistory();

const composeEnhancers = () => {
  if (process.env.APP_ENV !== 'production') {
    return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ // eslint-disable-line no-underscore-dangle
    || compose;
  }
  return compose;
};

export default (initialState) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    combineReducers({
      ...reducers,
      router: connectRouter(history),
    }),
    initialState,
    composeEnhancers()(applyMiddleware(routerMiddleware(history), sagaMiddleware)),
  );

  sagaMiddleware.run(sagas);

  return store;
};
