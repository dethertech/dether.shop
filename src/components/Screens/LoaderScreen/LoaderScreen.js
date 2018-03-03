import React from 'react';
import PropTypes from 'prop-types';
import { H2 } from '../../Headings';
import Layout from '../../Layout';
import Loader from '../../Loader';
import { Padding } from '../../Spaces';

const LoaderScreen = ({ title, message }) => (
  <Layout>
    <Layout.Body>
      <Padding all="m">
        <Loader size="l" />
        {!!title && <H2>{title}</H2>}
        {!!message && <div>{message}</div>}
      </Padding>
    </Layout.Body>
  </Layout>
);

LoaderScreen.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string
};

LoaderScreen.defaultProps = {
  title: null,
  message: null
};

export default LoaderScreen;
