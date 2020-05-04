/**
 * string 返回type
 * @param {Any} target
 */
const getType = (target) => {
  return Object.prototype.toString.call(target).slice(8, -1).toLowerCase()
}

export default getType
