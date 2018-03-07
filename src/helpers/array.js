export const uniqueArray = (arr, objKey) => {
  const keyToPos = {};

  arr.forEach((e, idx) => { keyToPos[e[objKey]] = idx; });
  return arr.filter((e, idx) => keyToPos[e[objKey]] === idx);
};
