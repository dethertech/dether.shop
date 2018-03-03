import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import tr from '../../../translate';
import Layout from '../../../components/Layout';
import { Padding } from '../../../components/Spaces';
import Mention from '../../../components/Mention';
import RoundIconBtn from '../../../components/RoundIconBtn';

const Terms = ({ history }) => (
  <Layout textAlignLeft isFullScreen>
    <Layout.Header>
      <Padding horizontal="m" top="m" bottom="xs">
        <RoundIconBtn onClick={history.goBack} type="prev" />
      </Padding>
    </Layout.Header>
    <Layout.ScrollableBody>
      <Padding horizontal="m" top="xs" bottom="m">
        <Mention>{tr('onboarding.terms')}</Mention>
      </Padding>
    </Layout.ScrollableBody>
  </Layout>
);

Terms.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired
  }).isRequired,
};

export default withRouter(Terms);
