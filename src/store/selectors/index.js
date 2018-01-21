import { createSelector } from 'reselect';

export const getSearches = (state, props) =>
  state.getIn(['articleReducer', 'searches']);
export const getSearchValue = (state, props) =>
  state.getIn(['form', 'search', 'values']);

export const getCurrentSearch = createSelector(
  [getSearches, getSearchValue],
  (searches, values) => (values === undefined ? '' : values.get('searchInput'))
);
