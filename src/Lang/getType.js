/**
 * 获取类型
 * @param {Any} target 
 */
function getType (target) {
  return /^\[object\s(.*)\]$/.exec(Object.prototype.toString.call(target))[1].toLowerCase();
}

export default getType