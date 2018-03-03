/* eslint-disable */
import React from 'react'
import styled, { css } from 'styled-components'
import { storiesOf } from '@storybook/react'
import FormShop from './FormShop'

storiesOf('03 - Components', module).add('FormShop', () => (
  <div style={{maxWidth: 380, margin: '0 auto', textAlign: 'center'}}>
    <FormShop />
  </div>
))
