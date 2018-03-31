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

  it('should create an actions to set center position' , () => {
    const payload = { lat: 48.8628, lng: 2.3292 };
    const expectedAction = {
      payload,
      type: 'SET_CENTER_POSITION'
    }
    expect(setCenterPosition(payload)).toEqual(expectedAction);
  })

  it('should create an actions to set user info' , () => {
    const payload = {};
    const expectedAction = {
      payload: {
        userInfo: {},
      },
      type: 'SET_USER_INFO'
    }
    expect(setUserInfo(payload)).toEqual(expectedAction);
  })

  it('should create an actions to set shop on card' , () => {
    const payload = {};
    const expectedAction = {
      payload,
      type: 'SET_SHOP_ON_CARD'
    }
    expect(setShopOnCard(payload)).toEqual(expectedAction);
  })

  it('should create an actions to open card' , () => {
    const expectedAction = {
      type: 'OPEN_CARD'
    }
    expect(openCard()).toEqual(expectedAction);
  })

  it('should create an actions to close card' , () => {
    const expectedAction = {
      type: 'CLOSE_CARD'
    }
    expect(closeCard()).toEqual(expectedAction);
  })

  it('should create an actions to set initiated map' , () => {
    const expectedAction = {
      type: 'SET_MAP_INITIATED'
    }
    expect(setMapInitiated()).toEqual(expectedAction);
  })



  it('should create an actions to fecth shops' , () => {
    const payload = {};
    const expectedAction = {
      params: {},
      type: 'API:FETCH_SHOPS',
      url: '/shop',
    }
    expect(fetchShops(payload)).toEqual(expectedAction);
  })

  it('should create an action to fetch position by ip', () => {
    const payload = () => {}

    const expectedAction = {
      type: 'API:FETCH_POSITION_BY_IP',
      url: `https://ipinfo.io/json?token=${process.env.REACT_APP_TOKEN_IPINFO}`
    }

    expect(fetchPositionByIp(payload)).toMatchObject(expectedAction);
  })

  /**
   * TODO: add tests for
   * - fetchPosition()
   * - fetchAll()
   */
});
