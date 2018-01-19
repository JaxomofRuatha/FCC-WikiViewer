import types from './constants';

export function requestArticles(query) {
  return {
    type: types.REQUEST_ARTICLES,
    query
  };
}

export function receiveArticles(res) {
  return {
    type: types.RECEIVE_ARTICLES,
    res
  };
}

export function errorArticles(err) {
  return {
    type: types.ERROR_ARTICLES,
    err
  };
}
