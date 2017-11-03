import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import apiSkeleton from './utils/api-helpers';

import ArticleItem from './view/components/ArticleItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: 'Testing',
      articles: []
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
    const pages = res.query.pages;
    const articles = [];

    const keyArray = Object.keys(pages);

    console.log(keyArray);

    this.setState(articles);
  };

  _onQueryFail = (err) => {
    throw err;
  };

  render() {
    return (
      <div className="results-container">
        <p>Working kinda</p>
      </div>
    );
  }
}

export default App;
