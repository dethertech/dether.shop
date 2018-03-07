/**
 * setUserPosition
 * @param {[type]} userPosition [description]
 */
const setUserPosition = userPosition => ({
  type: 'SET_USER_POSITION',
  payload: { userPosition }
});

/**
 * setCenterPosition
 * @param {[type]} centerPosition [description]
 */
const setCenterPosition = centerPosition => ({
  type: 'SET_CENTER_POSITION',
  payload: { centerPosition }
});

/**
 * setUserInfo
 * @param {[type]} userInfo [description]
 */
const setUserInfo = (userInfo) => ({
  type: 'SET_USER_INFO',
  payload: { userInfo }
});

/**
 * setShopOnCard
 * @param {[type]} shop [description]
 */
const setShopOnCard = shop => ({
  type: 'SET_SHOP_ON_CARD',
  payload: { shop },
});

/**
 * openCard
 * @return {[type]} [description]
 */
const openCard = () => ({ type: 'OPEN_CARD' });

/**
 * closeCard
 * @return {[type]} [description]
 */
const closeCard = () => ({ type: 'CLOSE_CARD' });

/**
 * setMapInitiated
 */
const setMapInitiated = () => ({ type: 'SET_MAP_INITIATED' });

/**
 * fetchShops
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
const fetchShops = (params) => ({
  type: 'API:FETCH_SHOPS',
  url: '/shop',
  params,
});

/**
 * fetchAll
 * @param  {[type]} centerPosition [description]
 * @param  {Number} [radius=3]     [description]
 * @return {[type]}                [description]
 */
const fetchAll = (centerPosition, radius = 3) => dispatch => {
  let rad = radius > 30 ? 30 : radius;
  rad = rad < 3 ? 3 : rad;
  dispatch(fetchShops({ ...centerPosition, radius: rad, limit: 500 }));
};

/**
 * fetchPositionByIp
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
const fetchPositionByIp = res => ({
  type: 'API:FETCH_POSITION_BY_IP',
  url: 'https://ipinfo.io/json',
  onSuccess: () => res(),
  onError: () => res()
});

/**
 * fetchUserInfo
 * @return {[type]} [description]
 */
const fetchUserInfo = () => ({
  type: 'API:FETCH_USER_INFO',
  url: 'https://ipinfo.io/json'
});

/**
 * fetchPosition
 * @return {[type]} [description]
 */
const fetchPosition = () => (
  async dispatch => (
    new Promise(res => {
      dispatch({ type: 'INITIATE_POSITION_PENDING' });
      // If user accept geolocalisation
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          position => {
            const positionF = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            dispatch(setUserPosition(positionF));
            dispatch(setCenterPosition(positionF));
            dispatch({ type: 'INITIATE_POSITION_SUCCESS' });
            res(positionF);
          },
          () => dispatch(fetchPositionByIp(res))
        );
      }
      // Else get geolocalisation from ip
      dispatch(fetchPositionByIp(res));
    })
  )
);

export {
  setUserPosition,
  setCenterPosition,
  setMapInitiated,
  setShopOnCard,
  setUserInfo,
  fetchShops,
  fetchPosition,
  fetchPositionByIp,
  fetchUserInfo,
  fetchAll,
  openCard,
  closeCard,
};
