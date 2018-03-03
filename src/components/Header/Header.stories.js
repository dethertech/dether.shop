/* eslint-disable */
import React from 'react'
import styled, { css } from 'styled-components'
import { storiesOf } from '@storybook/react'
import Header from './Header'

storiesOf('03 - Components', module).add('Header', () => (
    <Header
      onRefresh={() => {}}
      EthBalance={2.456}
      DthBalance={25634}
    />
))
