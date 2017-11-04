import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { lifecycle } from 'recompose';

import { queryWiki } from './data/ArticleActions';
import articleStore from './data/stores/ArticleStore';

import ArticleItem from './view/components/ArticleItem';

const currentArticles = articleStore.getState().articles;
console.log(articleStore.getState());

const App = props => (
  <ArticleItem articles={currentArticles[0]} />
);

export default lifecycle({
  componentDidMount() {
    queryWiki('Testing');
  }
})(App);
