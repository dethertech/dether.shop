/**
 * setDataShopPending
 * @param {[type]} data [description]
 */
const setDataShopPending = data => ({
  type: 'SET_DATA_SHOP_PENDING',
  payload: data
});

/**
 * addTransaction
 * @param {[type]} type [description]
 * @param {[type]} hash [description]
 */
const addTransaction = ({ type, hash }) => ({
  type: 'ADD_TRANSACTION',
  payload: { type, hash }
});

const addAddShopTransaction = hash => addTransaction({ type: 'add', hash });

const addShop = shop => ({
  type: 'ADD_SHOP',
  payload: shop
});

/**
 * removeShop
 * @return {[type]} [description]
 */
const removeShop = () => ({
  type: 'REMOVE_SHOP'
});
export { addShop, removeShop, setDataShopPending, addTransaction, addAddShopTransaction };
