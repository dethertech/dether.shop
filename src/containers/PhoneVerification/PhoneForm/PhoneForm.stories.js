/* eslint-disable */
import React from 'react'
import styled, { css } from 'styled-components'
import { storiesOf } from '@storybook/react'

import PhoneForm from './PhoneForm'

storiesOf('04 - Screens/OnBoarding', module).add('phone - PhoneForm (unconnected dom)', () => <PhoneForm onSubmit={(val) => alert(val)}/>)
