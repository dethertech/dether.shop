import config from '../constants/config';

const GOOGLE_API = 'https://maps.google.com/maps/api/geocode/json';

const filterPostalCode = e => e.types.includes('postal_code') && !!e.long_name;

const GeocodeAPI = {
  getPostalCodeFromAddressComponents(addressComponents) {
    const elemFind = addressComponents.filter(filterPostalCode);
    if (elemFind && elemFind.length) {
      return elemFind[0].long_name;
    }
    return null;
  },

  getCountryIdFromAddressComponents(addressComponents) {
    const elemFind = addressComponents.filter(e => e.types.includes('country') && !!e.short_name);
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
      const elemFind = this.getPostalCodeFromAddressComponents(results[i].address_components);
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
  async reverseGeocode({ lat, lng }) {
    if (!lat || !lng) {
      return Promise.reject(new Error('Provided coordinates are invalid'));
    }

    const latLng = `${lat},${lng}`;
    const url = `${GOOGLE_API}?key=${config.googleMapKey}&latlng=${encodeURI(latLng)}`;
    const { results } = await this.handleUrl(url);
    if (!results || results.length <= 0) {
      return Promise.reject(new Error('Enable to reverse lat lng'));
    }

    return results;
  },

  async handleUrl(url) {
    const response = await fetch(url).catch(() => Promise.reject(new Error('Error fetching data')));

    const json = await response
      .json()
      .catch(() => Promise.reject(new Error('Error parsing server response')));

    if (json.status === 'OK') {
      return json;
    }
    return Promise.reject(new Error(`Server returned status code ${json.status}`));
  }
};

export default GeocodeAPI;
