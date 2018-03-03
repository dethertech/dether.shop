/* eslint-disable */
import React from 'react'
import styled, { css } from 'styled-components'
import { storiesOf } from '@storybook/react'

import IdentityCard from './index';
import ShopInfos from './ShopInfos';

const props = {
  volumeTrade: 10.56,
  nbTrade: 4,
  amountToSell: 700,
  percentFees: 2.36,
  currency: "$"
}

storiesOf('03 - Components/IdentityCard', module)
.add('Shop IdentityCard', () => (
  <div style={{maxWidth: 340, margin: "0 auto"}}>
    <IdentityCard buttonLink="http://google.com" buttonText="Itinerary" cardName="Shop Name">
      <ShopInfos
        title="Welcome"
        adress="31 rue de Cotte 75012 Paris"
        description="Vente d'articles cuisine et déco pour toute la maison."
      />
    </IdentityCard>
  </div>
))
