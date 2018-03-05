/* eslint-disable */
import React from 'react'
import styled, { css } from 'styled-components'
import { storiesOf } from '@storybook/react'
import {AddShopForm} from './AddShopForm'

storiesOf('03 - Components', module).add('AddShopForm', () => (
  <div style={{maxWidth: 380, margin: '0 auto', textAlign: 'center'}}>
    <AddShopForm
      shop={{}}
    />
  </div>
))
