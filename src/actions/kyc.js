/*
  Constants
 */
import config from '../constants/config';

/**
 * sendSms
 * @param  {[type]} phoneNumber [description]
 * @param  {[type]} ethAddress  [description]
 * @param  {[type]} onSuccess   [description]
 * @param  {[type]} onError     [description]
 * @return {[type]}             [description]
 */
const sendSms = ({ phoneNumber, ethAddress, onSuccess, onError }) => ({
  type: 'API:SEND_SMS',
  url: config.kyc.urlSend,
  method: 'post',
  data: { phoneNumber, ethAddress },
  onSuccess,
  onError
});

/**
 * sendVerifCode
 * @param  {[type]} code        [description]
 * @param  {[type]} phoneNumber [description]
 * @param  {[type]} onSuccess   [description]
 * @param  {[type]} onError     [description]
 * @return {[type]}             [description]
 */
const sendVerifCode = ({ code, phoneNumber, onSuccess, onError }) => ({
  type: 'API:SEND_VERIF_CODE',
  url: config.kyc.urlVerif,
  method: 'post',
  data: { phoneNumber, code },
  onSuccess,
  onError
});

/**
 * setPhone
 * @param {[type]} phone [description]
 */
const setPhone = phone => ({
  type: 'SET_PHONE',
  payload: { phone }
});

/**
 * setPhoneCountry
 * @param {[type]} phoneCountry [description]
 */
const setPhoneCountry = phoneCountry => ({
  type: 'SET_PHONE_COUNTRY',
  payload: { phoneCountry }
});

/**
 * setPhoneSent
 * @param {[type]} phoneSent [description]
 */
const setPhoneSent = phoneSent => ({
  type: 'SET_PHONE_SENT',
  payload: { phoneSent }
});

/**
 * setPhoneVerified
 */
const setPhoneVerified = () => ({
  type: 'SET_PHONE_VERIFIED'
});

export {
  sendSms,
  setPhone,
  setPhoneCountry,
  setPhoneSent,
  setPhoneVerified,
  sendVerifCode
};
