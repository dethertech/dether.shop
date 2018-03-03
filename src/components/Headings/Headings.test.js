/* global describe it expect */
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { H1, H2, H3 } from './index';

describe('Components Headings', () => {
  it('should render H1', () => {
    const component = renderer.create(<H1>H1</H1>);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a light H1', () => {
    const component = renderer.create(<H1 light>H1</H1>);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a light H2', () => {
    const component = renderer.create(<H2 light>H2</H2>);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a light H2', () => {
    const component = renderer.create(<H2 light>H2</H2>);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a light H3', () => {
    const component = renderer.create(<H3 light>H3</H3>);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a light H3', () => {
    const component = renderer.create(<H3 light>H3</H3>);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
