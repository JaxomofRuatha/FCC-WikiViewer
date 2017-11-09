import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { compose, lifecycle } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ArticleItem from './components/ArticleItem';
import { queryWiki } from './data/actions/ArticleActions';

const App = props => <ArticleItem articles={props.queryWiki('Testing')} />;

function mapStateToProps(state) {
  return {
    articles: state.articles,
    fetching: state.fetching
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      queryWiki
      // randomWiki
    },
    dispatch
  );
}

const enhance = compose(
  lifecycle({
    componentDidMount() {
      console.log('Exists');
    }
  }),
  connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(App);
