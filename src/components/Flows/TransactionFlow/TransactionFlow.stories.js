/* eslint-disable */
import React from 'react'
import styled, { css } from 'styled-components'
import { storiesOf } from '@storybook/react'
import { GeocodeAPI } from '../../../helpers';

import TransactionFlow from './index'
import TransactionFlowRecap from './TransactionFlowRecap';

const shop = {
  name: 'H&M',
  cat: 'Clothing',
  description: 'Clothes and other stufs',
  opening: '0000000',
  lat: '48.856614',
  lng: '2.352222',
};

const loader = {
  message: 'Loader',
  title: 'wat'
};

storiesOf('04 - Screens/TransactionFlow', module)
  .add('RecapScreen', () => (
    <TransactionFlowRecap
      shop={shop}
      message="A transaction is pending"
    />
  ));
