/**
 * Boolean 返回跟type的比较
 * @param {Any} target 
 * @param {String} type 
 */
function isTypeof (target, type) {
  return type === /^\[object\s(.*)\]$/.exec(Object.prototype.toString.call(target))[1].toLowerCase();
}

export default isTypeof