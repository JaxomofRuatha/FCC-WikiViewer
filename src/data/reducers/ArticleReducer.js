import { Map } from 'immutable';

const initialState = Map({
  // Should store objects rendered elsewhere as the currently visible extracts.
  articles: {},
  fetching: false
});

function reduce(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_ARTICLES': {
      return state.set('fetching', true);
    }
    case 'RECEIVE_ARTICLES': {
      const newArticles = action.pages.map(page => ({
        id: page.pageid,
        title: page.title,
        extract: page.extract,
        thumbnail: page.thumbnail.source
      }));
      return state.set('articles', newArticles);
    }
    default:
      return state;
  }
}

export default reduce;
