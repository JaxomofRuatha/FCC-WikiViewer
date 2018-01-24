import { delay } from 'redux-saga';
import { call, put, takeLatest, all } from 'redux-saga/effects';

import types from '../actions/constants';
import queryWiki from '../data/ajax';
import { receiveArticles, errorArticles } from '../actions/article-actions';

function* articlesWorker({ query }) {
  try {
    yield call(delay, 100);
    const res = yield call(queryWiki, query);
    yield put(receiveArticles(res));
  } catch (err) {
    yield put(errorArticles(err));
  }
}

function* fetchArticles() {
  yield takeLatest(types.REQUEST_ARTICLES, articlesWorker);
}

export default function* rootSaga() {
  yield all([fetchArticles()]);
}
