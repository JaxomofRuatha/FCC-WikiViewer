import { transformResults } from '../store/data/ajax/query-wiki';
import testdata from './helpers/sampleapi.json';

describe('API data transformation', () => {
  it('returns an Immutable Map', () => {
    const results = transformResults(testdata.query.pages, 'Uganda');
    // Determine best method for testing if Immutable Map
  });
});
