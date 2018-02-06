import { createSelectorCreator, defaultMemoize } from 'reselect';
import { formValueSelector } from 'redux-form/immutable';
import { is } from 'immutable';

export const getSearches = (state, props) =>
  state.getIn(['articleReducer', 'searches']);
export const getSearchValue = (state, props) =>
  formValueSelector('search')(state, 'searchInput');

const createImmutableSelector = createSelectorCreator(defaultMemoize, is);

export const getCurrentQuery = createImmutableSelector(
  [getSearches, getSearchValue],
  (searches, value) => (value === undefined ? '' : value)
);

export const getCurrentSearch = createImmutableSelector(
  [getSearches, getSearchValue],
  (searches, value) => (value === undefined
    ? null
    : searches.getIn([value, 'entities', 'articles']))
);
