import { schema } from 'normalizr';

const titles = new schema.Entity('titles');
const extracts = new schema.Entity('extracts');
const thumbnails = new schema.Entity('thumbnails');

const article = new schema.Entity('articles', {
  titles,
  extracts,
  thumbnails
});

export default article;
