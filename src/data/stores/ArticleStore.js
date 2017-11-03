import { EventEmitter } from 'events';

import dispatcher from '../../utils/dispatcher';

class ArticleStore extends EventEmitter {
  constructor() {
    super();
    // Should store objects rendered elsewhere as the currently visible extracts.
    this.articles = [];
    this.fetching = false;
  }

  _handleActions(state, action) {
    switch (action.type) {
      case 'QUERY_WIKI': {
        state.fetching = true;
      }

      default: return state;
    }
  }
}

const articleStore = new ArticleStore();
dispatcher.register(articleStore._handleActions.bind(articleStore));

export default articleStore;
