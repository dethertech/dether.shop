const get = (object, key, defaultValue) => {
  const result = object == null ? undefined : object[key];
  return result === undefined ? defaultValue : result;
};

export default get;
