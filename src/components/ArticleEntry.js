import React from 'react';

const ArticleEntry = props => (
  <div className="article-entry">
    <a href={props.url}>
      <img src={props.thumbnail} />
      <h1>{props.title}</h1>
      <p>{props.extract}</p>
    </a>
  </div>
);

export default ArticleEntry;
