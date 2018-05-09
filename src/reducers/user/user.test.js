/* global describe it expect */
import deepFreeze from 'deep-freeze';

import
  userReducer,
  {
    hasBalance,
    hasEnoughMoneyToAddShop,
    hasEnougthMoneyToRemoveShop
  }
from './user';

describe('reducer::user', () => {
  let defaultAction;

  beforeEach(() => {
    defaultAction = {
      balance: {
        eth: 0,
        dth: 0
      },
      isCertified: null,
      ethAddress: null,
      phoneVerified: null,
    };
    deepFreeze(defaultAction);
  });

  it('should return the initial state', () => {
    expect(userReducer(undefined, {})).toEqual(defaultAction);
  });

  describe('SET_BALANCE', () => {
    const payload = {
      eth: 4,
      dth: 3
    }
    const action = {
      type: 'SET_BALANCE',
      payload,
    };

    it('should handle SET_BALANCE', () => {
      expect(userReducer(defaultAction, action))
        .toEqual({ ...defaultAction, balance: payload });
    });
  });

  describe('SET_ETH_ADDRESS', () => {
    const payload = '0x92387534238402882350748'
    const action = {
      type: 'SET_ETH_ADDRESS',
      payload,
    };

    it('should handle SET_ETH_ADDRESS', () => {
      expect(userReducer(defaultAction, action))
        .toEqual({ ...defaultAction, ethAddress: payload });
    });
  });

  it('should check the balance', () => {
    expect(hasBalance({ balance: {
        eth: 10,
        dth: 10
      }
    })).toEqual(true)

    expect(hasBalance({ balance: {
        eth: 0,
        dth: 0
      }
    })).toEqual(false)
  })


  it('should the transactions price', () => {
    const licencePrice = 100;
    expect(hasEnoughMoneyToAddShop({ balance: {
        eth: 0,
        dth: 0
      }
    }, 40)).toEqual(false)

    expect(hasEnoughMoneyToAddShop({ balance: {
        eth: 0.00000000001,
        dth: 0
      }
    }, 40)).toEqual(false)

    expect(hasEnoughMoneyToAddShop({ balance: {
        eth: 0.0001,
        dth: 0
      }
    }, 40)).toEqual(false)

    expect(hasEnoughMoneyToAddShop({ balance: {
        eth: 0.0001,
        dth: 20
      }
    }, 40)).toEqual(false)
  })

  it('should check the balance to delete a shop', () => {
    expect(hasEnougthMoneyToRemoveShop({ balance: {
        eth: 0.000083,
        dth: 0
      }
    })).toEqual(false)
  })

})
