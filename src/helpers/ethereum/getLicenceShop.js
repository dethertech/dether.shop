import { getDetherContract, toNBytes, web3js } from './utils';

const getLicenceShop = async countryIso => {
  const contract = await getDetherContract();
  return web3js.utils.fromWei(
    await contract.methods.licenceShop(`0x${toNBytes(countryIso, 2)}`).call(),
  );
};

export default getLicenceShop;
