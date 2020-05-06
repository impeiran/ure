/**
 * 拓展对象
 * @param {Object}
 * @returns Object
 */
const extend = function () {
  if (!arguments.length) return {}

  const target = arguments[0]

  for (let i = 1, len = arguments.length; i < len; ++i) {
    Object.keys(arguments[i]).forEach(k => {
      target[k] = arguments[i][k]
    })
  }

  return target
}

export default extend
