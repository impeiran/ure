/**
 * 判空
 * @param {Any} target 
 */
const isEmpty = (target) => {
  return [Object, Array].includes((obj || {}).constructor) && !Object.entries((obj || {})).length;
};

export default isEmpty
