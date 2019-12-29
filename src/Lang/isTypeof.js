import getType from './getType'

/**
 * Boolean 返回跟type的比较
 * @param {Any} target 
 * @param {String} type 
 */
const isTypeof = (target, type) => {
  return type === getType(target);
};

export default isTypeof