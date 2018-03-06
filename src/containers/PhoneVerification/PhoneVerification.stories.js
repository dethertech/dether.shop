/* eslint-disable */
import React from 'react'
import styled, { css } from 'styled-components'
import { storiesOf, addDecorator} from '@storybook/react'
import PhoneVerification from './PhoneVerification'
import { storyWithStore } from '../../helpers'

const initialStore = {
  kyc: {
    isSubmitPhonePending: false,
    isSubmitCodePending: false,
    phone: '',
    phoneSent: false,
    phoneCountry: null,
  },
  user: {
    ethAddress: '0x0000000000000000000000000000000000000000'
  }
}

storiesOf('04 - Screens/OnBoarding', module)
.addDecorator(storyWithStore(initialStore))
.add('Phone - PhoneVerification (all workflow)', () => (
  <PhoneVerification />
))
