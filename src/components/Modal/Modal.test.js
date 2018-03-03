/* global describe it expect */
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Modal from './index';

configure({ adapter: new Adapter() });

describe('Component Modal', () => {
  const component = renderer
    .create(<Modal><p>Modal</p><p>Home</p></Modal>);
  const tree = component.toJSON();

  it('should be render without crash', () => {
    expect(tree).toMatchSnapshot();
  });
});
