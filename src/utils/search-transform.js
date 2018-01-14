import apiSkeleton from './api-helpers';

const apiOpts = {
  method: 'POST'
};

const onSuccess = res => res.json();

const onFail = (err) => {
  throw err;
};

const queryWiki = (query) => {
  const url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&prop=extracts%7Cpageimages&explaintext=1&generator=search&exsentences=3&exlimit=20&exintro=1&piprop=thumbnail%7Cname&gsrsearch=${query}&gsrnamespace=*&gsrlimit=10`;

  apiSkeleton(url, apiOpts, onSuccess, onFail);
};

export default queryWiki;
