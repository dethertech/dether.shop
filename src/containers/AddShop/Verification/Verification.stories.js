/* eslint-disable */
import React from 'react'
import styled, { css } from 'styled-components'
import { storiesOf } from '@storybook/react'
import Verification from './Verification'
import { storyWithStore } from '../../../helpers'

const initialStore = {
  shop: {
    pendingShop: {
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
};

storiesOf('04 - Screens/Verification', module)
  .addDecorator(storyWithStore(initialStore))
  .add('Verification', () => (
    <Verification shop={initialStore.shop.pendingShop} />
  ));
