/* global describe it expect */
import React from 'react';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ShopInfos from './index';

configure({ adapter: new Adapter() });

describe('Component IdentityCard/ShopInfos', () => {
  const component = renderer
    .create(<ShopInfos
      title="Welcome"
      adress="31 rue de Cotte 75012 Paris"
      description="Vente d'articles cuisine et déco pour toute la maison."
    />);

  const tree = component.toJSON();

  it('should be render without crash', () => {
    expect(tree).toMatchSnapshot();
  });
});
