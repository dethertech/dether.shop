/* global describe it expect */
import React from 'react';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Shake from './index';

configure({ adapter: new Adapter() });

describe('Component Shake', () => {
  const child = <p>Child</p>;
  const component = renderer.create(<Shake toggle={5}>{child}</Shake>);
  const tree = component.toJSON();

  it('should be render without crash', () => {
    expect(tree).toMatchSnapshot();
  });
});
