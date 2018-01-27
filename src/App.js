import React from 'react';
import { compose, lifecycle } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SearchBox from './components/SearchBox';
import ArticleEntry from './components/ArticleEntry';

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
    <div className="article-results">
      {props.currentSearch &&
        props.currentSearch.forEach((article, i) => {
          const curData = article.get(i);

          return (
            <ArticleEntry
              key={i}
              url={curData.get('url')}
              title={curData.get('title')}
              extract={curData.get('extract')}
              thumbnail={curData.getIn(['thumbnail', 'source'])}
            />
          );
        })}
    </div>
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
    componentDidMount() {
      console.log('React component mounted!');
    }
  }),
  connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(App);
