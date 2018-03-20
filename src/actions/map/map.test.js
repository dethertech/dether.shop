/* global describe it expect */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {
  setUserPosition,
  setCenterPosition,
  setMapInitiated,
  setShopOnCard,
  setUserInfo,
  fetchShops,
  fetchPosition,
  fetchPositionByIp,
  fetchUserInfo,
  fetchAll,
  openCard,
  closeCard,
} from './map';

configure({ adapter: new Adapter() });

describe('Map actions', () => {
  it('should create an actions to set user position' , () => {
    const payload = { lat: 48.8628, lng: 2.3292 };
    const expectedAction = {
      payload,
      type: 'SET_USER_POSITION'
    }
    expect(setUserPosition(payload)).toEqual(expectedAction);
  })
});
