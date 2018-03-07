/* eslint-disable */
import React from 'react'
import styled, { css } from 'styled-components'
import { storiesOf } from '@storybook/react'

import LoaderScreen from './index'

storiesOf('04 - Screens/general', module).add('LoaderScreen', () => <LoaderScreen message="wait" title="Load" />)
