import { helperWeb3 } from './utils';

/**
 * [getNetwork description]
 * @return {Promise} [description]
 */
const getNetwork = async () => (await helperWeb3()).networkId;

export {
  getNetwork
};
