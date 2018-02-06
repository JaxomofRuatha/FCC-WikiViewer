import React from 'react';
import styled from 'react-emotion';

const ArticleEntry = props => (
  <article className={props.className}>
    <a href={props.url}>
      <img src={props.thumbnail} alt={props.caption} />
      <h1>{props.title}</h1>
      <p>{props.extract}</p>
    </a>
  </article>
);

const ArticleStyled = styled(ArticleEntry)`
  background: #d4eac8;
  color: #484538;
  a {
    text-decoration: none;
  }
`;

export default ArticleStyled;
