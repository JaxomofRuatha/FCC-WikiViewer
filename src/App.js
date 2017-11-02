import React, { Component } from 'react';

import apiSkeleton from './utils/api-helpers';

const apiOpts = {
  method: 'POST'
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: 'Testing'
    };
  }

  componentDidMount() {
    this._wikiQuery();
  }

  _wikiQuery = () => {
    const url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&prop=extracts%7Cpageimages&explaintext=1&generator=search&exsentences=3&exlimit=20&exintro=1&piprop=thumbnail%7Cname&gsrsearch=${this
      .state.searchQuery}&gsrnamespace=*&gsrlimit=10`;

    apiSkeleton(url, apiOpts, this._onQuerySuccess, this._onQueryFail);
  };

  _onQuerySuccess = (res) => {
    console.log(res);
  };

  _onQueryFail = (err) => {
    throw err;
  };

  render() {
    return <p>Testing, 1, 2, 3</p>;
  }
}

export default App;
