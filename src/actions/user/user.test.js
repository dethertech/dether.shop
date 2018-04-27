/* global describe it expect */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {
  setEthAddress,
  setBalance,
} from './user';

configure({ adapter: new Adapter() });

describe('Kyc actions', () => {
  it('should create an actions to set the user balance' , () => {
    const payload = {
      eth: 0,
      dth: 0
    };
    const expectedAction = {
      payload,
      type: 'SET_BALANCE'
    }
    expect(setBalance(payload)).toEqual(expectedAction);
  })

  it('should create an actions to set the user balance' , () => {
    const payload = null;
    const expectedAction = {
      payload,
      type: 'SET_ETH_ADDRESS'
    }
    expect(setEthAddress(payload)).toEqual(expectedAction);
  })

});
