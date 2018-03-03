/* global describe it expect */
import React from 'react';
import renderer from 'react-test-renderer';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';

import ButtonLink from './index';

const buttonAction = jest.fn();

configure({ adapter: new Adapter() });

describe('Component ButtonLink', () => {
  it('should be render without crash', () => {
    const component = renderer.create(<ButtonLink>button</ButtonLink>);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call onClick', () => {
    const component = mount(<ButtonLink onClick={buttonAction}> button </ButtonLink>);

    component.simulate('click');
    expect(buttonAction).toHaveBeenCalled();
  });
});
