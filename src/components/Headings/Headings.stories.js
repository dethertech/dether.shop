/* eslint-disable */
import React from 'react'
import styled, { css } from 'styled-components'
import { storiesOf } from '@storybook/react'

import { H1, H2, H3 } from './Headings'

storiesOf('02 - Typography', module).add('Headings', () => (
  <div>
    <H1>Hello je suis un H1</H1>
    <H1 light>Hello je suis un H1 light</H1>
    <H2>Hello je suis un H2</H2>
    <H2 light>Hello je suis un H2 light</H2>
    <H3>Hello je suis un H3</H3>
    <H3 light>Hello je suis un H3</H3>
  </div>
))
