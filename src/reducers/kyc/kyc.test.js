/* global describe it expect */
import deepFreeze from 'deep-freeze';

import kycReducer from './kyc';

describe('reducer::kyc', () => {
  let defaultAction;

  beforeEach(() => {
    defaultAction = {
      isSubmitPhonePending: false,
      isSubmitCodePending: false,
      phone: '',
      phoneSent: false,
      phoneCountry: null,
      phonreVerified: null,
    };
    deepFreeze(defaultAction);
  });

  describe('SET_PHONE', () => {
    const payload = '123456787654';
    const action = {
      type: 'SET_PHONE',
      payload,
    };

    it('should handle SET_PHONE', () => {
      expect(kycReducer(defaultAction, action))
        .toEqual({ ...defaultAction, phone: payload });
    });
  });

  describe('SET_PHONE_COUNTRY', () => {
    const payload = 'FR';
    const action = {
      type: 'SET_PHONE_COUNTRY',
      payload,
    };

    it('should handle SET_PHONE_COUNTRY', () => {
      expect(kycReducer(defaultAction, action))
      .toEqual({ ...defaultAction, phoneCountry: payload });
    });
  });

  describe('SET_PHONE_SENT', () => {
    const payload = true;
    const action = {
      type: 'SET_PHONE_SENT',
      payload,
    };

    it('should handle SET_PHONE_SENT', () => {
      expect(kycReducer(defaultAction, action))
      .toEqual({ ...defaultAction, phoneSent: payload });
    });
  });

  describe('SET_PHONE_VERIFIED', () => {
    const payload = true;
    const action = {
      type: 'SET_PHONE_VERIFIED',
    };

    it('should handle SET_PHONE_VERIFIED', () => {
      expect(kycReducer(defaultAction, action).phoneVerified instanceof Date).toEqual(true)
    });
  });

  describe('SEND_SMS_PENDING', () => {
    const payload = true;
    const action = {
      type: 'SEND_SMS_PENDING',
    };

    it('should handle SEND_SMS_PENDING', () => {
      expect(kycReducer(defaultAction, action))
      .toEqual({ ...defaultAction, isSubmitPhonePending: payload });
    });
  });

  describe('SEND_SMS_SUCCESS', () => {
    const payload = false;
    const action = {
      type: 'SEND_SMS_SUCCESS',
    };

    it('should handle SEND_SMS_SUCCESS', () => {
      expect(kycReducer(defaultAction, action))
      .toEqual({ ...defaultAction, isSubmitPhonePending: payload, phoneSent: true });
    });
  });

  describe('SEND_SMS_ERROR', () => {
    const payload = false;
    const action = {
      type: 'SEND_SMS_ERROR',
    };

    it('should handle SEND_SMS_ERROR', () => {
      expect(kycReducer(defaultAction, action))
      .toEqual({ ...defaultAction, isSubmitPhonePending: payload });
    });
  });

  describe('SEND_VERIF_CODE_PENDING', () => {
    const payload = true;
    const action = {
      type: 'SEND_VERIF_CODE_PENDING',
    };

    it('should handle SEND_VERIF_CODE_PENDING', () => {
      expect(kycReducer(defaultAction, action))
      .toEqual({ ...defaultAction, isSubmitCodePending: payload });
    });
  });

  describe('SEND_VERIF_CODE_SUCCESS', () => {
    const payload = false;
    const action = {
      type: 'SEND_VERIF_CODE_SUCCESS',
    };

    it('should handle SEND_VERIF_CODE_SUCCESS', () => {
      expect(kycReducer(defaultAction, action))
      .toEqual({ ...defaultAction, isSubmitCodePending: payload });
    });
  });

  describe('SEND_VERIF_CODE_ERROR', () => {
    const payload = false;
    const action = {
      type: 'SEND_VERIF_CODE_ERROR',
    };

    it('should handle SEND_VERIF_CODE_ERROR', () => {
      expect(kycReducer(defaultAction, action))
      .toEqual({ ...defaultAction, isSubmitCodePending: payload });
    });
  });
})
