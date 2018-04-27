const initialState = {
  isSubmitPhonePending: false,
  isSubmitCodePending: false,
  phone: '',
  phoneSent: false,
  phoneCountry: null,
  phoneVerified: null,
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
    case 'SEND_SMS_PENDING':
      return { ...state, isSubmitPhonePending: true };
    case 'SEND_SMS_SUCCESS':
      return { ...state, isSubmitPhonePending: false, phoneSent: true };
    case 'SEND_SMS_ERROR':
      return { ...state, isSubmitPhonePending: false };
    case 'SEND_VERIF_CODE_PENDING':
      return { ...state, isSubmitCodePending: true };
    case 'SEND_VERIF_CODE_SUCCESS':
      return { ...state, isSubmitCodePending: false };
    case 'SEND_VERIF_CODE_ERROR':
      return { ...state, isSubmitCodePending: false };
    case 'RESET_KYC':
      return { ...initialState };
    case 'FETCH_USER_CERTIFIED_SUCCESS': {
      const { status } = payload.data.data;
      if (status === 'error')
        return { ...state, phoneVerified: null, phoneSent: false };
      return state;
    }
    case 'SET_PHONE_VERIFIED':
      return { ...state, phoneVerified: new Date() };
    case 'RESET_PHONE_VERIFIED':
      return { ...state, phoneVerified: null };
    default:
      return state;
  }
};

export default kycReducer;
