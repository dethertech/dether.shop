/* global describe it expect */
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import ShopRecap from './index';

const openingHours = [
  {
    day: 'Monday',
    open: '8:00',
    close: '18:00'
  },{
    day: 'Tuesday',
    open: '8:00',
    close: '18:00'
  },{
    day: 'Wednesday',
    open: '8:00',
    close: '19:30'
  },{
    day: 'Thursday',
    open: '8:00',
    close: '18:00'
  },{
    day: 'Saturday',
    open: '10:00',
    close: '19:00'
  }
]

const shop = {
  name: 'H&M',
  category: 'Clothing',
  address: '33 rue de Cotte, 75012 Paris',
  description: 'Clothes and other stufs'
}

describe('Components ShopRecap', () => {
  it('should render ShopRecap', () => {
    const component = renderer.create(<ShopRecap openingHours={openingHours} {...shop} />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
