import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
// import promise from 'redux-promise-middleware';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { createSagaMiddleware } from 'redux-saga';

import reducer from './reducers';
import fetchArticles from './sagas';

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(
  routerMiddleware(history),
  sagaMiddleware,
  // promise(),
  logger
);

sagaMiddleware.run(fetchArticles);

export default createStore(
  reducer,
  middleware,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
