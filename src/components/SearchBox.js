import React from 'react';

const SearchBox = ({ onSearch }) => (
  <input
    className="search-box"
    type="text"
    placeholder="Consult Wikipedia's knowledge..."
    onChange={onSearch}
  />
);
