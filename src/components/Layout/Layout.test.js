/* global describe it expect */
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Layout from './index';

describe('Component Layout', () => {
  it('should render Layout', () => {
    const component = renderer.create(
      <Layout>
        <Layout.Header>Header</Layout.Header>
        <Layout.Body>Body</Layout.Body>
        <Layout.Footer>Footer</Layout.Footer>
      </Layout>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
