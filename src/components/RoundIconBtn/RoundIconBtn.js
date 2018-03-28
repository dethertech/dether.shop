import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import tokens from '../../styles/tokens';
import Icon from '../Icon';

const Wrapper = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: ${tokens.radius.circle};
  border: solid 0.1rem ${tokens.colors.grey.light};
`;

const RoundIconBtn = ({ type, onClick }) => (
  <Wrapper onClick={onClick}>
    <Icon
      name={type}
      size="1rem"
      strokeWidth="0.2rem"
      color={tokens.colors.grey.light}
    />
  </Wrapper>
);

RoundIconBtn.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['close', 'prev']).isRequired,
};

RoundIconBtn.defaultProps = {
  onClick: () => {},
};

export default RoundIconBtn;
