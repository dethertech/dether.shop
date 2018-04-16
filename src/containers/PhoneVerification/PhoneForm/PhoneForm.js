import React, { PureComponent, Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import tr from '../../../translate';
import { LabeledInput } from '../../../components/Inputs';
import { Padding } from '../../../components/Spaces';
import { Button, Message, Mention, ProgressBar } from '../../../components';
import tokens from '../../../styles/tokens';
import countries from '../../../constants/prefixePhone';
import PhoneModal from './PhoneModal';
import { H1 } from '../../../components/Headings';

const DialCode = styled.div`
  vertical-align: middle;
  padding: ${tokens.spaces.xs};
  border-right: solid 1px ${tokens.colors.white};
  display: flex;
  line-height: 1;
  align-items: center;
  vertical-align: middle;
  user-select: none;
`;

const CountryWrapper = styled.div`
  position: relative;
  z-index: 2;
`;

class PhoneForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    submitError: PropTypes.string,
    country: PropTypes.shape({}),
  };

  static defaultProps = {
    submitError: null,
    country: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      isCountryValid: false,
      countryError: null,
      phoneError: null,
      phone: '',
      fullPhone: '',
      toggleShakePhone: 0,
      toggleShakeCountry: 0,
      country: props.country,
      showModal: false,
    };
  }

  handleCountryChange = () => {
    this.setState({ countryError: null, isCountryValid: false, country: null });
  };

  handlePhoneChange = ({ target: { value } }) => {
    this.setState({ phoneError: null });
    const validDigit = val => /^\d{0,15}$/.test(val);

    if (validDigit(value)) {
      return this.setState(prevState => ({ ...prevState, phone: value }));
    }
  };

  checkPhone = () => {
    const { phone } = this.state;

    const maxChar =
      this.state.country && this.state.country.maxChar
        ? this.state.country.maxChar
        : 15;
    const minChar =
      this.state.country && this.state.country.minChar
        ? this.state.country.minChar
        : 5;
    if (!phone || phone.length < minChar || phone.length > maxChar) {
      this.setState(prevState => ({
        ...prevState,
        toggleShakePhone: prevState.toggleShakePhone + 1,
        phoneError: tr('errors.phone.invalid', { minChar, maxChar }),
      }));

      return false;
    }

    this.setState(prevState => ({
      ...prevState,
      fullPhone: `${prevState.country.dial_code}${prevState.phone}`,
    }));

    return true;
  };

  checkCountry = () => {
    const { country } = this.state;

    if (!country) {
      this.setState(prevState => ({
        toggleShakeCountry: prevState.toggleShakePhone + 1,
        countryError: tr('errors.phone.country_blank'),
      }));

      return false;
    }

    this.setState({ isCountryValid: true, countryError: '' });
    return true;
  };

  submitPhone = () => {
    if (this.checkCountry() && this.checkPhone()) return this.toggleModal();
  };

  toggleModal = () =>
    this.setState(prevState => ({
      ...prevState,
      showModal: !prevState.showModal,
    }));

  chooseCountry = country => {
    this.setState({
      country,
      countryError: null,
      isCountryValid: true,
    });
  };

  handleSubmit = () => {
    const { onSubmit } = this.props;
    const { fullPhone, country } = this.state;
    onSubmit(fullPhone, country);
  };

  render = () => {
    const { submitError } = this.props;
    const {
      toggleShakePhone,
      toggleShakeCountry,
      country,
      phone,
      showModal,
      phoneError,
      fullPhone,
      isCountryValid,
      countryError,
    } = this.state;

    return (
      <Fragment>
        {showModal && (
          <PhoneModal
            phone={fullPhone}
            backToEdit={this.toggleModal}
            submitPhone={this.handleSubmit}
          />
        )}
        <Padding all="l">
          <H1>{tr('phone.title')}</H1>
          <Mention>{tr('phone.step')}</Mention>
          <ProgressBar progressRatio={1 / 2} />
          <br />
          <br />

          {submitError && <Message theme="error">{submitError}</Message>}
          <CountryWrapper>
            <LabeledInput
              componentName="combobox"
              toggleShake={toggleShakeCountry}
              label={tr('phone.country.label')}
              placeholder={tr('phone.country.placeholder')}
              name="country"
              handleChange={this.handleCountryChange}
              onBlur={this.checkCountry}
              onSelectedOption={this.chooseCountry}
              data={countries}
              error={countryError}
              isValid={isCountryValid}
              defaultOption={country && country.name}
            />
          </CountryWrapper>
          <LabeledInput
            disabled={!country}
            toggleShake={toggleShakePhone}
            insertBefore={country && <DialCode>{country.dial_code}</DialCode>}
            style={{ paddingLeft: '0.3rem' }}
            componentName="input"
            label={tr('phone.label')}
            type="tel"
            value={phone}
            onBlur={this.checkPhone}
            handleChange={this.handlePhoneChange}
            name="phone"
            error={phoneError}
          />
          <Message alignLeft>{tr('phone.helper')}</Message>
        </Padding>
        <Padding all="l">
          <Button fullWidth theme="primary" onClick={this.submitPhone}>
            {tr('phone.valid_button')}
          </Button>
        </Padding>
      </Fragment>
    );
  };
}

export default PhoneForm;
