import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { compose, lifecycle } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SearchBox from './components/SearchBox';

import {
  requestArticles,
  receiveArticles
} from './store/actions/ArticleActions';
import { getCurrentSearch } from './store/selectors';

const App = ({ requestArticles, currentSearch }) => (
  <div className="app-root">
    <SearchBox onSubmit={() => requestArticles(currentSearch)} />
  </div>
);

// Adds state as a prop to avoid having components directly reference store.
const mapStateToProps = (state, ownProps) => ({
  currentSearch: getCurrentSearch(state, ownProps)
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
