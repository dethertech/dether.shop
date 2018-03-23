import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import tr from '../../translate';
import tokens from '../../styles/tokens';
import { Padding } from '../../components/Spaces';
import { SmallLink, ButtonLink } from '../../components';

const FooterText = styled.footer`
  font-size: ${tokens.fontSizes.s};
`;

const Footer = ({ toggleModal }) => (
  <Padding all="m">
    <FooterText>
      <div>
        <b>Dether</b> {tr('footer.all_right_reserved')} -{' '}
        <ButtonLink isSmall onClick={toggleModal}>
          {tr('footer.terms_and_conditions')}
        </ButtonLink>
        &nbsp;-&nbsp;
        <SmallLink
          link="https://dethersupport.typeform.com/to/oajOgv"
        >
          {tr('footer.report_bug')}
        </SmallLink>
        &nbsp;-&nbsp;
        <SmallLink
          link="https://dethersupport.typeform.com/to/cNpMUB"
        >
          {tr('footer.report_shop')}
        </SmallLink>
      </div>
    </FooterText>
  </Padding>
);

Footer.propTypes = {
  toggleModal: PropTypes.func.isRequired
};

export default Footer;
