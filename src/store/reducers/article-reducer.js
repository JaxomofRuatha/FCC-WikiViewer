import { fromJS } from 'immutable';

import types from '../actions/constants';

const initialState = fromJS({
  searches: {},
  fetching: false
});

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_ARTICLES: {
      return state.set('fetching', true);
    }
    case types.RECEIVE_ARTICLES: {
      const data = action.res;
      const query = data.keySeq().first();

      return state.withMutations((store) => {
        store.set('fetching', false);
        store.setIn(['searches', query], data.get(query));
      });
    }
    default:
      return state;
  }
};

export default articleReducer;
