/**
 * 判空
 * @param {Any} target 
 */
const isEmpty = (target) => {
  return [Object, Array].includes((target || {}).constructor) && !Object.entries((target || {})).length;
};

export default isEmpty
