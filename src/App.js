import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { compose, lifecycle } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  requestArticles,
  receiveArticles
} from './store/actions/ArticleActions';
import { getSearches } from './store/selectors';

const App = () => <div className="app-root" />;

// Adds state as a prop to avoid having components directly reference store.
const mapStateToProps = (state, ownProps) => ({
  searches: getSearches(state)
});

// Adds action creators as props to avoid having components directly reference store.
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      requestArticles,
      receiveArticles
    },
    dispatch
  );

const enhance = compose(
  lifecycle({
    componentDidMount() {
      console.log('React component mounted!');
    }
  }),
  connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(App);
