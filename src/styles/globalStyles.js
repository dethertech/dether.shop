/* eslint-disable */
import { injectGlobal } from 'styled-components';
import tokens from './tokens';

const globalStyles = injectGlobal`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    height:100%;
    width:100%;
  }

  body {
    color: ${tokens.colors.grey.darkest};
    font-family:
      -apple-system,
      Roboto,
      BlinkMacSystemFont,
      "Segoe UI",
      Oxygen-Sans,
      Ubuntu,
      Cantarell,
      "Helvetica Neue",
      sans-serif;

    width:100%;
    font-size: ${tokens.fontSizes.m};
    padding: 0;
    margin: 0;
    line-height: 1.35;
    -webkit-font-smoothing: antialiased;
  }

  #root, #root > div {
    width:100%;
  }

  [role='button'],
  [contenteditable='true'] {
    outline: none;
  }

  a {
    color: inherit;
    text-decoration: inherit;
    transition: color 0.2s ease;

    &:hover {
      color: ${tokens.colors.blue};
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-size: ${tokens.fontSizes.m};
  }

  ul,
  ol,
  li,
  dl,
  dt,
  dd {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  table {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
  }

  form {
    margin: 0;
  }

  input[type='range'],
  input[type='text'],
  input[type='search'],
  input[type='email'],
  input[type='date'],
  input[type='password'],
  input[type='tel'],
  input[type='number'],
  input[type='checkbox'],
  input[type='radio'],
  textarea,
  select,
  button {
    margin: 0;
    -webkit-appearance: none;
    appearance: none;
    outline: none;
    border-radius: 0;
    color: inherit;
    border: none;
    background: transparent;
    font-size: inherit;
  }

  input[type='checkbox'],
  input[type='radio'] {
    border: solid 0.1rem ${tokens.colors.grey.dark};
    width: ${tokens.spaces.m};
    height: ${tokens.spaces.m};
    vertical-align: middle;
    margin-right: ${tokens.spaces.xs};
    overflow: hidden;

    &:checked:before {
      content: '✓';
      display: block;
      color: ${tokens.colors.blue};
      height: 100%;
      width: 100%;
      text-align: center;
      line-height: 1;
    }
  }

  input[type='radio'] {
    border-radius: 50%;

    &:checked {
      background: transparent
    }

    &:checked:before {
      content: "";
      width: calc(${tokens.spaces.m} - 0.6rem);
      height: calc(${tokens.spaces.m} - 0.6rem);
      margin: 0.2rem;
      border-radius: 50%;
      background: ${tokens.colors.blue};
    }
  }

  input,
  select,
  textarea {
    font: inherit;
  }

  button,
  input[type="button"] {
    padding: 0;
    border: 0;
    background: none;
    outline: none;
    cursor: pointer;
  }
`;

export default globalStyles;
