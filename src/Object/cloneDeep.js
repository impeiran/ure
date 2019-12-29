const forEach = (target, cb) => {
  if (!Array.isArray(target) && typeof cb !== 'function') return;

  const len = target.length
  let i = 0
  while(i < len) {
    cb(target[i], i++, target);
  }
}

/**
 * 深拷贝 (不拷贝：函数、正则对象、日期对象...)
 * @param {Object} target 
 */
const cloneDeep = (target) => {
  // 非对象类型
  if (target === null || typeof target !== 'object' || typeof target === 'function') {
    return target;
  }

  // 普通对象与数组克隆
  const isArray = Array.isArray(target);
  const list = isArray ? undefined : Object.keys(target);
  const result = isArray ? [] : {};
  
  forEach(list || target, (val, key) => {
    if (!isArray) {
      key = val;
    }
    result[key] = cloneDeep(target[key]);
  })

  return result;
}

export default cloneDeep;
