/* eslint-disable */
import React from 'react'
import styled, { css } from 'styled-components'
import { storiesOf } from '@storybook/react'
import tokens from './tokens'

const Swatch = styled.div`
  height: 50px;
  ${({ color }) =>
    css`
      background-color: ${color};
    `};
`

const SwatchName = styled.div`
  height: 50px;
`

const Radius = styled.div`
  width: 150px;
  height: 150px;
  background-color: ${tokens.colors.grey.light};

  ${({ radius }) =>
    css`
      border-radius: ${radius};
    `};
`

storiesOf('01 - Designs tokens', module)
  .add('Colors', () => (
    <div>
      <h3>Greys</h3>
      <div style={{ display: 'flex', width: '100%' }}>
        {Object.keys(tokens.colors.grey).map(key => (
          <div key={key} style={{ flex: '0 0 10%' }}>
            <Swatch color={tokens.colors.grey[key]} />
            <SwatchName>
              {key} :<br /> {tokens.colors.grey[key]}
            </SwatchName>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ flex: '0 0 10%' }}>
          <Swatch color={tokens.colors.green} />
          <SwatchName>
            green :<br /> {tokens.colors.green}
          </SwatchName>
        </div>
      </div>
      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ flex: '0 0 10%' }}>
          <Swatch color={tokens.colors.black} />
          <SwatchName>
            pink :<br /> {tokens.colors.black}
          </SwatchName>
        </div>
      </div>

      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ flex: '0 0 10%' }}>
          <Swatch color={tokens.colors.blue} />
          <SwatchName>
            blue:<br /> {tokens.colors.blue}
          </SwatchName>
        </div>
      </div>
    </div>
  ))
  .add('Font-sizes', () => (
    <div>
      {Object.keys(tokens.fontSizes)
        .reverse()
        .map(key => (
          <p key={key} style={{ fontSize: tokens.fontSizes[key] }}>
            <br />
            {key} : {tokens.fontSizes[key]}
          </p>
        ))}
    </div>
  ))
  .add('Font-families', () => (
    <div style={{ fontSize: tokens.fontSizes.xxl }}>
      <p style={{ fontWeight: '900' }}>
        black / 900 : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet mollitia,
        veniam officia vel quod iure. Beatae cumque fugit provident molestiae nemo odio eos animi
        tempore magni, mollitia facere commodi saepe!
      </p>
      <p style={{ fontWeight: '500' }}>
        medium / 500 : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet mollitia,
        veniam officia vel quod iure. Beatae cumque fugit provident molestiae nemo odio eos animi
        tempore magni, mollitia facere commodi saepe!
      </p>
      <p style={{ fontWeight: '400' }}>
        normal / 400 : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet mollitia,
        veniam officia vel quod iure. Beatae cumque fugit provident molestiae nemo odio eos animi
        tempore magni, mollitia facere commodi saepe!
      </p>
      <p style={{ fontWeight: '300' }}>
        light / 300 : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet mollitia,
        veniam officia vel quod iure. Beatae cumque fugit provident molestiae nemo odio eos animi
        tempore magni, mollitia facere commodi saepe!
      </p>
    </div>
  ))
  .add('Spaces', () => (
    <div>
      {Object.keys(tokens.spaces)
        .reverse()
        .map(key => (
          <p key={key}>
            <br />
            {key} : {tokens.spaces[key]}
          </p>
        ))}
    </div>
  ))
  .add('Radius', () => (
    <div>
      {Object.keys(tokens.radius)
        .reverse()
        .map(key => (
          <div>
            <Radius radius={tokens.radius[key]} />
            <br />
            {key} : {tokens.radius[key]}
            <br />
            <br />
          </div>
        ))}
    </div>
  ))
