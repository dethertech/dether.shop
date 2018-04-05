/* global describe it expect */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {
  addShop,
  removeShop,
  setDataShopPending,
} from './shop';

configure({ adapter: new Adapter() });

describe('Shop actions', () => {
  it('should create an actions to set data shop pending' , () => {
    const payload = {
      lat: null,
      lng: null,
      address: null,
      countryId: null,
      postalCode: null,
      name: '',
      description: '',
      cat: '',
      opening: '0000000'
    };
    const expectedAction = {
      payload,
      type: 'SET_DATA_SHOP_PENDING'
    }
    expect(setDataShopPending(payload)).toEqual(expectedAction);
  })

  it('should create an actions to add shop' , () => {
    const payload = null
    const expectedAction = {
      payload,
      type: 'ADD_SHOP'
    }
    expect(addShop(payload)).toEqual(expectedAction);
  })

  it('should create an actions to set end transaction' , () => {
    const expectedAction = {
      type: 'REMOVE_SHOP'
    }
    expect(removeShop()).toEqual(expectedAction);
  })
});
