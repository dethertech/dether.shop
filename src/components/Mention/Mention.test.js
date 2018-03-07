/* global describe it expect */
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Mention from './index';

describe('Components Mention', () => {
  it('should render Mention', () => {
    const component = renderer.create(<Mention>Mention</Mention>);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
