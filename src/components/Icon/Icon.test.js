/* global describe it expect */
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';

import Icon from './index';

configure({ adapter: new Adapter() });

describe('Component Icon', () => {
  it('should render check', () => {
    const component = renderer.create(<Icon name="check" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render prev', () => {
    const component = renderer.create(<Icon name="prev" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render carretDown', () => {
    const component = renderer.create(<Icon name="carretDown" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render carretUp', () => {
    const component = renderer.create(<Icon name="carretUp" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render close', () => {
    const component = renderer.create(<Icon name="close" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
