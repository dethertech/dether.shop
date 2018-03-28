/**
 * setDataShopPending
 * @param {[type]} data [description]
 */
const setDataShopPending = data => ({
  type: 'SET_DATA_SHOP_PENDING',
  payload: data,
});

/**
 * addTransaction
 * @param {[type]} type [description]
 * @param {[type]} hash [description]
 */
const addTransaction = ({ type, hash }) => ({
  type: 'ADD_TRANSACTION',
  payload: { type, hash },
});

/**
 * [addAddShopTransaction description]
 * @param {[type]} hash [description]
 */
const addAddShopTransaction = hash => addTransaction({ type: 'add', hash });

/**
 * [addDeleteShopTransaction description]
 * @param {[type]} hash [description]
 */
const addDeleteShopTransaction = hash =>
  addTransaction({ type: 'delete', hash });

/**
 * [endTransaction description]
 * @return {[type]} [description]
 */
const endTransaction = () => ({ type: 'END_TRANSACTION' });

/**
 * [addShop description]
 * @param {[type]} shop [description]
 */
const addShop = shop => ({
  type: 'ADD_SHOP',
  payload: shop,
});

/**
 * removeShop
 * @return {[type]} [description]
 */
const removeShop = () => ({
  type: 'REMOVE_SHOP',
});

export {
  addShop,
  removeShop,
  setDataShopPending,
  endTransaction,
  addTransaction,
  addDeleteShopTransaction,
  addAddShopTransaction,
};
