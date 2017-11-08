// import { ReduceStore } from 'flux/utils';
import { Map } from 'immutable';
import { createStore } from 'redux';

const ArticleStore = {

  initialState: Map({
    // Should store objects rendered elsewhere as the currently visible extracts.
    articles: [],
    fetching: false
  }),

}

const articleStore = new ArticleStore();
dispatcher.register(articleStore.reduce);

export default articleStore;
