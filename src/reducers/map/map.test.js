/* global describe it expect */
import deepFreeze from 'deep-freeze';

import mapReducer from './map';

describe('reducer::map', () => {
  let defaultAction;

  beforeEach(() => {
    defaultAction = {
      userPosition: { lat: 48.8628, lng: 2.3292 },
      centerPosition: { lat: 48.8628, lng: 2.3292 },
      contentOnCard: {},
      mapInitiated: false,
      cardOpened: false,
      userInfo: {},
      tellers: [],
      shops: [],
    };
    deepFreeze(defaultAction);
  });

  describe('SET_USER_POSITION', () => {
    const payload = { lat: 1.8628, lng: 2.3292 };
    const action = {
      type: 'SET_USER_POSITION',
      payload,
    };

    it('should handle SET_USER_POSITION', () => {
      expect(mapReducer(defaultAction, action))
        .toEqual({ ...defaultAction, userPosition: payload });
    });
  });

  describe('SET_CENTER_POSITION', () => {
    const payload = { lat: 1.8628, lng: 2.3292 };
    const action = {
      type: 'SET_CENTER_POSITION',
      payload,
    };

    it('should handle SET_CENTER_POSITION', () => {
      expect(mapReducer(defaultAction, action))
        .toEqual({ ...defaultAction, centerPosition: payload });
    });
  });

  describe('SET_MAP_INITIATED', () => {
    const payload = true;
    const action = {
      type: 'SET_MAP_INITIATED',
    };

    it('should handle SET_MAP_INITIATED', () => {
      expect(mapReducer(defaultAction, action))
      .toEqual({ ...defaultAction, mapInitiated: payload });
    });
  });

  describe('FETCH_USER_INFO_SUCCESS', () => {
    const payload = {
      data: { country: 'GI', postal: '23433' }
    }
    const action = {
      type: 'FETCH_USER_INFO_SUCCESS',
      payload,
    };

    it('should handle FETCH_USER_INFO_SUCCESS', () => {
      expect(mapReducer(defaultAction, action))
        .toEqual({ ...defaultAction, userInfo: {
          iso: payload.data.country,
          postcode: payload.data.postal,
        } });
    });
  });
})
