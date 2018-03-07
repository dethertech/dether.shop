import { web3js } from './utils';

const getTransactionStatus = async hash => {
  const transaction = await web3js.eth.getTransactionReceipt(hash);
  if (!transaction)
    return 'pending';
  else if (transaction.status === '0x1')
    return 'success';
  return 'error';
};

export default getTransactionStatus;
