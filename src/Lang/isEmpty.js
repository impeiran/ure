/**
 * 判空
 * @param {Any} target
 */
const isEmpty = (target) => {
  return [Object, Array].includes((target || {}).constructor) && !Object.keys((target || {})).length;
};

export default isEmpty
