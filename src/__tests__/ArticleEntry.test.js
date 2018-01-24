import React from 'react';
import renderer from 'react-test-renderer';

import ArticleItem from '../components/ArticleEntry';

describe('Correctly renders an ArticleItem component', () => {
  it('ArticleItem renders without crashing', () => {
    const component = renderer.create(<ArticleItem />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
