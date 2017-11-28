import React from 'react';
import renderer from 'react-test-renderer';

import App from '../src/App';

describe('Renders App component correctly', () => {
  it('App renders test text', () => {
    const component = renderer.create(<App />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
