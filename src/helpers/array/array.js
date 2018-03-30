/**
 * [filter array of object by a key uniqueness]
 * @param  {Array} arr    array of object
 * @param  {String} objKey key to filter with
 * @return {Array}        The filtered array
 */
export const uniqueArray = (arr, objKey) => {
  const keyToPos = {};

  arr.forEach((e, idx) => {
    keyToPos[e[objKey]] = idx;
  });
  return arr.filter((e, idx) => keyToPos[e[objKey]] === idx);
};
