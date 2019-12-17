import getType from '../lang/getType'
import isTypeOf from '../lang/isTypeOf'

const forEach = (target, cb) => {
  if (!Array.isArray(target) && !isTypeOf(cb, 'function')) return;

  const len = target.length
  let i = 0
  while(i < len) {
    cb(target[i], i++, target);
  }
}

const NEED_DEEP = [
  'array', 'object', 'set', 'map', 'arguments'
];

/**
 * 初始化
 * @param {Any} target 
 */
const init = (target) => {
  const cons = target.constructor;
  return new cons();
}

/**
 * 克隆其他对象
 * @param {Any} target 
 * @param {String} type 
 */
const cloneOtherType = (target, type) => {
  switch (type) {
    case 'symbol':
      return Symbol(target.description);
    default:
      return target;
  }
}

/**
 * 深拷贝 (不拷贝：函数、正则对象、日期对象...)
 * @param {Object} target 
 */
const cloneDeep = (target, map = new WeakMap()) => {
  const type = getType(target);

  // 非对象类型
  if (target === null || typeof target !== 'object') {
    return target;
  }

  // 克隆结果
  let result;

  // 根据不同类型处理
  if (NEED_DEEP.includes(type)) {
    result = init(target);
  } else {
    return cloneOtherType(target, type);
  }

  // 解决循环引用
  if (map.get(target)) {
    return map.get(target);
  }
  map.set(target, result);

  // 克隆set
  if (type === 'set') {
    target.forEach(item => {
      result.add(cloneDeep(item));
    });
    return result;
  }

  // 克隆map
  if (type === 'map') {
    target.forEach((item, key) => {
      result.set(key, cloneDeep(item));
    });
    return result;
  }

  // 普通对象与数组克隆
  const isArray = type === 'array';
  const list = isArray ? undefined : Object.keys(target);
  forEach(list || target, (val, key) => {
    if (!isArray) {
      key = val;
    }
    result[key] = cloneDeep(target[key], map);
  })

  return result;
}

export default cloneDeep
