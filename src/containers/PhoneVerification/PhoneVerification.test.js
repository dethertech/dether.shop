import React from 'react';
import { shallow } from 'enzyme';
import { PhoneVerification } from './PhoneVerification';

describe('Containers::PhoneVerification', () => {
  let wrapper;

  beforeEach(() => {
    let requiredProps = {
      isSubmitPhonePending: false,
      sendSms: () => null,
      setPhone: () => null,
      setPhoneCountry: () => null,
      setPhoneSent: () => null,
      ethAddress: '0xawefwefweweq',
      phoneSent: true,
      phoneVerified: false,
      phone: '623423423'
    }
    wrapper = shallow((
      <PhoneVerification
        {...requiredProps}
      />
    ))
  });

  it('should match snapshop', () => {
    expect(wrapper).toMatchSnapshot();
  })
});
