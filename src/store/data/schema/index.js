import { schema } from 'normalizr';

const articleSchema = new schema.Entity('articles');
const articleListSchema = [articleSchema];

export default articleListSchema;
