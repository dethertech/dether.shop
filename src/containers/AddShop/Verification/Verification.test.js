import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Verification } from './Verification';

jest.mock('axios', () => ({
  CancelToken: {
    source: () => ({
      token: '',
    }),
  },
}));
describe('Containers::AddShop::Verification', () => {

  const pendingShop = {
    lat: '30',
    lng: '3',
    addressString: '40 rue Citadelle Paris',
    countryId: 'fr',
    postalCode: '75010',
    name: 'Magasin',
    description: 'Super Magasin',
    cat: 'cool',
    opening: '0000000'
  };

  const props = {
    pendingShop,
    addShopToStore: () => null,
    addShopToContract: () => null,
    openNotificationModal: () => null,
    addAddShopTransaction: () => null,
    isTransactionPending: false,
    transactionHash: '0x23874grfb2yb38f4h23784',
    endTransaction: () => null,
    goBack: () => null,
    fetchAll: () => null,
    centerPosition: { lat: 30, lng: 3 },
    dispatchDisplayShopWillAppearNoticeAction: () => null,
  }

  const component = props => <Verification {...props} />

  it('should match shallow snapshop', () => {
    expect(shallow(component(props))).toMatchSnapshot('Verification::shallow');
  });
  it('should match mounted snapshop', () => {
    expect(toJson(component(props))).toMatchSnapshot('Verification::mount');
  });
});
