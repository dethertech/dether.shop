/* global describe it expect */
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ShopIcon, PersonIcon, ClusterShopIcon, ClusterPersonIcon } from './index';

describe('Components MapIcons', () => {
  it('should render ShopIcon', () => {
    const component = renderer.create(<ShopIcon />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a ClusterShopIcon', () => {
    const component = renderer.create(<ClusterShopIcon num={3} />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
