/**
 * 根据路径获取对象中的值
 * @param {Object} target
 * @param {String} path 
 * @param {Any} defaultValue 
 */
const getValue = (target, path, defaultValue) => {
  if (target === null || target === undefined) return defaultValue;

  const pathList = String.prototype.split.call(path, /[,[\].]+?/)
    .filter(Boolean);

  let result = target;
  let index = 0;
  while(result !== null && result !== undefined && index < pathList.length) {
    result = result[pathList[index]];
    index++;
  }

  return result || defaultValue;
};

export default getValue
