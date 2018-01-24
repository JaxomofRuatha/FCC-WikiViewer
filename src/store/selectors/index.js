import { createSelector } from 'reselect';
import { formValueSelector } from 'redux-form/immutable';

export const getSearches = (state, props) =>
  state.getIn(['articleReducer', 'searches']);
export const getSearchValue = (state, props) =>
  formValueSelector('search')(state, 'searchInput');

export const getCurrentQuery = createSelector(
  [getSearches, getSearchValue],
  (searches, value) => (value === undefined ? '' : value)
);

export const getCurrentSearch = createSelector(
  [getSearches, getSearchValue],
  (searches, value) => (value === undefined ? null : searches.get(value))
);
