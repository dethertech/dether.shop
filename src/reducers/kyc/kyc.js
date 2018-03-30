const initialState = {
  isSubmitPhonePending: false,
  isSubmitCodePending: false,
  phone: '',
  phoneSent: false,
  phoneVerif: false,
  phoneCountry: null,
};

/**
 * kycReducer
 */
const kycReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_PHONE':
      return { ...state, phone: payload };
    case 'SET_PHONE_COUNTRY':
      return { ...state, phoneCountry: payload };
    case 'SET_PHONE_SENT':
      return { ...state, phoneSent: payload };
    case 'SET_PHONE_VERIFIED':
      return { ...state, phoneVerif: true };
    case 'SEND_SMS_PENDING':
      return { ...state, isSubmitPhonePending: true };
    case 'SEND_SMS_SUCCESS':
      return { ...state, isSubmitPhonePending: false };
    case 'SEND_SMS_ERROR':
      return { ...state, isSubmitPhonePending: false };
    case 'SEND_VERIF_CODE_PENDING':
      return { ...state, isSubmitCodePending: true };
    case 'SEND_VERIF_CODE_SUCCESS':
      return { ...state, isSubmitCodePending: false };
    case 'SEND_VERIF_CODE_ERROR':
      return { ...state, isSubmitCodePending: false };
    default:
      return state;
  }
};

export default kycReducer;
