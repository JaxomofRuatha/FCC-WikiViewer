import dispatcher from '../utils/dispatcher';
import apiSkeleton from '../utils/api-helpers';

export function queryWiki(query) {
  const apiOpts = {
    method: 'POST'
  };
  const url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&prop=extracts%7Cpageimages&explaintext=1&generator=search&exsentences=3&exlimit=20&exintro=1&piprop=thumbnail%7Cname&gsrsearch=${query}&gsrnamespace=*&gsrlimit=10`;

  dispatcher.dispatch({
    type: 'QUERY_WIKI'
  });

  apiSkeleton(url, apiOpts, _onQuerySuccess, _onQueryFail);

  function _onQuerySuccess(res) {
    const pages = res.query.pages;

    dispatcher.dispatch({
      type: 'RECEIVE_WIKI',
      pages
    });
    console.log('Reached query success!', pages);
  }

  function _onQueryFail(err) {
    throw err;
  }
}

export function fetchingWiki() {
  dispatcher.dispatch({
    type: 'FETCHING_WIKI'
  });
}

export function randomWiki() {
  dispatcher.dispatch({
    type: 'RANDOM_WIKI'
  });
}
