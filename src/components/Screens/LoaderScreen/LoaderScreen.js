import React from 'react';
import PropTypes from 'prop-types';

import tr from '../../../translate';
import { H2 } from '../../Headings';
import Layout from '../../Layout';
import Loader from '../../Loader';
import { Padding } from '../../Spaces';

const LoaderScreen = ({ title, message, isTransaction }) => (
  <Layout>
    <Layout.Body>
      <Padding all="m">
        <Loader size="l" />
        {!!title && <H2>{title}</H2>}
        {!!message && <div>{message}</div>}
        {!!isTransaction && <div>{tr('metamask.check_transaction')}</div>}
      </Padding>
    </Layout.Body>
  </Layout>
);

LoaderScreen.propTypes = {
  isTransaction: PropTypes.bool,
  title: PropTypes.string,
  message: PropTypes.string,
};

LoaderScreen.defaultProps = {
  title: null,
  message: null,
  isTransaction: false,
};

export default LoaderScreen;
