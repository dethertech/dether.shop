import tr from '../../../translate';
import { isZoneShopOpen } from '../../../helpers';

const hasError = (condition, error) => (condition ? null : error);

export default {
  address: {
    tranform: val => val,
    test: async val => {
      if (
        !(
          val &&
          val.lat &&
          val.lng &&
          val.countryId &&
          val.countryId.length &&
          val.postalCode
        )
      )
        return tr('add.form.inputs.address.errors.invalid');
      const isOpen = await isZoneShopOpen(val.countryId);
      if (!isOpen) return tr('add.form.inputs.address.errors.zone');
    },
    fillInfos: () => null,
  },
  cat: {
    tranform: val => (val ? val.substring(0, 16) : ''),
    test: val =>
      hasError(
        val && val.length && val.length <= 16,
        tr('add.form.inputs.cat.error'),
      ),
    fillInfos: () => null,
  },
  name: {
    tranform: val => (val ? val.substring(0, 16) : ''),
    test: val =>
      hasError(
        val && val.length && val.length <= 16,
        tr('add.form.inputs.name.error'),
      ),
    fillInfos: () => null,
  },
  description: {
    tranform: val => val.substring(0, 32) || '',
    test: val =>
      hasError(
        val && val.length && val.length <= 32,
        tr('add.form.inputs.description.error'),
      ),
    fillInfos: () => null,
  },
  opening: {
    tranform: val => val || '',
    test: str => {
      const hours = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUV';
      let idx = 0;
      for (let i = 0; i < str.length; ) {
        const testClose = str[i] === '0';
        const testOpen = hours.includes(str[i]) && hours.includes(str[i + 1]);
        if (!testClose && !testOpen) {
          return tr('add.form.inputs.opening.error');
        }
        idx += 1;
        i += testClose ? 1 : 2;
      }
      if (!(idx === 7)) return tr('add.form.inputs.opening.error');
    },
    fillInfos: () => null,
  },
};
