import styled, { css } from 'styled-components';
import tokens from '../../styles/tokens';

const Base = styled.span`
  font-weight: 600;

  ${({ light }) =>
    light &&
    css`
      font-weight: 200;
    `};
`;

export const H1 = Base.withComponent('h1').extend`
  font-size: ${tokens.fontSizes.xxl};
`;

export const H2 = Base.withComponent('h2').extend`
  font-size: ${tokens.fontSizes.xl};
`;

export const H3 = Base.withComponent('h3').extend`
  font-size: ${tokens.fontSizes.l};
`;
