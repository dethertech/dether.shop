import validator from '../../helpers/validator';

export default (instance, props) => {
  const { shop } = props;
  return {
    name: {
      name: 'name',
      componentName: 'input',
      type: 'text',
      label: 'Name :',
      value: shop.name || '',
      fillInfos: validator.name.fillInfos(),
      error: null,
      isValid: false,
      toggleShake: 0,
      onBlur: instance.onBlur,
      onChange: instance.onChange
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
      toggleShake: 0,
      onBlur: instance.onBlur,
      onChange: instance.onChange
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
      toggleShake: 0,
      onBlur: instance.onBlur,
      onChange: instance.onChange
    }
  };
};
