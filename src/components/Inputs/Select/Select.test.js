/* global describe it expect jest */
import React from 'react';
import renderer from 'react-test-renderer';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';

import Select from './index';

const data = [
  'qwer',
  'trav',
  'hello',
];

const fn = jest.fn();

configure({ adapter: new Adapter() });

describe('Component Select', () => {
  it('should be render without crash', () => {
      const component = renderer.create(<Select
        data={data}
      />);
      const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call onChange when changing', () => {
      const component = mount(<Select
        data={data}
        onChange={fn}
      />);
      component.find('select').simulate('change');
      expect(fn).toHaveBeenCalled();
  });
});
