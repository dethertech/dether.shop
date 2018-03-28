import { css } from 'styled-components';

export const mobile = (...args) => css`
  @media (max-width: 850px) {
    ${css(...args)};
  }
`;
