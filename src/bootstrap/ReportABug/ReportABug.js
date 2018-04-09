import React from 'react';
import styled from 'styled-components';

import iconBug from '../../assets/svg/icon_bug.svg';
import tr from '../../translate';
import tokens from '../../styles/tokens';
import Layout from '../../components/Layout';
import { Padding } from '../../components/Spaces';
import config from '../../constants/config';
import Message from '../../components/Message';

const Link = styled.a`
  color: ${tokens.colors.blue};
  border-bottom: solid 1px ${tokens.colors.blue};
  line-height: 2em;
`;

const Root = styled(Layout.Body)`
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export default () => (
  <Root>
    <Padding all="m">
      <Message theme="error" alignCenter>
        {tr('errors.global_error')}
      </Message>
      <img src={iconBug} alt="" width="85%" />
      <br />
      <br />
      <Link href={config.reportABug} rel="noopener noreferrer" target="_blank">
        {tr('errors.report_a_bug.title')}
      </Link>
    </Padding>
  </Root>
);
