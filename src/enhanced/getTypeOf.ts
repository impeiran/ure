/**
 * string 返回type
 * @param {Any} target
 */
const getTypeOf = (target: unknown): string => {
  return Object.prototype.toString
    .call(target)
    .slice(8, -1)
    .toLowerCase()
}

export default getTypeOf
