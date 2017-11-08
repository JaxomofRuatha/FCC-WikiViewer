import React from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createHashHistory';
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from 'react-router-redux';
import ReactDOM from 'react-dom';
//import { BrowserRouter } from 'react-router-dom';

import './css/style.css';
import App from './App';
import registerServiceWorker from './utils/registerServiceWorker';
import reducers from './data/reducers';

const history = createHistory();
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(routerMiddleware(history))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
