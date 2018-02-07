import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import styled from 'react-emotion';
import color from 'color';

const lightBrown = color('#484538')
  .lighten(0.6)
  .hex();

const SearchBox = ({
  requestArticles,
  handleSubmit,
  submitting,
  className
}) => (
  <div className={`search-box ${className}`}>
    <header className="search-box__title">
      <img src="assets/Wikipedia-logo-v2.svg" alt="The logo of Wikipedia" />
      <h1>The WikiViewer</h1>
    </header>
    <form className="search-box__form" onSubmit={handleSubmit}>
      <Field
        name="searchInput"
        component="input"
        type="text"
        placeholder="Consult Wikipedia's knowledge..."
        required
      />
      <button
        className="search-box__button"
        type="submit"
        disabled={submitting}
      >
        GO
      </button>
    </form>
    <a
      href="https://en.wikipedia.org/wiki/Special:Random"
      className="search-box__random"
    >
      ...or discover something new!
    </a>
  </div>
);

const SearchStyled = styled(SearchBox)`
  width: 50vw;
  margin: 6rem auto;
  .search-box__title {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h1 {
    color: #56a3a6;
    font-family: 'Linux Libertine';
    font-weight: 100;
    font-variant: small-caps;
    font-size: 3rem;
    display: inline-block;
    padding: 0 1.5rem;
  }
  form {
    position: relative;
    margin: 1rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  a {
    text-align: center;
    color: #c0d8e0;
    font-family: sans-serif;
    padding-left: 2rem;
  }
  input {
    background: ${lightBrown};
    border: none;
    padding: 1em;
    color: #c0d8e0;
    font-weight: bold;
    width: 80%;
    border-radius: 5px;
    &:required {
      box-shadow: none;
    }
  }
  button {
    text-align: center;
    display: inline-block;
    width: 3rem;
    height: 3rem;
    font-size: 1rem;
    border-radius: 50%;
    font-weight: bold;
    background: #484538;
    border: 2px solid #484538;
    box-shadow: inset 0 0 0 3px #56a3a6, 0 0 0 3px ${lightBrown};
    color: #56a3a6;
    margin-left: -1rem;
  }
`;

export default reduxForm({ form: 'search' })(SearchStyled);
