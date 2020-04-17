/**
 * 浅拷贝
 * @param {Object} target
 */
const clone = (target) => {
  if (target == null || typeof target !== 'object') return target
  return { ...target }
}

export default clone
