import dispatcher from '../dispatcher';

export function queryWiki() {
  dispatcher.dispatch({
    type: 'QUERY_WIKI'
  });
}

export function fetchingWiki() {
  dispatcher.dispatch({
    type: 'FETCHING_WIKI'
  });
}

export function receiveWiki() {
  dispatcher.dispatch({
    type: 'RECEIVE_WIKI'
  });
}

export function randomWiki() {
  dispatcher.dispatch({
    type: 'RANDOM_WIKI'
  });
}
