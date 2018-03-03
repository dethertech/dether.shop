/* eslint-disable */
import React from 'react'
import styled, { css } from 'styled-components'
import { storiesOf } from '@storybook/react'
import RoundIconBtn from './RoundIconBtn'

storiesOf('03 - Components', module).addWithChapters('Rounded Icon Button', {
  subtitle: 'Are used for navigation purpose (next prev close play) etc...',
  chapters: [
    {
      sections: [
        {
          title: 'Close rounded button',
          sectionFn: () => <RoundIconBtn type="close" />,
          options: {
            showSource: true,
            showPropTables: true
          }
        },
        {
          title: 'Prev rounded button',
          sectionFn: () => <RoundIconBtn type="prev" />,
          options: {
            showSource: true,
            showPropTables: true
          }
        }
      ]
    }
  ]
})
