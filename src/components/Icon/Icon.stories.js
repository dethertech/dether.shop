/* eslint-disable */
import React from 'react'
import styled, { css } from 'styled-components'
import { storiesOf } from '@storybook/react'
import Icon from './Icon'

storiesOf('03 - Components', module)
.addWithChapters('Icons', {
  chapters: [
    {
      sections: [
        {
          title: 'check icon',
          sectionFn: () => <Icon name="check" strokeWidth="0.2rem"/>,
          options: {
            showSource: true,
            showPropTables: false
          }
        },{
          title: 'close icon',
          sectionFn: () => <Icon name="close" />,
          options: {
            showSource: true,
            showPropTables: false
          }
        },{
          title: 'prev icon',
          sectionFn: () => <Icon name="prev" />,
          options: {
            showSource: true,
            showPropTables: false
          }
        },{
          title: 'carretDown icon',
          sectionFn: () => <Icon name="carretDown" />,
          options: {
            showSource: true,
            showPropTables: false
          }
        },{
          title: 'carretUp icon',
          sectionFn: () => <Icon name="carretUp"/>,
          options: {
            showSource: true,
            showPropTables: false
          }
        },{
          title: 'carretRight icon',
          sectionFn: () => <Icon name="carretRight"/>,
          options: {
            showSource: true,
            showPropTables: false
          }
        }
      ]
    }
  ]
})
