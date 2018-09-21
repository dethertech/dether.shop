import styled, { css } from 'styled-components';
import tokens from '../../../styles/tokens';

export const Wrapper = styled.div`
  position: relative;
  background: ${tokens.colors.grey.lightest};
  border-radius: ${tokens.radius.s};
  overflow: visible;
  border: solid 1px transparent;
  transition: all 0.3s ease;
  display: flex;
  align-content: stretch;

  ${({ showOptions }) =>
    showOptions &&
    css`
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `};

  ${({ isFocus }) =>
    isFocus &&
    css`
      border-color: ${tokens.colors.grey.lightest};
      background: ${tokens.colors.white};
    `};
`;

export const SearchField = styled.input.attrs({ type: 'text' })`
  flex: 1;
  height: 100%;
  width: 100%;
  padding: ${tokens.spaces.s};
`;

export const Results = styled.ul`
  display: block;
  z-index: 1;
  position: absolute;
  max-height: 20rem;
  /* smooth scroll in IOS */
  -webkit-overflow-scrolling: touch;
  overflow: auto;
  top: 100%;
  border: solid 1px ${tokens.colors.grey.lightest};
  /* compoensate border width of wrapper*/
  left: -0.1rem;
  right: -0.1rem;
  display: none;

  ${({ showOptions }) =>
    showOptions &&
    css`
      display: block;
    `};
`;

export const ResultItem = styled.li`
  display: block;
  background: ${tokens.colors.white};
  padding: ${tokens.spaces.xs};
  cursor: pointer;

  &:hover {
    background-color: ${tokens.colors.grey.lightest};
  }
`;

export const NoResultItem = styled.li`
  display: block;
  background: ${tokens.colors.white};
  padding: ${tokens.spaces.xs};
`;

export const DropDownBtn = styled.button`
  vertical-align: middle;
  padding: 0 ${tokens.spaces.m};
`;

export const InputStatusIcon = styled.div`
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
