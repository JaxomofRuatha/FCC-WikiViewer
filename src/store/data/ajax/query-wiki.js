import { normalize } from 'normalizr';
import { fromJS } from 'immutable';

import apiSkeleton from '../../../utils/api-helpers';
import schema from '../schema';

export function transformResults(res, query) {
  const articles = [];

  Object.keys(res).forEach((key) => {
    const page = res[key];
    articles.push({
      id: page.pageid,
      url: page.fullurl,
      title: page.title,
      extract: page.extract,
      thumbnail: page.original,
      caption: page.pageimage
    });
  });
  return fromJS({ [query]: normalize(articles, schema) });
}

async function queryWiki(query) {
  const url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&prop=info%7Cextracts%7Cpageimages&explaintext=1&generator=search&inprop=url&exsentences=3&exlimit=20&exintro=1&piprop=original%7Cname&gsrsearch=${query}&gsrnamespace=*&gsrlimit=10`;

  const apiOpts = {
    method: 'GET'
  };

  const results = await apiSkeleton(url, apiOpts);

  return transformResults(results.query.pages, query);
}

export default queryWiki;
