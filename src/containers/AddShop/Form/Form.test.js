import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Form } from './Form';

describe('Containers::AddShop::Form', () => {
  let wrapper;
  const shop = {
    lat: null,
    lng: null,
    address: '40 rue Citadelle Paris',
    countryId: 'fr',
    postalCode: '75010',
    name: 'Magasin',
    description: 'Super Magasin',
    cat: 'cool',
    opening: '0000000'
  };

  const props = {
    shop,
    setDataShopPending: () => null,
    setCenterPosition: () => null,
    onSubmit: () => null
  }
  const component = props => <Form {...props} />

  it('should match shallow snapshop', () => {
    expect(shallow(component(props))).toMatchSnapshot('Form::shallow');
  });
  it('should match mounted snapshop', () => {
    expect(toJson(component(props))).toMatchSnapshot('Form::mount');
  });
});
