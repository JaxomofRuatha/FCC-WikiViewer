import createSelector from 'reselect';

const getSearches = (state) => {
  console.log(state);
  state.get('searches');
};

export default getSearches;
