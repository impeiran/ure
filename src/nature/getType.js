/**
 * string 返回type
 * @param {Any} target
 */
const getType = (target) => {
  return /^\[object\s(.*)\]$/.exec(Object.prototype.toString.call(target))[1].toLowerCase()
}

export default getType
