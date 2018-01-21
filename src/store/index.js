import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

export const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = applyMiddleware(
  sagaMiddleware,
  routerMiddleware(history),
  logger
);

const store = createStore(rootReducer, composeEnhancers(middleware));

sagaMiddleware.run(rootSaga);

export default store;
