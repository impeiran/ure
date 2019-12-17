
/**
 * ure
 * version: 1.0.0
 * desc: An utility library for javascript developer
 * address: https://github.com/impeiran/ure
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.ure = factory());
}(this, (function () { 'use strict';

  /**
   * ua信息
   */
  var ua = function ua() {
    return navigator ? navigator.userAgent : null;
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
   * 判空
   * @param {Any} target 
   */
  var isEmpty = function isEmpty(target) {
    return [Object, Array].includes((obj || {}).constructor) && !Object.entries(obj || {}).length;
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

  var faa = {
    ua: ua,
    isEmpty: isEmpty,
    isTypeof: isTypeof,
    getValue: getValue,
    isEmail: isEmail,
    isPhone: isPhone
  };

  return faa;

})));
