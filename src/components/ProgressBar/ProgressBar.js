import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import tokens from '../../styles/tokens';
import { Margin } from '../Spaces';

const Bar = styled.div`
  height: 0.3rem;
  background: ${tokens.colors.grey.lightest};
`;

const Progress = styled.div`
  background: ${tokens.colors.blue};
  height: 0.3rem;

  ${({ progressRatio }) => css`
    width: ${progressRatio * 100}%;
  `};
`;

const ProgressBar = ({ progressRatio }) => (
  <Margin vertical="s">
    <Bar>
      <Progress progressRatio={progressRatio} />
    </Bar>
  </Margin>
);

ProgressBar.propTypes = {
  progressRatio: PropTypes.number.isRequired,
};

export default ProgressBar;
