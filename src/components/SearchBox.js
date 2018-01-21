import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';

const SearchBox = ({ handleSubmit, submitting }) => (
  <form className="search-box" onSubmit={handleSubmit}>
    <Field
      name="searchInput"
      component="input"
      type="text"
      placeholder="Consult Wikipedia's knowledge..."
    />
    <button type="submit" disabled={submitting}>
      Submit
    </button>
  </form>
);

export default reduxForm({ form: 'search' })(SearchBox);
