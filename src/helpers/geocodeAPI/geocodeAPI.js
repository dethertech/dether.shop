import axios from 'axios';
import config from '../../constants/config';

const GOOGLE_API = 'https://maps.google.com/maps/api/geocode/json';

/**
 * [filterPostalCode description]
 * @param  {[type]} e [description]
 * @return {[type]}   [description]
 */
const filterPostalCode = e => e.types.includes('postal_code') && !!e.long_name;

const GeocodeAPI = {
  /**
   * [getPostalCodeFromAddressComponents description]
   * @param  {[type]} addressComponents [description]
   * @return {[type]}                   [description]
   */
  getPostalCodeFromAddressComponents(addressComponents) {
    const elemFind = addressComponents.filter(filterPostalCode);
    if (elemFind && elemFind.length) {
      return elemFind[0].long_name;
    }
    return null;
  },

  /**
   * [postalCodeFromComponentsOrCall description]
   * @param  {[type]} addressComponents [description]
   * @param  {[type]} position [description]
   * @return {[type]}                   [description]
   */
  postalCodeFromComponentsOrCall: async (addressComponents, position) =>
    GeocodeAPI.getPostalCodeFromAddressComponents(addressComponents) ||
    (await GeocodeAPI.postalCode(position)) ||
    '0',

  /**
   * [getCountryIdFromAddressComponents description]
   * @param  {[type]} addressComponents [description]
   * @return {[type]}                   [description]
   */
  getCountryIdFromAddressComponents(addressComponents) {
    const elemFind = addressComponents.filter(
      e => e.types.includes('country') && !!e.short_name,
    );
    if (elemFind && elemFind.length) {
      return elemFind[0].short_name;
    }
    return null;
  },

  /**
   * @param {Object} lat and lng
   * @returns {Promise} the postal code of the lat and lng
   */
  async postalCode({ lat, lng }) {
    const results = await this.reverseGeocode({ lat, lng });

    for (let i = 0; i < results.length; i += 1) {
      const elemFind = this.getPostalCodeFromAddressComponents(
        results[i].address_components,
      );
      if (elemFind) {
        return elemFind;
      }
    }
    return null;
  },

  /**
   * @param {Object} lat and lng
   * @returns {Promise}
   */
  async reverseGeocode({ lat, lng }, cancelToken) {
    if (!lat || !lng) {
      return Promise.reject(new Error('Provided coordinates are invalid'));
    }

    const latLng = `${lat},${lng}`;
    const url = `${GOOGLE_API}?key=${config.googleMapKey}&latlng=${encodeURI(
      latLng,
    )}`;
    const { results } = await this.handleUrl(url, cancelToken);
    if (!results || results.length <= 0) {
      return Promise.reject(new Error('Unable to reverse lat lng'));
    }

    return results;
  },

  /**
   * [positionToAddress description]
   * @param  {[type]}  position [description]
   * @return {Promise}          [description]
   */
  async positionToAddress(position, cancelToken) {
    return (await this.reverseGeocode(position, cancelToken))[0]
      .formatted_address;
  },

  /**
   * [handleUrl description]
   * @param  {[type]}  url [description]
   * @return {Promise}     [description]
   */
  async handleUrl(url, cancelToken) {
    const json = await axios
      .get(url, { cancelToken })
      .catch(() => Promise.reject(new Error('Error fetching data')));
    if (json.data.status === 'OK') {
      return json.data;
    }
    return Promise.reject(
      new Error(`Server returned status code ${json.status}`),
    );
  },
};

export default GeocodeAPI;
