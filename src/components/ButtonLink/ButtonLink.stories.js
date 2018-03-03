/* eslint-disable */
import React from 'react'
import styled, { css } from 'styled-components'
import { storiesOf } from '@storybook/react'
import ButtonLink from './ButtonLink'

storiesOf('03 - Components', module).addWithChapters('ButtonLink', {
  subtitle: 'ButtonLink',
  chapters: [
    {
      sections: [
        {
          title: 'Light button link',
          subtitle: 'the default button for secondary actions',
          sectionFn: () => <ButtonLink onClick={() => {}}>Hello</ButtonLink>,
          options: {
            showSource: true,
            showPropTables: false
          }
        },
        {
          title: 'Primary Theme Button link',
          subtitle: 'Primary CTA for important or engaging actions',
          sectionFn: () => (
            <ButtonLink onClick={() => {}} theme="primary">
              Hello
            </ButtonLink>
          ),
          options: {
            showSource: true,
            showPropTables: false
          }
        },
        {
          title: 'Disbaled buttons link',
          subtitle: 'Add the disabled prop',
          sectionFn: () => (
            <div>
              <ButtonLink onClick={() => {}} disabled theme="primary">
                Hello
              </ButtonLink>
              <br />
              <br />
              <ButtonLink onClick={() => {}} disabled>
                Bye Bye
              </ButtonLink>
            </div>
          ),
          options: {
            showSource: true,
            showPropTables: false
          }
        }
      ]
    }
  ]
})
