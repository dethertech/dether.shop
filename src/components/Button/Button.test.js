/* global describe it expect */
import React from 'react';
import renderer from 'react-test-renderer';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';

import Button from './index';

const buttonAction = jest.fn();

configure({ adapter: new Adapter() });

describe('Component Button', () => {
  it('should be render without crash', () => {
    const component = renderer.create(<Button>button</Button>);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be render primary colored button', () => {
    const component = renderer.create(<Button theme="primary" >button</Button>);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be render danger colored button', () => {
    const component = renderer.create(<Button theme="danger" >button</Button>);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be render fullWidth button', () => {
    const component = renderer.create(<Button fullWidth >button</Button>);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call onClick', () => {
    const component = mount(<Button onClick={buttonAction}> button </Button>);

    component.simulate('click');
    expect(buttonAction).toHaveBeenCalled();
  });
});
