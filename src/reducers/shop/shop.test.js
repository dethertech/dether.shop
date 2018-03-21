/* global describe it expect */
import deepFreeze from 'deep-freeze';

import shopReducer from './shop';

describe('reducer::shop', () => {
  let defaultAction;

  beforeEach(() => {
    defaultAction = {
      transactionType: 'add',
      transactionHash: null, // if transactionHash !== null so you have a Transaction in pending
      shop: null,
      pendingShop: {
        lat: null,
        lng: null,
        address: null,
        countryId: null,
        postalCode: null,
        name: '',
        description: '',
        cat: '',
        opening: '0000000'
      }
    };
    deepFreeze(defaultAction);
  });

  it('should return the initial state', () => {
    expect(shopReducer(undefined, {})).toEqual(defaultAction);
  });

  describe('SET_DATA_SHOP_PENDING', () => {
    const payload = {
      lat: 1.1,
      lng: 2.2,
      address: '132 frr',
      countryId: 'GI',
      postalCode: null,
      name: '',
      description: '',
      cat: '',
      opening: '0000000'
    }
    const action = {
      type: 'SET_DATA_SHOP_PENDING',
      payload,
    };

    it('should handle SET_DATA_SHOP_PENDING', () => {
      expect(shopReducer(defaultAction, action))
        .toEqual({ ...defaultAction, pendingShop: payload });
    });
  });

  describe('ADD_TRANSACTION', () => {
    const payload = {
      type: 'del',
      hash: '0x23rt23gf234gg234gf234g43g',
    }
    const action = {
      type: 'ADD_TRANSACTION',
      payload,
    };

    it('should handle ADD_TRANSACTION', () => {
      expect(shopReducer(defaultAction, action))
        .toEqual({
          ...defaultAction,
          transactionType: payload.type,
          transactionHash: payload.hash
        });
    });
  });

  describe('ADD_SHOP', () => {
    const payload = {
      lat: 1.1,
      lng: 2.2,
      address: '132 frr',
      countryId: 'GI',
      postalCode: null,
      name: '',
      description: '',
      cat: '',
      opening: '0000000'
    }
    const action = {
      type: 'ADD_SHOP',
      payload,
    };

    it('should handle ADD_SHOP', () => {
      expect(shopReducer(defaultAction, action))
        .toEqual({
          ...defaultAction,
          shop: payload,
        });
    });
  });

  describe('REMOVE_SHOP', () => {
    const action = {
      type: 'REMOVE_SHOP',
    };

    it('should handle REMOVE_SHOP', () => {
      expect(shopReducer(defaultAction, action))
        .toEqual({
          ...defaultAction,
        });
    });
  });

  describe('END_TRANSACTION', () => {
    const action = {
      type: 'END_TRANSACTION',
    };

    it('should handle END_TRANSACTION', () => {
      expect(shopReducer(defaultAction, action))
        .toEqual({
          ...defaultAction,
        });
    });
  });
})
