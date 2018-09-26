import validator from './validator';
import tr from '../../../translate';

export default ({ onChange, onBlur }, props) => {
  const { shop } = props;
  const { lat, lng, address, postalCode, countryId } = shop;
  return {
    address: {
      name: 'address',
      label: tr('add.form.inputs.address.label'),
      value: { lat, lng, address, postalCode, countryId },
      fillInfos: validator.name.fillInfos(),
      error: null,
      isValid: false,
      toggleShake: 0,
      onBlur,
      handleChange: onChange,
    },
    name: {
      name: 'name',
      componentName: 'input',
      type: 'text',
      label: tr('add.form.inputs.name.label'),
      value: shop.name || '',
      fillInfos: validator.name.fillInfos(),
      error: null,
      isValid: false,
      toggleShake: 0,
      onBlur,
      handleChange: onChange,
      placeholder: tr('add.form.inputs.name.placeholder'),
    },
    cat: {
      name: 'cat',
      componentName: 'input',
      type: 'text',
      label: tr('add.form.inputs.cat.label'),
      value: shop.cat || '',
      fillInfos: validator.cat.fillInfos(),
      error: null,
      isValid: false,
      toggleShake: 0,
      onBlur,
      handleChange: onChange,
      placeholder: tr('add.form.inputs.cat.placeholder'),
    },
    description: {
      name: 'description',
      componentName: 'input',
      type: 'text',
      label: tr('add.form.inputs.description.label'),
      value: shop.description || '',
      fillInfos: validator.description.fillInfos(),
      error: null,
      isValid: false,
      toggleShake: 0,
      onBlur,
      handleChange: onChange,
      placeholder: tr('add.form.inputs.description.placeholder'),
    },
  };
};
