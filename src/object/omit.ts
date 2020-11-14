/**
 * 批量删除对象中的key值(shallow)
 * @param {Object} target 目标对象
 * @param {String | Array} keys 要删除的key值
 */
const omit = (target, keys) => {
  if (!Array.isArray(keys)) {
    if (typeof keys === 'string') {
      keys = keys.split(/[,;\s]/)
    } else {
      return target
    }
  }

  return Object.keys(target).reduce((result, k) => {
    if (keys.indexOf(k) === -1) {
      result[k] = target[k]
    }
    return result
  }, {})
}

export default omit
