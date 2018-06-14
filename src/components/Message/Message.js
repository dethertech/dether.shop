import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import tokens from '../../styles/tokens';

const Wrapper = styled.div`
  font-size: ${tokens.fontSizes.xs};
  display: flex;
  margin: ${tokens.spaces.m} 0;

  ${({ theme }) =>
    theme === 'info'
      ? css`
          color: ${tokens.colors.grey.light};
        `
      : css`
          color: ${tokens.colors.black};
        `};

  ${({ alignLeft }) =>
    alignLeft &&
    css`
      text-align: left;
    `};
`;

const Icon = styled.div`
  font-size: ${tokens.fontSizes.xxs};
  color: ${tokens.colors.white};
  width: 1.5rem;
  height: 1.5rem;
  flex: 0 0 1.5rem;
  overflow: hidden;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-around;
  font-weight: 900;
  border-radius: ${tokens.radius.circle};
  margin-right: ${tokens.spaces.s};

  ${({ theme }) =>
    theme === 'info'
      ? css`
          background-color: ${tokens.colors.blue};
          &:before {
            content: 'i';
          }
        `
      : css`
          background-color: ${tokens.colors.black};
          &:before {
            content: '!';
          }
        `};
`;

const Message = ({ theme, withIcon, alignLeft, children }) => (
  <Wrapper theme={theme} withIcon={withIcon} alignLeft={alignLeft}>
    {withIcon && <Icon theme={theme} />}
    <div>{children}</div>
  </Wrapper>
);

Message.propTypes = {
  theme: PropTypes.oneOf(['info', 'error']),
  withIcon: PropTypes.bool,
  alignLeft: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Message.defaultProps = {
  alignLeft: false,
  theme: 'info',
  withIcon: true,
};

export default Message;
