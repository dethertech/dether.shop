/* eslint-disable */
import React from 'react'
import styled, { css } from 'styled-components'
import { storiesOf, addDecorator} from '@storybook/react'
import ShowShop from './ShowShop'
import { storyWithStore } from '../../helpers'

const initialStore = {
  shop: {
    shop: {
      lat: null,
      lng: null,
      address: '40 rue Citadelle Paris',
      countryId: 'fr',
      postalCode: '75010',
      name: 'Magasin',
      description: 'Super Magasin',
      cat: 'cool',
      opening: '0000000'
    }
  }
}

storiesOf('04 - Screens/ShowShop', module)
.addDecorator(storyWithStore(initialStore))
.add('ShowShop', () => (
  <ShowShop />
))
