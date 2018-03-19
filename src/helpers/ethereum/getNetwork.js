import { helperWeb3 } from './utils';
/*
const getNetwork = () => new Promise((res, rej) => web3js.version.getNetwork((err, id) => {
  console.log(web3js);
  if (err)
    return rej(err);
  res(id);
}));
*/

const getNetwork = async () => (await helperWeb3()).networkId;
export {
  getNetwork
};
