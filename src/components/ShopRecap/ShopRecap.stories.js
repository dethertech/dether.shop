/* eslint-disable */
import React from 'react'
import styled, { css } from 'styled-components'
import { storiesOf } from '@storybook/react'
import ShopRecap from './ShopRecap'

const openingHours = [
  {
    day: 'Monday',
    open: '8:00',
    close: '18:00'
  },{
    day: 'Tuesday',
    open: '8:00',
    close: '18:00'
  },{
    day: 'Wednesday',
    open: '8:00',
    close: '19:30'
  },{
    day: 'Thursday',
    open: '8:00',
    close: '18:00'
  },{
    day: 'Saturday',
    open: '10:00',
    close: '19:00'
  }
]

const shop = {
  name: 'H&M',
  category: 'Clothing',
  address: '33 rue de Cotte, 75012 Paris',
  description: 'Clothes and other stufs'
}

storiesOf('03 - Components', module).add('ShopRecap', () => (
    <ShopRecap openingHours={openingHours} {...shop} />
))
