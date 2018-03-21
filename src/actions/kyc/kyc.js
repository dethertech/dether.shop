/*
  Constants
 */
import { config } from '../../constants';

/**
 * sendSms
 * @param  {string}   phoneNumber   user phone number
 * @param  {string}   ethAddress    user ethereum address
 * @param  {function} onSuccess     Success function
 * @param  {function} onError       Error function
 * @return {object}                 Action
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
 * @param  {string}   code          Code verification
 * @param  {string}   phoneNumber   user phone number
 * @param  {function} onSuccess     Success function
 * @param  {function} onError       Error function
 * @return {object}                 Action
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
 * @param {String} phone Phone number
 */
const setPhone = phone => ({
  type: 'SET_PHONE',
  payload: phone
});

/**
 * setPhoneCountry
 * @param {string} phoneCountry ISO country
 */
const setPhoneCountry = phoneCountry => ({
  type: 'SET_PHONE_COUNTRY',
  payload: phoneCountry
});

/**
 * setPhoneSent
 * @param {boolean} phoneSent [description]
 */
const setPhoneSent = phoneSent => ({
  type: 'SET_PHONE_SENT',
  payload: phoneSent
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
