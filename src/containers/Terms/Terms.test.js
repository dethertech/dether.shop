/* global describe it expect */
import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router'
import 'jest-styled-components';

import Terms from './index';

describe('Component Terms', () => {
  it('should render Terms', () => {
    const component = renderer.create(<MemoryRouter initialEntries={['/term']}><Terms /></MemoryRouter>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
