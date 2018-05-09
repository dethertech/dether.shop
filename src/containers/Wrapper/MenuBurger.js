import React from 'react';
import { push as Menu } from 'react-burger-menu';
import { PropTypes } from 'prop-types';
import { Svg } from '../../components';
import onlyMobile from './onlyMobile';
import tokens from '../../styles/tokens';

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '20px',
    top: '20px',
  },
  bmCross: {
    background: tokens.colors.blue,
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
    right: '3%',
    top: '3%',
  },
  bmMenu: {
    boxShadow: '0 0 0.8rem rgba(0, 0, 0, 0.2)',
  },
};

const MenuMobile = onlyMobile(Menu);
const MenuBurger = props => (
  <MenuMobile
    styles={styles}
    width="90%"
    noOverlay
    customBurgerIcon={<Svg type="SvgBurger" />}
  >
    {props.children}
  </MenuMobile>
);

MenuBurger.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MenuBurger;
