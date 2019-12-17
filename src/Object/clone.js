/**
 * 浅拷贝
 * @param {Object} target 
 */
const clone = (target) => {
  return Object.assign({}, target);
}

export default clone