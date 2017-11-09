import apiSkeleton from '../../utils/api-helpers';

function requestArticles(query) {
  return {
    type: 'REQUEST_ARTICLES',
    query
  };
}

function receiveArticles(pages) {
  return {
    type: 'RECEIVE_ARTICLES',
    articles: Object.keys(pages).map((page, index) => {
      console.log(pages, index);
      return ({
        id: pages[page].pageid,
        title: pages[page].title,
        extract: pages[page].extract,
        thumbnail: pages[page].thumbnail.source
      });
    })
  };
}

export function queryWiki(query) {
  return (dispatch) => {
    const apiOpts = {
      method: 'POST'
    };
    const url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&prop=extracts%7Cpageimages&explaintext=1&generator=search&exsentences=3&exlimit=20&exintro=1&piprop=thumbnail%7Cname&gsrsearch=${query}&gsrnamespace=*&gsrlimit=10`;

    dispatch(requestArticles(query));

    function _onQuerySuccess(res) {
      const { pages } = res.query;

      dispatch(receiveArticles(pages));
    }

    function _onQueryFail(err) {
      throw err;
    }
    return apiSkeleton(url, apiOpts, _onQuerySuccess, _onQueryFail);
  };
}

/*
export function randomWiki() {
  dispatcher.dispatch({
    type: 'RANDOM_WIKI'
  });
}
*/
