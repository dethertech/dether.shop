import { getDetherContract, toNBytes } from './utils';

const isZoneShopOpen = async country => {
  const detherContract = await getDetherContract();
  return detherContract.methods
    .openedCountryShop(`0x${toNBytes(country, 2)}`)
    .call();
};

export default isZoneShopOpen;
