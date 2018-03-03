/* global describe it expect */
import React from 'react';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import IdentityCard from './index';
import ShopInfos from './ShopInfos';

configure({ adapter: new Adapter() });

const props = {
  volumeTrade: 10.56,
  nbTrade: 4,
  amountToSell: 700,
  percentFees: 2.36,
  currency: "$"
}

describe('Component IdentityCard', () => {

  it('should be render shopCard without crash', () => {
    const component = renderer.create(
      <IdentityCard buttonLink="http://google.com" buttonText="Itinerary" cardName="Shop Name">
        <ShopInfos
          title="Welcome"
          adress="31 rue de Cotte 75012 Paris"
          description="Vente d'articles cuisine et déco pour toute la maison."
        />
      </IdentityCard>);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
