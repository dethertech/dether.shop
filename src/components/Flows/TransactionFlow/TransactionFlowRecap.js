import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import ShopRecap from '../../ShopRecap';
import Loader from '../../Loader';

const TransactionFlowRecap = ({ shop, message }) => (
  <Fragment>
    <ShopRecap {...shop} />
    <div>
      <b>{message}</b>
    </div>
    <Loader />
  </Fragment>
);

TransactionFlowRecap.propTypes = {
  message: PropTypes.string.isRequired,
  shop: PropTypes.shape({
    opening: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    cat: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    lat: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    lng: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    licencePrice: PropTypes.string,
  }).isRequired,
};

export default TransactionFlowRecap;
