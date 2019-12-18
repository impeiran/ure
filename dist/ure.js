
/**
 * ure
 * version: 1.0.0
 * desc: An utility library for javascript developer
 * address: https://github.com/impeiran/ure#readme
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@babel/runtime/helpers/typeof')) :
  typeof define === 'function' && define.amd ? define(['@babel/runtime/helpers/typeof'], factory) :
  (global = global || self, global.ure = factory(global._typeof));
}(this, (function (_typeof) { 'use strict';

  _typeof = _typeof && _typeof.hasOwnProperty('default') ? _typeof['default'] : _typeof;

  /**
   * ua信息
   */
  var ua = function ua(sign) {
    return navigator ? sign === 'i' ? navigator.userAgent.toLocaleLowerCase() : navigator.userAgent : null;
  };

  /**
   * Boolean 返回跟type的比较
   * @param {Any} target 
   * @param {String} type 
   */
  var isTypeof = function isTypeof(target, type) {
    return type === /^\[object\s(.*)\]$/.exec(Object.prototype.toString.call(target))[1].toLowerCase();
  };

  /**
   * string 返回type
   * @param {Any} target 
   */
  var getType = function getType(target) {
    return /^\[object\s(.*)\]$/.exec(Object.prototype.toString.call(target))[1].toLowerCase();
  };

  /**
   * 判空
   * @param {Any} target 
   */
  var isEmpty = function isEmpty(target) {
    return [Object, Array].includes((target || {}).constructor) && !Object.entries(target || {}).length;
  };

  /**
   * 浅拷贝
   * @param {Object} target 
   */
  var clone = function clone(target) {
    return Object.assign({}, target);
  };

  /**
   * Boolean 返回跟type的比较
   * @param {Any} target 
   * @param {String} type 
   */
  var isTypeof$1 = function isTypeof(target, type) {
    return type === /^\[object\s(.*)\]$/.exec(Object.prototype.toString.call(target))[1].toLowerCase();
  };

  var forEach = function forEach(target, cb) {
    if (!Array.isArray(target) && !isTypeof$1(cb, 'function')) return;
    var len = target.length;
    var i = 0;

    while (i < len) {
      cb(target[i], i++, target);
    }
  };

  var NEED_DEEP = ['array', 'object', 'set', 'map', 'arguments'];
  /**
   * 初始化
   * @param {Any} target 
   */

  var init = function init(target) {
    var cons = target.constructor;
    return new cons();
  };
  /**
   * 克隆其他对象
   * @param {Any} target 
   * @param {String} type 
   */


  var cloneOtherType = function cloneOtherType(target, type) {
    switch (type) {
      case 'symbol':
        return Symbol(target.description);

      default:
        return target;
    }
  };
  /**
   * 深拷贝 (不拷贝：函数、正则对象、日期对象...)
   * @param {Object} target 
   */


  var cloneDeep = function cloneDeep(target) {
    var map = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new WeakMap();
    var type = getType(target); // 非对象类型

    if (target === null || _typeof(target) !== 'object') {
      return target;
    } // 克隆结果


    var result; // 根据不同类型处理

    if (NEED_DEEP.includes(type)) {
      result = init(target);
    } else {
      return cloneOtherType(target, type);
    } // 解决循环引用


    if (map.get(target)) {
      return map.get(target);
    }

    map.set(target, result); // 克隆set

    if (type === 'set') {
      target.forEach(function (item) {
        result.add(cloneDeep(item));
      });
      return result;
    } // 克隆map


    if (type === 'map') {
      target.forEach(function (item, key) {
        result.set(key, cloneDeep(item));
      });
      return result;
    } // 普通对象与数组克隆


    var isArray = type === 'array';
    var list = isArray ? undefined : Object.keys(target);
    forEach(list || target, function (val, key) {
      if (!isArray) {
        key = val;
      }

      result[key] = cloneDeep(target[key], map);
    });
    return result;
  };

  /**
   * 根据路径获取对象中的值
   * @param {Object} target
   * @param {String} path 
   * @param {Any} defaultValue 
   */
  var getValue = function getValue(target, path, defaultValue) {
    if (target === null || target === undefined) return defaultValue;
    var pathList = String.prototype.split.call(path, /[,[\].]+?/).filter(Boolean);
    var result = target;
    var index = 0;

    while (result !== null && result !== undefined && index < pathList.length) {
      result = result[pathList[index]];
      index++;
    }

    return result || defaultValue;
  };

  /**
   * 批量删除对象中的key值(shallow)
   * @param {Object} target 目标对象
   * @param {String | Array} keys 要删除的key值
   */
  var omit = function omit(target, keys) {
    if (!Array.isArray(keys)) {
      if (typeof keys === 'string') {
        keys = keys.split(/,;/);
      } else {
        return target;
      }
    }

    return Object.keys(target).reduce(function (result, k) {
      if (!keys.includes(k)) {
        result[k] = target[k];
      }

      return result;
    }, {});
  };

  /**
   * 
   * @param {Number} min 下限
   * @param {Number} max 上限
   * @param {Boolean} floor 向下取整
   */
  var random = function random() {
    var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var floor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var result = Math.random() * (max - min) + min;
    return floor ? Math.floor(result) : result;
  };

  /**
   * 生成随机hash颜色值
   */
  var randomColor = function randomColor() {
    return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
  };

  var KEY_SIGN_LIST = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
  /**
   * 随机生成key值
   * @param {Number} len 长度
   */

  var randomKey = function randomKey() {
    var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 16;
    var result = '';

    for (var i = 0; i < len; i++) {
      result += KEY_SIGN_LIST.charAt(Math.floor(Math.random() * (KEY_SIGN_LIST.length)));
    }

    return result;
  };

  var REG_EMAIL = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
  /**
   * 校验邮箱地址
   * @param {String} target 
   */

  var isEmail = function isEmail(target) {
    return REG_EMAIL.test(target);
  };

  var isMob = /^1[3|4|5|7|8][0-9]{9}$/;
  var isTel = /^([0-9]{3,4}-)?[0-9]{7,8}$/;
  /**
   * 校验电话号码
   * @param {String} target 
   */

  var isPhone = function isPhone(target) {
    return isTel.test(target) || isMob.test(target);
  };

  var ure = {
    ua: ua,
    getType: getType,
    isTypeof: isTypeof,
    isEmpty: isEmpty,
    clone: clone,
    cloneDeep: cloneDeep,
    getValue: getValue,
    omit: omit,
    random: random,
    randomColor: randomColor,
    randomKey: randomKey,
    isEmail: isEmail,
    isPhone: isPhone
  };

  return ure;

})));
