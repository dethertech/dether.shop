/* global describe it expect */
import React from 'react';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import 'jest-styled-components';
import Adapter from 'enzyme-adapter-react-16';

import SearchBarWrapper from './SearchBarWrapper';

configure({ adapter: new Adapter() });

const props = {
  setCenterPosition: () => {},
  fetchAll: () => {}
}

describe('Component SearchBar', () => {
  const component = renderer.create(<SearchBarWrapper><p>hello</p></SearchBarWrapper>);
  const tree = component.toJSON();

  it('should be render without crash', () => {
    expect(tree).toMatchSnapshot();
  });
});
