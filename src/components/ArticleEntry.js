import React from 'react';
import styled from 'react-emotion';
import color from 'color';

const darkBrown = color('#484538')
  .darken(0.4)
  .hex();

const ArticleEntry = props => (
  <article className={props.className}>
    <a href={props.url}>
      <div className="article-text">
        <h1>{props.title}</h1>
        <p>{props.extract}</p>
      </div>
      <img src={props.thumbnail} alt={props.caption} />
    </a>
  </article>
);

const ArticleStyled = styled(ArticleEntry)`
  height: 15rem;
  margin: 2rem;
  font-family: sans-serif;
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    display: flex;
    height: 100%;
    width: 100%;
    color: #c0d8e0;
    background: ${darkBrown};
    padding: 1rem;
    border: 3px solid ${darkBrown};
    border-radius: 10px;
    transition: all 0.3s;
    &:hover {
      border: 3px solid #56a3a6;
    }
  }
  .article-text {
    padding-right: 1rem;
  }
  h1 {
    color: #cad49d;
  }
  img {
    max-width: 30%;
    max-height: 100%;
    width: auto;
    height: auto;
  }
`;

export default ArticleStyled;
