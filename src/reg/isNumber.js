/**
 * 检测是否为数值
 * @param {Any} target
 */
const isNumber = (target) => {
  return /^\d+(\.\d+)?$/.test(target)
}

export default isNumber
