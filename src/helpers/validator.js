export default {
  lat: {
    tranform: val => val,
    test: val => !!val
  },
  lng: {
    tranform: val => val,
    test: val => !!val
  },
  countryId: {
    tranform: val => (val ? val.trim() : ''),
    test: val => val && val.length === 2
  },
  postalCode: {
    tranform: val => (val ? val.trim() : ''),
    test: val => val && val.length && val.length <= 11,
    fillInfos: () => '11 car max',
    errorMsg: () => '11 car max'
  },
  cat: {
    tranform: val => (val ? val.trim() : ''),
    test: val => val && val.length && val.length <= 16,
    fillInfos: () => '16 car max',
    errorMsg: () => '16 car max'
  },
  name: {
    tranform: val => (val ? val.trim() : ''),
    test: val => val && val.length && val.length <= 16,
    fillInfos: () => '16 car max',
    errorMsg: () => '16 car max'
  },
  description: {
    tranform: val => (val ? val.trim() : ''),
    test: val => val && val.length && val.length <= 32,
    fillInfos: () => '32 car max',
    errorMsg: () => '32 car max'
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
    }
  }
};
