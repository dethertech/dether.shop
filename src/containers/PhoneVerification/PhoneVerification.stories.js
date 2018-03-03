/* eslint-disable */
import React from 'react'
import styled, { css } from 'styled-components'
import { storiesOf, addDecorator} from '@storybook/react'
import PhoneVerification from './PhoneVerification'
import { storyWithStore } from '../../helpers/stories'

const initialStore = {
}

storiesOf('04 - Screens/OnBoarding', module)
.addDecorator(storyWithStore(initialStore))
.add('Phone - PhoneVerification (all workflow)', () => (
  <PhoneVerification />
))
