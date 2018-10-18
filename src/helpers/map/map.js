import supercluster from 'points-cluster';

/**
 * Check if 2 postions are equal
 * @param  {Object} pos1 postion object
 * @param  {String} pos1.lat latitude
 * @param  {String} pos1.lng longitude
 * @param  {[type]} pos2 [description]
 * @param  {String} pos2.lat latitude
 * @param  {String} pos2.lng longitude
 * @return {Boolean}
 */
export const isEqu = (pos1, pos2) =>
  pos1.lat === pos2.lat && pos1.lng === pos2.lng;

/**
 * convert degree value in radians
 * @param  {Number} deg
 * @return {Number}
 */
export const toRadians = deg => deg * (Math.PI / 180);

/**
 * get distance between 2 postions
 * @param  {Object} pos1 postion object
 * @param  {String} pos1.lat latitude
 * @param  {String} pos1.lng longitude
 * @param  {[type]} pos2 [description]
 * @param  {String} pos2.lat latitude
 * @param  {String} pos2.lng longitude
 * @return {Number} distance in meter
 */
export const distance = (pos1, pos2) => {
  const R = 6371e3; // metres
  const d1 = toRadians(pos1.lat);
  const d2 = toRadians(pos2.lat);
  const dp = toRadians(pos2.lat - pos1.lat);
  const dl = toRadians(pos2.lng - pos2.lng);

  const a =
    Math.sin(dp / 2) * Math.sin(dp / 2) +
    Math.cos(d1) * Math.cos(d2) * Math.sin(dl / 2) * Math.sin(dl / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
};

/**
 * getClusterData
 * @param  {[type]} data     [description]
 * @param  {[type]} propsMap [description]
 * @return {[type]}          [description]
 */
export const getClusterData = (data, propsMap) => {
  const maxZoom = 16;
  const ratio = 1 - (maxZoom - propsMap.zoom) / maxZoom;
  const cl = supercluster(data, {
    minZoom: 0,
    maxZoom,
    radius: 50 * ratio,
  });

  return cl(propsMap).map(({ wx, wy, numPoints, points }) => ({
    ...points[0],
    lat: wy,
    lng: wx,
    text: numPoints,
    numPoints,
    id: `${numPoints}_${points[0].id}`,
  }));
};

/**
 * addressByPosition
 * @param  {[type]} lat [description]
 * @param  {[type]} lng [description]
 * @return {[type]}     [description]
 */
export async function addressByPosition({ lat, lng }) {
  const { google } = window;
  const geocoder = new google.maps.Geocoder();
  const { OK } = google.maps.GeocoderStatus;
  const latlng = new google.maps.LatLng(lat, lng);

  return new Promise((resolve, reject) => {
    geocoder.geocode({ location: latlng }, (results, status) => {
      if (status !== OK) {
        reject(status);
      }
      resolve(results);
    });
  });
}

/**
 * addressNameByPosition
 * @param  {[type]} position [description]
 * @return {[type]}          [description]
 */
export async function addressNameByPosition(position) {
  const address = await addressByPosition(position).catch(() => null);
  if (address && address.length > 0) {
    return address[0].formatted_address;
  }
  return null;
}

/**
 * call LatLng of google map
 * @param  {Object} position
 * @return {Object} position
 */
export function LatLng(position) {
  let outPos = position;
  if (
    window &&
    window.google &&
    window.google.maps &&
    window.google.maps.LatLng
  ) {
    let { lat } = position;
    if (position.lat > 80) {
      lat = 77.999999;
    } else if (position.lat < -80) {
      lat = -77.999999;
    }

    const newP = new window.google.maps.LatLng(lat, position.lng, false);
    outPos = {
      ...position,
      lat: newP.lat(),
      lng: newP.lng(),
    };
  }

  return outPos;
}
