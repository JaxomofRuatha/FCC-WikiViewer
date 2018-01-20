import { schema } from 'normalizr';

// From each page, grabbing the route

// title
const titleSchema = new schema.Entity('title', {
  idAttribute: 'pageid'
});
// extract
const extractSchema = new schema.Entity('extract', {
  idAttribute: 'pageid'
});
// thumbnail.source
const thumbnailSchema = new schema.Entity('thumbnail', {
  idAttribute: 'pageid'
});

const article = new schema.Object('article', {
  title: titleSchema,
  extract: extractSchema,
  thumbnail: thumbnailSchema
});

export default article;
