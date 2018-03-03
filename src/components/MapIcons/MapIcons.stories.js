/* eslint-disable */
import React from 'react'
import styled, { css } from 'styled-components'
import { storiesOf } from '@storybook/react'

import { ShopIcon, PersonIcon, ClusterPersonIcon, ClusterShopIcon } from './index'

storiesOf('03 - Components/ Map Icons', module)
.add('ShopIcon', () => (
  <ShopIcon />
))
.add('PersonIcon', () => (
  <PersonIcon />
))
.add('ClusterPersonIcon', () => (
  <React.Fragment>
    <ClusterPersonIcon num={2} />
    <ClusterPersonIcon num={48} />
    <ClusterPersonIcon num={248} />
    <ClusterPersonIcon num={1448} />
  </React.Fragment>
))
.add('ClusterShopIcon', () => (
  <React.Fragment>
    <ClusterShopIcon num={2} />
    <ClusterShopIcon num={48} />
    <ClusterShopIcon num={248} />
    <ClusterShopIcon num={3448} />
  </React.Fragment>
))
