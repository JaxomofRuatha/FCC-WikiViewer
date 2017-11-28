import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import articleReducer from './article-reducer';

const reducers = combineReducers({ articleReducer, router: routerReducer });

export default reducers;
