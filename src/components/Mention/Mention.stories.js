/* eslint-disable */
import React from 'react'
import styled, { css } from 'styled-components'
import { storiesOf } from '@storybook/react'

import Mention from './index'

storiesOf('02 - Typography', module).add('Mention', () => (
  <div>
    <Mention>
      Hello je suis une Mention. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Consequuntur quaerat, doloremque neque voluptas ut laudantium similique nulla consequatur
      nesciunt labore enim, at numquam dolor fugit maxime commodi facere odio cupiditate.
    </Mention>
  </div>
))
