import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ShowShop } from './ShowShop';

jest.mock('axios', () => ({
  CancelToken: {
    source: () => ({
      token: '',
    }),
  },
}));
describe('Containers::ShowShop', () => {

  const shop = {
    lat: '30',
    lng: '3',
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
    addDeleteShopTransaction: () => null,
    openNotificationModal: () => null,
    isTransactionPending: false,
    deleteContractShop: () => null,
    removeShopFromStore: () => null,
    transactionHash: "0xwefwerfer",
    endTransaction: () => null,
    fetchAll: () => null,
    centerPosition: { lat: 30, lng: 3 },
    reloadShops: () => null,
    dispatchHideShopWillAppearNotice: () => null,
    shallIDisplayShopNotice: false,
  };
  const component = props => <ShowShop {...props} />

  it('should match shallow snapshop', () => {
    expect(shallow(component(props))).toMatchSnapshot('ShowShop::shallow');
  });
  it('should match mounted snapshop', () => {
    expect(toJson(component(props))).toMatchSnapshot('ShowShop::mount');
  });
});
