import extend from './extend'

/**
 * 浅拷贝
 * @param {Object} target
 */
const clone = (target) => {
  if (target == null || typeof target !== 'object') return target
  return extend({}, target)
}

export default clone
