import React from 'react';
import styled from 'react-emotion';

import ArticleEntry from './ArticleEntry';

const SearchResults = ({ currentSearch, className }) => (
  <section className={`search-results ${className}`}>
    {currentSearch &&
      currentSearch
        .valueSeq()
        .map(article => (
          <ArticleEntry
            key={article.get('id')}
            url={article.get('url')}
            title={article.get('title')}
            extract={article.get('extract')}
            caption={article.get('caption')}
            thumbnail={article.getIn(['thumbnail', 'source'])}
          />
        ))}
  </section>
);

const ResultsStyled = styled(SearchResults)``;

export default ResultsStyled;
