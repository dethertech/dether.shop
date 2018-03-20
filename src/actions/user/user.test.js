/* global describe it expect */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {
  setEthAddress,
  setBalance,
  setUserCertified
} from './user';

configure({ adapter: new Adapter() });

describe('Kyc actions', () => {
  it('should create an actions to set user certified' , () => {
    const payload = true;
    const expectedAction = {
      payload,
      type: 'SET_USER_CERTIFIED'
    }
    expect(setUserCertified(payload)).toEqual(expectedAction);
  })
});
