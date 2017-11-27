import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import reducer from './reducers';

export const history = createHistory();
const middleware = applyMiddleware(
  routerMiddleware(history),
  promise(),
  thunk,
  logger
);

export default createStore(
  reducer,
  middleware,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
