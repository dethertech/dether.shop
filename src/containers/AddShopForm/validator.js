import tr from '../../translate';

export default {
  address: {
    tranform: val => val,
    test: val =>
      !!(val && val.lat && val.lng && val.countryId && val.countryId.length && val.postalCode),
    fillInfos: () => null,
    errorMsg: () => tr('add.form.inputes.address.error')
  },
  cat: {
    tranform: val => (val ? val.trim().substring(0, 16) : ''),
    test: val => val && val.length && val.length <= 16,
    fillInfos: () => null,
    errorMsg: () => tr('add.form.inputes.cat.error')
  },
  name: {
    tranform: val => (val ? val.trim().substring(0, 16) : ''),
    test: val => val && val.length && val.length <= 16,
    fillInfos: () => null,
    errorMsg: () => tr('add.form.inputes.name.error')
  },
  description: {
    tranform: val => (val ? val.trim() : ''),
    test: val => val && val.length && val.length <= 16,
    fillInfos: () => null,
    errorMsg: () => tr('add.form.inputes.description.error')
  },
  opening: {
    tranform: val => (val ? val.trim() : ''),
    test: str => {
      const hours = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUV';
      let idx = 0;
      for (let i = 0; i < str.length;) {
        const testClose = str[i] === '0';
        const testOpen = hours.includes(str[i]) && hours.includes(str[i + 1]);
        if (!testClose && !testOpen) {
          return false;
        }
        idx += 1;
        i += testClose ? 1 : 2;
      }
      return idx === 7;
    },
    fillInfos: () => null,
    errorMsg: () => tr('add.form.inputes.opening.error')
  }
};
