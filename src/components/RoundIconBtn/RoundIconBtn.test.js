/* global describe it expect jest */
import React from 'react';
import renderer from 'react-test-renderer';
import { mount, configure } from 'enzyme';
import 'jest-styled-components';
import Adapter from 'enzyme-adapter-react-16';
import RoundIconBtn from './index';

configure({ adapter: new Adapter() });

const buttonAction = jest.fn();

describe('Component RoundIconBtn', () => {
  it('should render close RoundIconBtn', () => {
    const component = renderer.create(<RoundIconBtn type="close" />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render prev RoundIconBtn', () => {
    const component = renderer.create(<RoundIconBtn type="prev" />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call onClick', () => {
    const component = mount(<RoundIconBtn type="close" onClick={buttonAction} />);

    component.simulate('click');
    expect(buttonAction).toHaveBeenCalled();
  });
});
