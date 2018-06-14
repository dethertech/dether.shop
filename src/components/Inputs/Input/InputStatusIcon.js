import styled, { css } from 'styled-components';
import tokens from '../../../styles/tokens';

const InputStatusIcon = styled.div`
  padding: 0 ${tokens.spaces.xs};
  display: flex;
  flex-flow: column;
  justify-content: space-around;

  &:before {
    display: block;
    line-height: 1.6rem;
    font-weight: bold;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    text-align: center;
    line-height: 1.6rem;
    color: ${tokens.colors.white};
  }

  ${({ hasError }) =>
    hasError &&
    css`
      &:before {
        background: ${tokens.colors.black};
        content: '!';
      }
    `};

  ${({ isValid }) =>
    isValid &&
    css`
      &:before {
        background: ${tokens.colors.green};
        content: '✓';
      }
    `};
`;

export default InputStatusIcon;
