/* global describe it expect */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {
  sendSms,
  setPhone,
  setPhoneCountry,
  setPhoneSent,
  setPhoneVerified,
  sendVerifCode
} from './kyc';

configure({ adapter: new Adapter() });

describe('Kyc actions', () => {
  it('should create an actions to set phone number' , () => {
    const payload = '00530353450346';
    const expectedAction = {
      payload,
      type: 'SET_PHONE'
    }
    expect(setPhone(payload)).toEqual(expectedAction);
  })
});
