import apiSkeleton from '../../../utils/api-helpers';
// import apiSimple from '../../../utils/api-simple';

async function queryWiki(query) {
  const url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&prop=extracts%7Cpageimages&explaintext=1&generator=search&exsentences=3&exlimit=20&exintro=1&piprop=thumbnail%7Cname&gsrsearch=${query}&gsrnamespace=*&gsrlimit=10`;

  const apiOpts = {
    method: 'POST'
  };

  const results = await apiSkeleton(url, apiOpts);

  return results.query.pages;
}

export default queryWiki;
