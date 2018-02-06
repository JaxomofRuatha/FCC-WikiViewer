import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import styled from 'react-emotion';

const SearchBox = ({
  requestArticles,
  handleSubmit,
  submitting,
  className
}) => (
  <div className={`search-box ${className}`}>
    <img src="assets/Wikipedia-logo-v2.svg" alt="The logo of Wikipedia" />
    <form className="search-form" onSubmit={handleSubmit}>
      <Field
        name="searchInput"
        component="input"
        type="text"
        placeholder="Consult Wikipedia's knowledge..."
        required
      />
      <button type="submit" disabled={submitting}>
        Search!
      </button>
    </form>
    <a href="https://en.wikipedia.org/wiki/Special:Random">
      ...or discover something new!
    </a>
  </div>
);

const SearchStyled = styled(SearchBox)`
  width: 40%;
  margin: 0 auto;
  display: flex;
  a {
    text-decoration: none;
  }
  input {
    background: #c0d8e0;
    flex: 5;
    padding: 1em;
  }
  button {
    flex: 1;
  }
`;

export default reduxForm({ form: 'search' })(SearchStyled);
