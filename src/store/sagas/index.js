import { delay } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import types from '../actions/constants';
import queryWiki from '../../utils/search-transform';
import { receiveArticles } from '../actions/ArticleActions';

function* articlesWorker({ query }) {
  try {
    yield call(delay, 100);
    const data = yield call(queryWiki, query);
    yield put(receiveArticles(data));
  } catch (err) {
    throw err;
  }
}

function* fetchArticles() {
  yield takeLatest(types.REQUEST_ARTICLES, articlesWorker);
}

export default fetchArticles;
