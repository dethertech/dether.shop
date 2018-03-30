/**
 * Get the last element of the array
 * @param  {[type]} array
 * @return {[type]}
 */
const last = array => {
  const length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
};

export default last;
