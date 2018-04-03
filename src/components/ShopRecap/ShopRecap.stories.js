/* eslint-disable */
import React from 'react'
import styled, { css } from 'styled-components'
import { storiesOf } from '@storybook/react'
import ShopRecap from './ShopRecap'


const shop = {
  name: 'H&M',
  category: 'Clothing',
  address: '33 rue de Cotte, 75012 Paris',
  description: 'Clothes and other stufs',
  opening: '0000000',
}

storiesOf('03 - Components', module).add('ShopRecap', () => (
    <ShopRecap {...shop} />
))
