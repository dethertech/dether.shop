import React from 'react';
import PropTypes from 'prop-types';

import { Modal, Mention } from '../../components';
import { Padding } from '../../components/Spaces';
import { H1 } from '../../components/Headings';

import Warning from '../../assets/svg/warning.svg';

const WarningModal = ({ closeFunc }) => (
  <Modal closeFunc={closeFunc}>
    <div style={{ textAlign: 'center' }}>
      <img style={{ width: '29%' }} src={Warning} alt="warning" />
      <Padding bottom="l">
        <H1>IMPORTANT:</H1>
      </Padding>
    </div>

    <Padding bottom="m">
      <Mention>
        <strong>
          This version of Dether for shops will NOT be available after
          30/12/2019. Download now the new Dether app and start using it to add
          your shop on the Dether map:{' '}
          <a
            style={{ fontSize: '14px', color: '#007bff' }}
            href="https://get.dether.io"
          >
            https://get.dether.io
          </a>
        </strong>
      </Mention>
    </Padding>
    <Mention>
      <em>NOTES:</em>
      <br />
      1/ You can import the same wallet in the new app using your back up
      phrase.
      <br />
      2/ If you currently have a shop on the map on the Beta version, don’t
      forget to delete it to get your DTH back to your wallet.
    </Mention>
  </Modal>
);

WarningModal.propTypes = {
  closeFunc: PropTypes.func.isRequired,
};

export default WarningModal;
