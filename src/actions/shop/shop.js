/**
 * setDataShopPending
 * @param {[type]} data [description]
 */
const setDataShopPending = data => ({
  type: 'SET_DATA_SHOP_PENDING',
  payload: data,
});

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

export { addShop, removeShop, setDataShopPending };
