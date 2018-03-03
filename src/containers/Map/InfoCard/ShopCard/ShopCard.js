import React from 'react';
import PropTypes from 'prop-types';
import avatar from '../../../../assets/home/avatar.svg';

const styles = {
  background: '#FEFEFE',
  width: '100%',
  height: '100%'
};

const ShopCard = ({ shopName, category, address, description, calendar }) => (
  <div style={styles}>

    <div>
      <div><img src={avatar} alt="avatar" /></div>
      <div>
        <div>{shopName}</div>
        <div>{category}</div>
      </div>
    </div>

    <div>
      <div>{address}</div>
      <div>{description}</div>
      <div>{Object.keys(calendar)}</div>
    </div>
  </div>
);

ShopCard.propTypes = {
  shopName: PropTypes.string,
  category: PropTypes.string,
  address: PropTypes.string,
  description: PropTypes.string,
  calendar: PropTypes.shape({})
};

ShopCard.defaultProps = {
  shopName: 'shopName',
  category: 'category',
  address: 'address',
  description: 'description',
  calendar: {}
};

export default ShopCard;
