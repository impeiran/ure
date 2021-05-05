/**
 * 检测是否为数值
 * @param {Any} target
 */
const isNumber = (target: string): boolean => /^\d+(\.\d+)?$/.test(target)

export default isNumber
