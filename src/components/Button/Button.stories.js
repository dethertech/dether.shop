/* eslint-disable */
import React from 'react'
import styled, { css } from 'styled-components'
import { storiesOf } from '@storybook/react'
import Button, { SwitchButton } from './index'

storiesOf('03 - Components', module).addWithChapters('Button', {
  subtitle: 'Button',
  chapters: [
    {
      sections: [
        {
          title: 'Light button',
          subtitle: 'the default button for secondary actions',
          sectionFn: () => <Button onClick={() => {}}>Hello</Button>,
          options: {
            showSource: true,
            showPropTables: true
          }
        },
        {
          title: 'Full width light button',
          subtitle: 'use fullWidth prop to make it fill the available width',
          sectionFn: () => (
            <Button onClick={() => {}} fullWidth>
              Hello
            </Button>
          ),
          options: {
            showSource: true,
            showPropTables: false
          }
        },
        {
          title: 'Primary Theme Button',
          subtitle: 'Primary CTA for important or engaging actions',
          sectionFn: () => (
            <Button onClick={() => {}} theme="primary">
              Hello
            </Button>
          ),
          options: {
            showSource: true,
            showPropTables: false
          }
        },
        {
          title: 'Danger Theme Button',
          subtitle: 'Button used to warn the user taht the action is dangerous or ireversible',
          sectionFn: () => (
            <Button onClick={() => {}} theme="danger">
              Danger
            </Button>
          ),
          options: {
            showSource: true,
            showPropTables: false
          }
        },
        {
          title: 'Disbaled buttons',
          subtitle: 'Add the disabled prop',
          sectionFn: () => (
            <div>
              <Button onClick={() => {}} fullWidth disabled theme="primary">
                Hello
              </Button>
              <br />
              <br />
              <Button onClick={() => {}} fullWidth disabled>
                Bye Bye
              </Button>
              <br />
              <br />
              <Button onClick={() => {}} disabled fullWidth theme="danger">
                Danger
              </Button>
            </div>
          ),
          options: {
            showSource: true,
            showPropTables: false
          }
        },
        {
          title: 'SwitchButton buttons',
          subtitle: 'Add the disabled prop',
          sectionFn: () => (
            <div>
              <SwitchButton onClick={() => {}}>
                i'm not selected
              </SwitchButton>
              <SwitchButton onClick={() => {}} checked>
                i'm selected
              </SwitchButton>
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
