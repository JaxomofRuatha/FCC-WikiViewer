import * as actions from '../store/actions/article-actions';
import types from '../store/actions/constants';

describe('Article action creators', () => {
  it('should create an action to query the Wikipedia API', () => {
    const query = 'Uganda';
    const expectedAction = {
      type: types.REQUEST_ARTICLES,
      query
    };

    expect(actions.requestArticles(query)).toEqual(expectedAction);
  });

  it('should create an action to process JSON from Wikipedia', () => {
    const res = {
      query: {
        pages: {
          1: {
            pageId: 1,
            extract: 'Test extract data'
          }
        }
      }
    };
    const expectedAction = {
      type: types.RECEIVE_ARTICLES,
      res
    };

    expect(actions.receiveArticles(res)).toEqual(expectedAction);
  });

  it('should create an action to handle API failure', () => {
    const err = new Error('Something went wrong with the API call!');
    const expectedAction = {
      type: types.ERROR_ARTICLES,
      err
    };

    expect(actions.errorArticles(err)).toEqual(expectedAction);
  });
});
