function reduce(state, action) {
  console.log('in reduce');
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

export default reduce;