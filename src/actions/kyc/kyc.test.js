/* global describe it expect */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { config } from '../../constants';

import {
  sendSms,
  setPhone,
  setPhoneCountry,
  setPhoneSent,
  sendVerifCode
} from './kyc';

configure({ adapter: new Adapter() });

describe('Kyc actions', () => {
  it('should create an action to send sms', () => {
    const payload = {
      phoneNumber: '04303403434',
      ethAddress: '0xa31D8Ed467866ebe78243E18390209D67E224D42',
      onError: () => {}
    }

    const expectedAction = {
      type: 'API:SEND_SMS',
      url: config.kyc.sendUrl,
      method: 'post',
      data: { phoneNumber: payload.phoneNumber, ethAddress: payload.ethAddress },
      onError: payload.onError
    }

    expect(sendSms(payload)).toEqual(expectedAction);
  })

  it('should create an action to send verification code', () => {
    const payload = {
      code: '0433',
      phoneNumber: '04303403434',
      onSuccess: () => {},
      onError: () => {}
    }

    const expectedAction = {
      type: 'API:SEND_VERIF_CODE',
      url: config.kyc.verifUrl,
      method: 'post',
      data: { code: payload.code, phoneNumber: payload.phoneNumber },
      onSuccess: payload.onSuccess,
      onError: payload.onError
    }

    expect(sendVerifCode(payload)).toEqual(expectedAction);
  })

  it('should create an actions to set phone number' , () => {
    const payload = '00530353450346';
    const expectedAction = {
      payload,
      type: 'SET_PHONE'
    }
    expect(setPhone(payload)).toEqual(expectedAction);
  })

  it('should create an actions to set phone country' , () => {
    const payload = 'AR';
    const expectedAction = {
      payload,
      type: 'SET_PHONE_COUNTRY'
    }
    expect(setPhoneCountry(payload)).toEqual(expectedAction);
  })


  it('should create an actions to set phone sent' , () => {
    const payload = true;
    const expectedAction = {
      payload,
      type: 'SET_PHONE_SENT'
    }
    expect(setPhoneSent(payload)).toEqual(expectedAction);
  })

});
