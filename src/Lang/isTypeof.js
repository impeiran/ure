import getType from './getType'

/**
 * Boolean 返回跟type的比较
 * @param {Any} target 
 * @param {String} type 
 */
const isTypeof = (target, type) => {
  return (typeof type === 'string' ? type.toLocaleLowerCase() : type) === getType(target);
};

export default isTypeof