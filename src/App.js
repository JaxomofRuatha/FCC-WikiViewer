import React from 'react';
import { compose, lifecycle } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SearchBox from './components/SearchBox';
import SearchResults from './components/SearchResults';

import {
  requestArticles,
  receiveArticles
} from './store/actions/article-actions';
import { getCurrentQuery, getCurrentSearch } from './store/selectors';

const App = props => (
  <div className="app-root">
    <SearchBox
      onSubmit={values => props.requestArticles(values.get('searchInput'))}
    />
    <SearchResults currentSearch={props.currentSearch} />
  </div>
);

// Adds state as a prop to avoid having components directly reference store.
const mapStateToProps = (state, ownProps) => ({
  currentQuery: getCurrentQuery(state, ownProps),
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
    componentWillMount() {
      document.body.style.background = '#484538';
    }
  }),
  connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(App);
