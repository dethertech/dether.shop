/**
 * Get the value of the corresponding key, if the value is null return defaultValue
 * @param  {Object}
 * @param  {String} key
 * @param  {Any} defaultValue
 * @return {Any}
 */
const get = (object, key, defaultValue) => {
  const result = object == null ? undefined : object[key];
  return result === undefined ? defaultValue : result;
};

export default get;
