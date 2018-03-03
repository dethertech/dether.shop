/* global describe it expect */
import React from 'react';
import renderer from 'react-test-renderer';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components'

import Input from './index';

configure({ adapter: new Adapter() });

const fn = jest.fn()

describe('Component Input', () => {

  it('should be render without crash', () => {
    const component = renderer.create(<Input
      name="name"
      value="value"
      onChange={() => {}}
    />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with error style', () => {
    const component = renderer.create(<Input
      name="name"
      hasError
      value="value"
      onChange={() => {}}
    />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with valid style', () => {
    const component = renderer.create(<Input
      name="name"
      isValid
      value="value"
      onChange={() => {}}
    />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call onChange when changing', () => {
      const component = mount(<Input
        name="name"
        value="value"
        onChange={fn}
      /> );
      component.find('input').simulate('change');
      expect(fn).toHaveBeenCalled();
  });

  it('should call onBlur when bluring', () => {
      const component = mount(<Input
        name="name"
        value="value"
        onBlur={fn}
      /> );
      component.find('input').simulate('blur');
      expect(fn).toHaveBeenCalled();
  });
});
