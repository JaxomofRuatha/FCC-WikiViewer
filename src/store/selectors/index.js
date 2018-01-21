import createSelector from 'reselect';

export const getSearches = state => state.getIn(['articleReducer', 'searches']);

export const getCurrentSearch = (state) => {
  const latest = state.searches.last() || null;
  state.getIn(['searches', latest]);
};
