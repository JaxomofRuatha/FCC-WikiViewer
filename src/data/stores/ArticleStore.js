import { ReduceStore } from 'flux/utils';
import { Map } from 'immutable';

import dispatcher from '../../utils/dispatcher';

class ArticleStore extends ReduceStore {
  constructor() {
    super(dispatcher);
  }

  getInitialState() {
    return Map({
      // Should store objects rendered elsewhere as the currently visible extracts.
      articles: [],
      fetching: false
    });
  }

  reduce(state, action) {
    switch (action.type) {
      case 'QUERY_WIKI': {
        return state.set('fetching', true);
      }
      case 'RECEIVE_WIKI': {
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
}

export default new ArticleStore();
