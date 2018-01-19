import createSelector from 'reselect';

const getSearches = (state) => {
  state.get('searches');
};

export default getSearches;
