import { fromJS } from 'immutable';

import types from '../actions/constants';

const initialState = fromJS({
  searches: [],
  fetching: false
});

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_ARTICLES: {
      return state.set('fetching', true);
    }
    case types.RECEIVE_ARTICLES: {
      const data = action.res;
      return state.withMutations((store) => {
        store.set('fetching', false);
        store.updateIn(['searches'], searches => searches.push(data));
      });
    }
    default:
      return state;
  }
};

export default articleReducer;
