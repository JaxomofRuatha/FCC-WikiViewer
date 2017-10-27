import React, { Component } from 'react';

import apiSkeleton from './utils/api-helpers';

const apiOpts = {
  method: 'POST'
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _wikiQuery = () => {
    const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query';

    apiSkeleton(url, )
  };

  render() {
    return <p>Testing, 1, 2, 3</p>;
  }
}

export default App;
