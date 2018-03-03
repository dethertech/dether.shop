import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { H1, H3 } from '../../components/Headings';
import { LabeledInput } from '../../components/Inputs';
import { Padding } from '../../components/Spaces';
import Mention from '../../components/Mention';
import ProgressBar from '../../components/ProgressBar';
import Button from '../../components/Button';

import DayLineOnpeningHour from './DayLineOnpeningHour';
import validator from '../../helpers/validator';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export class AddShopForm extends PureComponent {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired,
    shop: PropTypes.shape({}).isRequired
  };

  constructor(props) {
    super(props);
    const { shop } = props;
    this.state = {
      form: {
        name: {
          name: 'name',
          componentName: 'input',
          type: 'text',
          label: 'Name :',
          value: shop.name || '',
          fillInfos: validator.name.fillInfos(),
          error: null,
          isValid: false,
          toggleShake: 0
        },
        cat: {
          name: 'cat',
          componentName: 'input',
          type: 'text',
          label: 'Category :',
          value: shop.cat || '',
          fillInfos: validator.cat.fillInfos(),
          error: null,
          isValid: false,
          toggleShake: 0
        },
        description: {
          name: 'description',
          componentName: 'input',
          type: 'text',
          label: 'Category :',
          value: shop.description || '',
          fillInfos: validator.description.fillInfos(),
          error: null,
          isValid: false,
          toggleShake: 0
        }
      }
    };
  }

  onBlur = ({ target: { name, value: val } }) => {
    this.checkValide(name, val);
  };

  onChange = ({ target: { name, value: val } }) => {
    const validatorName = validator[name];
    const value = validatorName.tranform(val);

    this.setState(prevState => ({
      form: {
        ...prevState.form,
        [name]: { ...prevState.form[name], value }
      }
    }));
  };

  onSave = () => {
    this.isFormValide();
  };

  checkValide(name, val) {
    const { form } = this.state;
    const objState = form[name];
    const validatorName = validator[name];
    const value = validatorName.tranform(val);
    const isValid = validatorName.test(value);
    console.log('VALUE', val, value);

    this.setState(prevState => ({
      form: {
        ...prevState.form,
        [name]: {
          ...prevState.form[name],
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
      isValide = isValide && this.checkValide(k, form[k].value);
    });
    return isValide;
  }

  render() {
    const { form } = this.state;
    return (
      <div>
        <H1>Register your shop</H1>
        <Mention>Step 3 of 3</Mention>
        <ProgressBar progress={1} />
        <Padding vertical="xl">
          <LabeledInput
            {...form.name}
            onBlur={this.onBlur}
            onChange={this.onChange}
            handleChange={() => {}}
          />
          <LabeledInput
            {...form.cat}
            onBlur={this.onBlur}
            onChange={this.onChange}
            handleChange={() => {}}
          />
          <LabeledInput
            toggleShake={0}
            value="31 rue de Cotte 75012 Paris"
            type="text"
            componentName="input"
            label="Address :"
            error=""
            handleChange={() => {}}
            name="Address"
          />
          <LabeledInput
            {...form.description}
            onBlur={this.onBlur}
            onChange={this.onChange}
            handleChange={() => {}}
          />
        </Padding>
        <Padding bottom="m">
          <H3>Select Oppenning days of your shop :</H3>
        </Padding>
        {days.map(day => <DayLineOnpeningHour day={day} />)}

        <Padding vertical="m">
          <Button fullWidth theme="primary" onClick={this.onSave}>
            Add your shop
          </Button>
        </Padding>
      </div>
    );
  }
}

const mapStateToProps = ({ shop }) => ({
  shop: shop.pointPending
});

const mapDispatchToProps = (/* dispatch */) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AddShopForm);
