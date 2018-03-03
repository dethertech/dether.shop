import config from '../constants/config';

const sendSms = ({ phoneNumber, ethAddress, onSuccess, onError }) => ({
  type: 'API:SEND_SMS',
  url: config.kyc.urlSend,
  method: 'post',
  data: { phoneNumber, ethAddress },
  onSuccess,
  onError
});

const setPhone = phone => ({
  type: 'SET_PHONE',
  payload: { phone }
});

const setPhoneCountry = phoneCountry => ({
  type: 'SET_PHONE_COUNTRY',
  payload: { phoneCountry }
});

const setPhoneSent = phoneSent => ({
  type: 'SET_PHONE_SENT',
  payload: { phoneSent }
});

const setPhoneVerified = () => ({
  type: 'SET_PHONE_VERIFIED'
});


export {
  sendSms,
  setPhone,
  setPhoneCountry,
  setPhoneSent,
  setPhoneVerified
};
