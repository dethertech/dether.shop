import { getDetherContract, toNBytes } from './utils';

const getLicenceShop = async countryIso =>
  (await getDetherContract()).methods.licenceShop(`0x${toNBytes(countryIso, 2)}`).call();

export default getLicenceShop;
