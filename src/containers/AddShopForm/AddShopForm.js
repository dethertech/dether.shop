import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { H1 } from '../../components/Headings';
import { LabeledInput } from '../../components/Inputs';
import { Padding } from '../../components/Spaces';
import Mention from '../../components/Mention';
import ProgressBar from '../../components/ProgressBar';
import Button from '../../components/Button';

import { setDataShopPending as setDataShopPendingAction } from '../../actions/shop';
import tr from '../../translate';
import DaysOnpeningHour from './DaysOnpeningHour';
import validator from './validator';
import fromState from './fromState';
import SearchBar from './SearchBar';

export class AddShopForm extends PureComponent {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired,
    shop: PropTypes.shape({}).isRequired,
    setDataShopPending: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      days: '0000000',
      form: fromState(this, props)
    };
  }

  onBlur = ({ target: { name, value: val } }) => {
    this.checkValide(name, val);
  };

  onBlurAddress = () => {
    this.checkValide('address', this.state.form.address.value);
  };

  onChange = ({ target: { name, value: val } }) => {
    const validatorName = validator[name];
    const value = validatorName.tranform(val);

    this.setState(pState => ({
      form: { ...pState.form, [name]: { ...pState.form[name], value } }
    }));
  };

  onChangeAddress = addressObj => {
    this.setState(pState => ({
      form: { ...pState.form, address: { ...pState.form.address, value: addressObj } }
    }));
  };

  onChangeDays = days => {
    this.setState({ days });
  };

  onSave = async () => {
    if (this.isFormValide()) {
      const { days, form } = this.state;
      const { setDataShopPending, history } = this.props;
      const data = {
        ...form.address.value,
        cat: form.cat.value,
        name: form.name.value,
        description: form.description.value,
        opening: days
      };
      setDataShopPending(data);
      history.push('/add-form/verification');
    }
  };

  checkValide(name, val) {
    const { form } = this.state;
    const objState = form[name];
    const validatorName = validator[name];
    const value = validatorName.tranform(val);
    const isValid = validatorName.test(value);

    this.setState(pState => ({
      form: {
        ...pState.form,
        [name]: {
          ...pState.form[name],
          isValid,
          error: isValid ? null : validatorName.errorMsg(value),
          toggleShake: isValid ? objState.toggleShake : objState.toggleShake + 1
        }
      }
    }));
    return isValid;
  }

  isFormValide() {
    const { form } = this.state;
    let isValide = true;
    Object.keys(form).forEach(k => {
      isValide = this.checkValide(k, form[k].value) && isValide;
    });
    return isValide;
  }

  render() {
    const { form } = this.state;
    return (
      <Fragment>
        <H1>{tr('add.form.title')}</H1>
        <Mention>{tr('add.form.step')}</Mention>
        <ProgressBar progressRatio={1} />
        <Padding vertical="xl">
          <LabeledInput {...form.name} />
          <LabeledInput {...form.cat} />
          <SearchBar
            inputOpt={{ ...form.address, onBlur: this.onBlurAddress }}
            onChange={this.onChangeAddress}
          />
          <LabeledInput {...form.description} />
        </Padding>
        <Padding bottom="m">
          <DaysOnpeningHour onChange={this.onChangeDays} />
        </Padding>

        <Padding vertical="m">
          <Button fullWidth theme="primary" onClick={this.onSave}>
            {tr('add.form.register_btn')}
          </Button>
        </Padding>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ shop }) => ({
  shop: shop.pendingShop
});

const mapDispatchToProps = dispatch => ({
  setDataShopPending: bindActionCreators(setDataShopPendingAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AddShopForm);
