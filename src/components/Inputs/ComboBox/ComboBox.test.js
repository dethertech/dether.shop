/* global describe it expect */
import React from 'react';
import renderer from 'react-test-renderer';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components'

import ComboBox from './index';

configure({ adapter: new Adapter() });

const fn = jest.fn()

describe('Component ComboBox', () => {

  it('should be render without crash', () => {
    const component = renderer.create(<ComboBox name="combobox"/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
