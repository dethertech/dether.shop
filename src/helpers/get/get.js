/**
 * [get description]
 * @param  {[type]} object       [description]
 * @param  {[type]} key          [description]
 * @param  {[type]} defaultValue [description]
 * @return {[type]}              [description]
 */
const get = (object, key, defaultValue) => {
  const result = object == null ? undefined : object[key];
  return result === undefined ? defaultValue : result;
};

export default get;
