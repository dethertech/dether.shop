/* eslint-disable */
import React from 'react'
import styled, { css } from 'styled-components'
import { storiesOf, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import Modal from './index'

storiesOf('03 - Components', module)
  .add(
    'Modal',
    withInfo()(() => (
      <Modal closeFunc={()=>{}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, sunt ea aliquam in aliquid voluptates amet asperiores corrupti, aspernatur veritatis exercitationem, quas dignissimos molestias dolorem. Beatae itaque tempora doloremque, accusamus.
      </Modal>
    ))
  )
