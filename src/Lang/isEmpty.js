/**
 * 判空
 * @param {Any} target
 */
const isEmpty = (target) => {
  const cst = (target || {}).constructor;
  return (cst === Object || cst === Array) && !Object.keys((target || {})).length;
};

export default isEmpty
