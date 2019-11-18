/* eslint max-lines: ["error", {"skipBlankLines": true}] */
import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { H1 } from '../../../components/Headings';
import { LabeledInput } from '../../../components/Inputs';
import { Padding } from '../../../components/Spaces';
import Mention from '../../../components/Mention';
import ProgressBar from '../../../components/ProgressBar';
import { Svg } from '../../../components';

import { setCenterPosition as setCenterPositionAction } from '../../../actions/map';
import { setDataShopPending as setDataShopPendingAction } from '../../../actions/shop';
import tr from '../../../translate';
import DaysOnpeningHour from './DaysOnpeningHour';
import validator from './validator';
import fromState from './fromState';
import SearchBar from './SearchBar';
import { convertCalendar } from '../../../helpers/calendar';
import { isAlphaText } from '../../../helpers/parse';
import shopCategories from '../../../constants/shopCategories';
import FormSubmitDom from './FormSubmitDom';

export class Form extends PureComponent {
  static propTypes = {
    shop: PropTypes.shape({}).isRequired,
    setDataShopPending: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    setCenterPosition: PropTypes.func.isRequired,
  };

  static getDerivedStateFromProps = (nextProps, prevState) => {
    const { shop } = nextProps;
    const { lat, lng, address, postalCode, countryId } = shop;

    return {
      ...prevState,
      form: {
        ...prevState.form,
        address: {
          ...prevState.form.address,
          value: { lat, lng, address, postalCode, countryId },
        },
      },
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      days: '0000000',
      form: fromState(this, props),
    };
  }

  onBlur = ({ target: { name, value: val } }) => {
    this.checkValide(name, val);
  };

  onBlurAddress = () => {
    this.checkValide('address', this.state.form.address.value);
  };

  onChange = ({ target: { name, value: val } }) => {
    if (!isAlphaText(val)) return;
    const validatorName = validator[name];
    const value = validatorName.tranform(val);

    this.setState(pState => ({
      form: { ...pState.form, [name]: { ...pState.form[name], value } },
    }));
  };

  onChangeAddress = addressObj => {
    this.setState(pState => ({
      form: {
        ...pState.form,
        address: { ...pState.form.address, value: addressObj, error: null },
      },
    }));
    if (addressObj) {
      this.props.setCenterPosition({
        lat: Number(addressObj.lat),
        lng: Number(addressObj.lng),
      });
    }
  };

  onChangeDays = days => {
    this.setState({ days });
  };

  onSave = async () => {
    const { days, form } = this.state;
    if (form.address.error) {
      this.setAddressHasError();
    } else if (await this.isFormValide()) {
      const { setDataShopPending, onSubmit } = this.props;
      const data = {
        ...form.address.value,
        cat: form.cat.value,
        name: form.name.value,
        description: form.description.value,
        opening: days,
      };
      setDataShopPending(data);
      onSubmit();
    }
  };

  setAddressHasError = () => {
    this.setState({
      form: {
        ...this.state.form,
        address: {
          ...this.state.form.address,
          hasError: true,
        },
      },
    });
  };

  resetAddressHasError = () => {
    this.setState({
      form: {
        ...this.state.form,
        address: {
          ...this.state.form.address,
          hasError: false,
        },
      },
    });
  };

  async checkValide(name, val) {
    const { form } = this.state;
    const objState = form[name];
    const validatorName = validator[name];
    const value = validatorName.tranform(val);
    const error = await validatorName.test(value);
    const isValid = !error;

    this.setState(pState => ({
      form: {
        ...pState.form,
        [name]: {
          ...pState.form[name],
          isValid,
          error,
          toggleShake: isValid
            ? objState.toggleShake
            : objState.toggleShake + 1,
        },
      },
    }));
    return isValid;
  }

  async isFormValide() {
    const { form } = this.state;

    let isValide = true;
    await Promise.all(
      Object.keys(form).map(async k => {
        isValide = (await this.checkValide(k, form[k].value)) && isValide;
      }),
    );
    return isValide;
  }

  render() {
    const { form } = this.state;
    const { shop } = this.props;

    return (
      <Fragment>
        <H1>{tr('add.form.title')}</H1>
        <Mention>{tr('add.form.step')}</Mention>
        <ProgressBar progressRatio={1} />
        <Padding vertical="xl">
          <LabeledInput
            {...form.name}
            renderLabelIcon={() => (
              <Svg type="RegisterName" style={{ margin: '-2px 4px' }} />
            )}
          />
          <LabeledInput
            {...form.cat}
            componentName="select"
            data={shopCategories}
            renderLabelIcon={() => (
              <Svg type="RegisterCategory" style={{ margin: '-2px 4px' }} />
            )}
          />
          <SearchBar
            inputOpt={{ ...form.address, onBlur: this.onBlurAddress }}
            onChange={this.onChangeAddress}
            value={form.address.value && form.address.value.address}
          />
          <LabeledInput
            {...form.description}
            renderLabelIcon={() => (
              <Svg type="RegisterDescription" style={{ margin: '-2px 4px' }} />
            )}
          />
        </Padding>
        <Padding bottom="m">
          <DaysOnpeningHour
            days={convertCalendar(shop.opening)}
            onChange={this.onChangeDays}
          />
        </Padding>
        <FormSubmitDom
          form={this.state.form}
          resetAddressHasError={this.resetAddressHasError}
          onSave={this.onSave}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ shop }) => ({
  shop: shop.pendingShop,
});

const mapDispatchToProps = dispatch => ({
  setDataShopPending: bindActionCreators(setDataShopPendingAction, dispatch),
  setCenterPosition: bindActionCreators(setCenterPositionAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
