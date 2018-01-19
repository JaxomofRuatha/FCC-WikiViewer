import apiSkeleton from '../../../utils/api-helpers';

export const apiOpts = {
  method: 'POST'
};

export const onSuccess = res => res.query.pages;

export const onFail = (err) => {
  throw err;
};

const queryWiki = (query) => {
  const url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&prop=extracts%7Cpageimages&explaintext=1&generator=search&exsentences=3&exlimit=20&exintro=1&piprop=thumbnail%7Cname&gsrsearch=${query}&gsrnamespace=*&gsrlimit=10`;

  return apiSkeleton(url, apiOpts, onSuccess, onFail);
};

export default queryWiki;
