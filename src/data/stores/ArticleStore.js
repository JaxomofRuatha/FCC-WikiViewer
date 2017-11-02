import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class ArticleStore extends EventEmitter {
  constructor() {
    super();
    this.articles = [];
  }

  _handleActions(state, action) {
    switch (action.type) {
      case 'QUERY_WIKI': {

      }
      
      default: return state;  
    }
  }
}

const articleStore = new ArticleStore();
dispatcher.register(articleStore._handleActions.bind(articleStore));

export default articleStore;
