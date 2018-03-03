/* eslint-disable */
import React from 'react'
import styled, { css } from 'styled-components'
import { storiesOf, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import Layout from './index'

storiesOf('03 - Components', module)
  .addDecorator(story => <div style={{ margin: '-30px auto', maxWidth: '320px' }}>{story()}</div>)
  .add(
    'Layout',
    withInfo()(() => (
      <Layout>
        <Layout.Header>
          <div style={{ padding: '10px 15px' }}>
            <b>header:</b> verticaly centered inside a block that use 20% of the viewport
          </div>
        </Layout.Header>
        <Layout.Body>
          <div style={{ padding: '10px 15px' }}>
            <b>body:</b> verticaly centered inside the available height <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem facere, reiciendis
            repudiandae tenetur animi corrupti quam itaque ducimus illo, rerum illum aliquid quae,
            cumque inventore dolorum sint fugiat asperiores. Rerum! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.<br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem facere, reiciendis
            repudiandae tenetur animi corrupti quam itaque ducimus illo, rerum illum aliquid quae,
            cumque inventore dolorum sint fugiat asperiores. Rerum! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
          </div>
        </Layout.Body>
        <Layout.Footer>
          <div style={{ padding: '10px 15px' }}>
            <b>footer:</b> stick to bottom
          </div>
        </Layout.Footer>
      </Layout>
    ))
  )
