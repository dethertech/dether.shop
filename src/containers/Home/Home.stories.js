/* eslint-disable */
import React from 'react'
import styled from 'styled-components'
import { storiesOf, addDecorator } from '@storybook/react'
import { storyWithStore } from '../../helpers'
import { Home } from './Home'

storiesOf('04 - Screens/Home', module)
.add('EnougthMoney', () => <Home
  hasEnougthMoney={true}
  isMetamaskInstalled={true}
  isPhoneVerified={true}
  minEth={0.10945895866895045986}
  minDth={5.10945895866895045986}
/>)

storiesOf('04 - Screens/Home', module)
.add('Not EnougthMoney', () => <Home
  hasEnougthMoney={false}
  isMetamaskInstalled={true}
  isPhoneVerified={true}
  minEth={0.10945895866895045986}
  minDth={5.10945895866895045986}
/>)

storiesOf('04 - Screens/Home', module)
.add('Metamask not installed', () => <Home
  hasEnougthMoney={true}
  isMetamaskInstalled={false}
  isPhoneVerified={true}
  minEth={0.10945895866895045986}
  minDth={5.10945895866895045986}
/>)
