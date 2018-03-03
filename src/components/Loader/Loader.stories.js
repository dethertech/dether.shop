/* eslint-disable */
import React from 'react'
import styled, { css } from 'styled-components'
import { storiesOf } from '@storybook/react'
import Loader from './Loader'

storiesOf('03 - Components', module).add('Loader', () => (
  <div>
    loader small : <br />
    <Loader size="s" />
    <br />
    <br /> loader medium : <br /> <Loader />
    <br />
    <br /> loader large : <br />
    <Loader size="l" />
    <br />
    <br />
  </div>
))
