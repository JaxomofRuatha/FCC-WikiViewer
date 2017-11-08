import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import ArticleItem from './components/ArticleItem';

const defaultArticles = {
  id: 1,
  title: 'stuff',
  extract: 'content stuff',
  thumbnail: 'link pic'
};

const enhance = compose(
  lifecycle({
    componentDidMount() {
      console.log('Exists');
    }
  }),
  connect()
);

const App = props => (
  <ArticleItem articles={defaultArticles} />
);

export default enhance(App);
