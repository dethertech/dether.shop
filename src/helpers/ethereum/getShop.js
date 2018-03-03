import DetherCore from 'dethercontract/contracts/DetherCore.json';

import { web3js } from './utils';

// TO DO
const validateShop = (shop) => {
  if (!shop || typeof shop !== 'object') {
    return { error: true, msg: 'Invalid args' };
  }
  // if (!shop.lat || Number.isNaN(shop.lat) || shop.lat > 90 || shop.lat < -90) {
  //   return { error: true, msg: 'Invalid latitude' };
  // }
  // if (!shop.lng || Number.isNaN(shop.lng) || shop.lng > 180 || shop.lng < -180) {
  //   return { error: true, msg: 'Invalid longitude' };
  // }
  // if (!shop.countryId || shop.countryId < 1 ||  shop.countryId > 4) {
  //   return { error: true, msg: 'Invalid zone' };
  // }
  // if (!shop.rates || shop.rates <= 0 || shop.rates > 100) {
  //   return { error: true, msg: 'Invalid rates' };
  // }
  // if (!shop.avatarId || !Number.isInteger(shop.avatarId) || shop.avatarId < 0) {
  //   return { error: true, msg: 'Invalid avatar' };
  // }
  // if (!shop.currencyId || !Number.isInteger(shop.currencyId) || shop.currencyId < 0) {
  //   return { error: true, msg: 'Invalid currency' };
  // }
  // if (!shop.messengerAddr || shop.messengerAddr.length < 2 || shop.messengerAddr.length > 30) {
  //   return { error: true, msg: 'Invalid telegram' };
  // }
  // if (!shop.amount || Number.isNaN(shop.amount) || shop.amount < 0.01) {
  //   return { error: true, msg: 'Invalid amount' };
  // }
  // if (!shop.postalCode) {
  //   return { error: true, msg: 'Invalid amount' };
  // }
  return {};
};

const shopFromContract = (rawShop) => {
  const validation = validateShop(rawShop);
  if (validation.error) throw new TypeError(validation.msg);
  try {
    return {
      lat: web3js.utils.hexToUtf8(rawShop.lat).replace(/\0/g, ''),
      lng: web3js.utils.hexToUtf8(rawShop.lng).replace(/\0/g, ''),
      countryId: web3js.utils.hexToUtf8(rawShop.countryId).replace(/\0/g, ''),
      postalCode: web3js.utils.hexToUtf8(rawShop.postalCode).replace(/\0/g, ''),
      cat: web3js.utils.hexToUtf8(rawShop.cat).replace(/\0/g, ''),
      name: web3js.utils.hexToUtf8(rawShop.name).replace(/\0/g, ''),
      description: web3js.utils.hexToUtf8(rawShop.description).replace(/\0/g, ''),
      opening: web3js.utils.hexToUtf8(rawShop.opening).replace(/\0/g, ''),
    };
  } catch (e) {
    throw new TypeError(`Invalid shop profile: ${e.message}`);
  }
};

/**
 * return formatted shop
 *  @returns {Object}
 */
const getShop = () =>
  new Promise(async (res, rej) => {
    const address = (await web3js.eth.getAccounts())[0];
    const networkId = await web3js.eth.net.getId();
    const detherContract = new web3js.eth
      .Contract(DetherCore.abi, DetherCore.networks[networkId].address);
    try {
      const rawShop = await detherContract.methods.getShop(address).call();
      let id = web3js.utils.hexToUtf8(rawShop[2]).replace(/\0/g, '');
      id = id.replace(/\0/g, '');
      if (!id)
        res(null);
      res(Object.assign(
        {},
        shopFromContract(rawShop),
        {
          ethAddress: address,
        }
      ));
    } catch (e) {
      rej(new TypeError(`Invalid shop profile: ${e.message}`));
    }
  });

export default getShop;
