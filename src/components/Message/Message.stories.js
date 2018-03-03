/* eslint-disable */
import React from 'react'
import styled, { css } from 'styled-components'
import { storiesOf } from '@storybook/react'

import Message from './index'

storiesOf('03 - Components', module)
.addWithChapters('Messages', {
  subtitle: 'Message error',
  chapters: [
    {
      sections: [
      {
        title: 'Select Input',
        sectionFn: () => (
          <Message theme="error">
            Hello je suis une erreur. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur quaerat, doloremque neque voluptas ut laudantium similique nulla consequatur
            nesciunt labore enim, at numquam dolor fugit maxime commodi facere odio cupiditate.
          </Message>
        ),
        options: {
          showSource: true,
          showPropTables: true
        }
      },{
        title: 'Select Input',
        sectionFn: () => (
          <Message theme="info">
            Hello je suis un Message. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur quaerat, doloremque neque voluptas ut laudantium similique nulla consequatur
            nesciunt labore enim, at numquam dolor fugit maxime commodi facere odio cupiditate.
          </Message>
        ),
        options: {
          showSource: true,
          showPropTables: true
        }
      },{
        title: 'Select Input',
        sectionFn: () => (
          <Message withIcon={false} >
            Hello je suis un Message sans icone. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur quaerat, doloremque neque voluptas ut laudantium similique nulla consequatur
            nesciunt labore enim, at numquam dolor fugit maxime commodi facere odio cupiditate.
          </Message>
        ),
        options: {
          showSource: true,
          showPropTables: true
        }
      }
    ]
  }]
});
