/* eslint-disable */
import React from 'react'
import styled, { css } from 'styled-components'
import { storiesOf, addDecorator} from '@storybook/react'
import PhoneVerification from './PhoneVerification'
import { storyWithStore } from '../../../helpers/stories'

const initialStore = {
  wallet: {
    ethAddress: '0xc8CD2AEe06D6DB355259AA72df6C675A9c579109',
  }
}

storiesOf('04 - Screens/OnBoarding', module)
.addDecorator(storyWithStore(initialStore))
.add('Phone - PhoneVerification (all workflow)', () => (
  <PhoneVerification />
))
