/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { closeNotificationModal as closeNotificationModalAction } from '../../../actions';
import { notifications } from '../../../constants';
import { H2 } from '../../../components/Headings';
import { Padding } from '../../../components/Spaces';
import { Modal } from '../../../components';
import tokens from '../../../styles/tokens';

const Root = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
`;

const Wrapper = styled.div`
  text-align: center;
  color: ${tokens.colors.grey.dark};
`;

const Title = styled(H2)`
  color: ${tokens.colors.blue};
  margin-top: 10px;
  margin-bottom: 5px;
`;

const NotificationModal = ({
  closeNotificationModal,
  notificationType,
  notificationMessage,
}) => {
  const Icon = notifications[notificationType].icon;
  return (
    <Root>
      <Modal closeFunc={closeNotificationModal}>
        <Wrapper>
          <Padding vertical="m">
            <Icon />
            <Title>{notifications[notificationType].title}</Title>
            {notificationMessage}
          </Padding>
        </Wrapper>
      </Modal>
    </Root>
  );
};

NotificationModal.propTypes = {
  closeNotificationModal: PropTypes.func.isRequired,
  notificationType: PropTypes.string.isRequired,
  notificationMessage: PropTypes.string.isRequired,
};

const mapStateToProps = ({ app }) => ({
  notificationType: app.notificationType,
  notificationMessage: app.notificationMessage,
});

const mapDispatchToProps = dispatch => ({
  closeNotificationModal: bindActionCreators(
    closeNotificationModalAction,
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationModal);
