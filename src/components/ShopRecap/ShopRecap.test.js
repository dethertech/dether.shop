/* global describe it expect */
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import ShopRecap from './index';

const shop = {
  name: 'H&M',
  cat: 'Clothing',
  description: 'Clothes and other stufs',
  opening: '0000000',
  lat: '48.856614',
  lng: '2.352222'
}

describe('Components ShopRecap', () => {
  it('should render ShopRecap', () => {
    const component = renderer.create(<ShopRecap {...shop} />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
