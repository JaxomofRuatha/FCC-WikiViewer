import { normalize } from 'normalizr';
import { fromJS } from 'immutable';

import apiSkeleton from '../../../utils/api-helpers';
import schema from '../schema';

function transformResults(res, query) {
  const articles = [];

  Object.keys(res).forEach((key) => {
    const page = res[key];
    articles.push({
      id: key,
      title: page.title,
      extract: page.extract,
      thumbnail: page.thumbnail
    });
  });
  return fromJS({
    query,
    articles
  });
}

async function queryWiki(query) {
  const url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&prop=extracts%7Cpageimages&explaintext=1&generator=search&exsentences=3&exlimit=20&exintro=1&piprop=thumbnail%7Cname&gsrsearch=${query}&gsrnamespace=*&gsrlimit=10`;

  const apiOpts = {
    method: 'POST'
  };

  const results = await apiSkeleton(url, apiOpts);

  return transformResults(results.query.pages, query);
}

export default queryWiki;
