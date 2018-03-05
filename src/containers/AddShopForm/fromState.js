import validator from './validator';
import tr from '../../translate';

export default ({ onChange, onBlur }, props) => {
  const { shop } = props;
  return {
    address: {
      name: 'address',
      label: tr('add.form.inputes.address.label'),
      value: null,
      fillInfos: validator.name.fillInfos(),
      error: null,
      isValid: false,
      toggleShake: 0,
      onBlur,
      handleChange: onChange
    },
    name: {
      name: 'name',
      componentName: 'input',
      type: 'text',
      label: tr('add.form.inputes.name.label'),
      value: shop.name || '',
      fillInfos: validator.name.fillInfos(),
      error: null,
      isValid: false,
      toggleShake: 0,
      onBlur,
      handleChange: onChange
    },
    cat: {
      name: 'cat',
      componentName: 'input',
      type: 'text',
      label: tr('add.form.inputes.cat.label'),
      value: shop.cat || '',
      fillInfos: validator.cat.fillInfos(),
      error: null,
      isValid: false,
      toggleShake: 0,
      onBlur,
      handleChange: onChange
    },
    description: {
      name: 'description',
      componentName: 'input',
      type: 'text',
      label: tr('add.form.inputes.description.label'),
      value: shop.description || '',
      fillInfos: validator.description.fillInfos(),
      error: null,
      isValid: false,
      toggleShake: 0,
      onBlur,
      handleChange: onChange
    }
  };
};
