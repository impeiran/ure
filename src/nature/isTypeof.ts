import getType from './getType'

/**
 * Boolean 返回跟type的比较
 * @param {Any} target
 * @param {String} type
 */
const isTypeof = (target: any, type: string) => {
  if (typeof type !== 'string') return false
  return type.toLocaleLowerCase() === getType(target)
}

export default isTypeof
