/* eslint-disable */
import React from 'react'
import styled, { css } from 'styled-components'
import { storiesOf } from '@storybook/react'
import { storyWithStore } from '../../../helpers'

const initialStore = {
  wallet: {
    ethAddress: '0xc8CD2AEe06D6DB355259AA72df6C675A9c579109',
  }
}

import ValidateCode from './ValidateCodeContainer'

storiesOf('04 - Screens/OnBoarding', module)
.addDecorator(storyWithStore(initialStore))
.add('Phone - ValidateCode', () => (
  <ValidateCode
    phoneNumber="+33608145840"
    editPhoneNumber={() => { alert('edit') }}
    reSendSms={() => { alert('pending')}}
  />
))
