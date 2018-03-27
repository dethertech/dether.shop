/* global describe it expect */
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Header from './index';

describe('Components Header', () => {
  it('should render Header', () => {
    const component = renderer.create(<Header
      onRefresh={() => {}}
      EthBalance={'2.456'}
      DthBalance={'25634'}
      toggleBuyModal={() => null}
    />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
