import React from 'react';

const ArticleItem = props => (
  <div>
    <span>{props.articles.id}</span>
    <span>{props.articles.title}</span>
    <span>{props.articles.extract}</span>
    <img src={props.articles.thumbnail} />
  </div>
);

export default ArticleItem;
