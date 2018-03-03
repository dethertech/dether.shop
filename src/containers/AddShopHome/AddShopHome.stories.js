/* eslint-disable */
import React from 'react'
import styled from 'styled-components'
import { storiesOf, addDecorator } from '@storybook/react'
import { storyWithStore } from '../../helpers/stories'
import { AddShopHome } from './AddShopHome'

storiesOf('04 - Screens/AddShopHome', module)
.add('EnougthMoney', () => <AddShopHome
  hasEnougthMoney={true}
  isMetamaskInstalled={true}
  isPhoneVerified={true}
  minEth={0.10945895866895045986}
  minDth={5.10945895866895045986}
/>)

storiesOf('04 - Screens/AddShopHome', module)
.add('Not EnougthMoney', () => <AddShopHome
  hasEnougthMoney={false}
  isMetamaskInstalled={true}
  isPhoneVerified={true}
  minEth={0.10945895866895045986}
  minDth={5.10945895866895045986}
/>)

storiesOf('04 - Screens/AddShopHome', module)
.add('Metamask not installed', () => <AddShopHome
  hasEnougthMoney={true}
  isMetamaskInstalled={false}
  isPhoneVerified={true}
  minEth={0.10945895866895045986}
  minDth={5.10945895866895045986}
/>)
