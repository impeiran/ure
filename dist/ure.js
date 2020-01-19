
/**
 * ure
 * version: 0.1.0-beta.1
 * author: impeiran,
 * homepage: https://github.com/impeiran/ure#readme
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.ure = factory());
}(this, (function () { 'use strict';

  /**
   * ua信息
   */
  var ua = function ua(sign) {
    return navigator ? sign ? navigator.userAgent.toLocaleLowerCase() : navigator.userAgent : null;
  };

  var isMobile = function isMobile() {
    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(ua('i'));
  };
  var isPC = function isPC() {
    return !isMobile();
  };
  var isIE = function isIE() {
    return !!window.ActiveXObject || 'ActiveXObject' in window;
  };
  var isEdge = function isEdge() {
    return /Edge/.test(ua());
  };
  var isIOS = function isIOS() {
    return /ios|iphone|ipad|ipod/.test(ua('i'));
  };
  var isIPad = function isIPad() {
    return /ipad/.test(ua('i'));
  };
  var isAndroid = function isAndroid() {
    return /android/.test(ua('i'));
  };
  var isWeixin = function isWeixin() {
    return /MicroMessenger/i.test(ua());
  };
  var isQQ = function isQQ() {
    return /qq\//.test(ua('i'));
  };
  var isDingTalk = function isDingTalk() {
    return /dingtalk/.test(ua('i'));
  };

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  /**
   * 下载Url链接的资源
   * @param {Object | String} option 配置项或者url
   */
  var download = function download(option) {
    if (!option) return false;
    var defaultOption = {
      method: 'get',
      name: ''
    };

    if (typeof option === 'string') {
      option = _objectSpread2({}, defaultOption, {
        url: option
      });
    } else {
      option = _objectSpread2({}, defaultOption, {}, option);
    }

    if (!option.url) return false;

    var _createElement = function _createElement(tagName, attrs) {
      var el = document.createElement(tagName);
      Object.keys(attrs).forEach(function (key) {
        el.setAttribute(key, attrs[key]);
      });
      return el;
    };

    var _action = function _action(el, trigger) {
      document.body.appendChild(el);
      trigger();
      document.body.removeChild(el);
    };

    var method = option.method ? option.method.toLowerCase() : '';

    if (method === 'get') {
      var a = _createElement('a', {
        href: option.url,
        download: option.name,
        target: '_blank',
        style: 'display:none;'
      });

      _action(a, function () {
        return a.click();
      });
    } else if (method === 'post') {
      var form = _createElement('form', {
        method: method,
        action: option.url,
        target: '_blank',
        style: 'display:none;'
      });

      Object.keys(option.data || {}).forEach(function (key) {
        form.appendChild(_createElement('input', {
          type: 'hidden',
          name: key,
          value: option.data[key]
        }));
      });

      _action(form, function () {
        return form.submit();
      });
    }
  };

  /**
   * 函数防抖
   * @param {Function} fn 需要截流的函数
   * @param {Number} wait 等待时长 单位ms
   */
  var debounce = function debounce(fn, wait) {
    var timer;
    return function () {
      var context = this;
      var args = arguments;
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        return fn.apply(context, args);
      }, wait);
    };
  };

  /**
   * 节流
   * @param {Function} fn 被节流的函数
   * @param {Number} wait 时间间隔 
   */
  var throttle = function throttle(fn, wait) {
    wait = wait || 0;
    var prev = 0;
    return function () {
      var context = this;
      var args = arguments;
      var now = +new Date();

      if (now - prev > wait) {
        prev = now;
        return fn.apply(context, args);
      }
    };
  };

  /**
   * string 返回type
   * @param {Any} target 
   */
  var getType = function getType(target) {
    return /^\[object\s(.*)\]$/.exec(Object.prototype.toString.call(target))[1].toLowerCase();
  };

  /**
   * Boolean 返回跟type的比较
   * @param {Any} target 
   * @param {String} type 
   */

  var isTypeof = function isTypeof(target, type) {
    return (typeof type === 'string' ? type.toLocaleLowerCase() : type) === getType(target);
  };

  /**
   * 判空
   * @param {Any} target
   */
  var isEmpty = function isEmpty(target) {
    return [Object, Array].indexOf((target || {}).constructor) > -1 && !Object.keys(target || {}).length;
  };

  /**
   * 判断是否在范围内
   * @param {Number} left 左边界
   * @param {Number} right 右边界
   * @param {Number} target 目标值
   */
  var inRange = function inRange(left, right, target) {
    if ([left, right, target].some(function (item) {
      return typeof item !== 'number';
    })) {
      return false;
    }

    if (left > right) {
      var _ref = [right, left];
      left = _ref[0];
      right = _ref[1];
    }

    return target >= left && target <= right;
  };

  /**
   * 取中间值
   * @param {Number} left 左边界值
   * @param {Number} right 右边界值
   */
  var midNumber = function midNumber(left, right) {
    if (typeof left !== 'number' || typeof right !== 'number') return NaN;

    if (left > right) {
      var _ref = [right, left];
      left = _ref[0];
      right = _ref[1];
    }

    return (right - left) / 2 + left;
  };

  /**
   * 浅拷贝
   * @param {Object} target 
   */
  var clone = function clone(target) {
    if (target == null || _typeof(target) !== 'object') return target;
    return _objectSpread2({}, target);
  };

  var forEach = function forEach(target, cb) {
    if (!Array.isArray(target) && typeof cb !== 'function') return;
    var len = target.length;
    var i = 0;

    while (i < len) {
      cb(target[i], i++, target);
    }
  };
  /**
   * 深拷贝 (不拷贝：函数、正则对象、日期对象...)
   * @param {Object} target 
   */


  var cloneDeep = function cloneDeep(target) {
    // 非对象类型
    if (target === null || _typeof(target) !== 'object' || typeof target === 'function') {
      return target;
    } // 普通对象与数组克隆


    var isArray = Array.isArray(target);
    var list = isArray ? undefined : Object.keys(target);
    var result = isArray ? [] : {};
    forEach(list || target, function (val, key) {
      if (!isArray) {
        key = val;
      }

      result[key] = cloneDeep(target[key]);
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

  /**
   * 检测是否为数值
   * @param {Any} target 
   */
  var isNumber = function isNumber(target) {
    return /^\d+(\.\d)?$/.test(target);
  };

  var isTel = function isTel(val) {
    return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(val);
  };

  var isMob = function isMob(val) {
    return /^((\+86)|(86)\s)?(1)\d{10}$/.test(val) || /^0[0-9-]{10,13}$/.test(val);
  };
  /**
   * 校验电话号码
   * @param {String} target 
   */


  var isPhone = function isPhone(target) {
    return isTel(target) || isMob(target);
  };

  /**
   * 判断是否图片
   * @param {String} target 
   */
  var isImage = function isImage(target) {
    return /\.(jpeg|jpg|png|bmp|gif｜wbmp|svg)$/i.test(target);
  };

  /**
   * 转换url
   * @param {String} url 
   */
  var parseUrl = function parseUrl(url) {
    if (typeof url !== 'string') return null;

    if (document) {
      var a = document.createElement('a');
      a.href = url;
      var result = ['protocol', 'host', 'origin', 'port', 'pathname', 'search', 'hash'].reduce(function (ret, k) {
        ret[k] = a[k];
        return ret;
      }, {});
      result.query = result.search ? handleSearch(result.search.slice(1)) : {};
      return result;
    } else {
      return {};
    }
  };
  /**
   * 转换query对象
   * @param {String} target 
   */

  var parseQuery = function parseQuery(target) {
    var searchLoc = findSign(target, '?');

    if (searchLoc == -1) {
      return {};
    }

    var hashLoc = findSign(target, '#');
    var search = ~hashLoc && hashLoc > searchLoc ? target.slice(searchLoc + 1, hashLoc) : target.slice(searchLoc + 1);
    return search ? handleSearch(search) : {};
  };
  /**
   * 获取url的参数
   * @param {String} url 
   * @param {String} key 
   * From https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
   */

  var getUrlParam = function getUrlParam(url, key) {
    if (!url || !key) return null;
    key.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + key + '(=([^&#]*)|&|#|$)');
    var results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  };
  /**
   * 设置url的参数
   * @param {String} url 
   * @param {String} key 
   * @param {String} val 
   * From https://stackoverflow.com/questions/5999118/add-or-update-query-string-parameter
   */

  var setUrlParam = function setUrlParam(url, key, val) {
    if (!url || !key) return url;
    var re = new RegExp('([?|&])' + key + '=.*?(&|#|$)', 'i');

    if (url.match(re)) {
      return url.replace(re, '$1' + key + '=' + encodeURIComponent(val) + '$2');
    } else {
      var hash = '';

      if (url.indexOf('#') !== -1) {
        hash = url.replace(/.*#/, '#');
        url.replace(/#.*/, '');
      }

      var separator = url.indexOf('?') !== -1 ? '&' : '?';
      return url + separator + key + '=' + encodeURIComponent(val) + hash;
    }
  };

  function findSign(target, sign) {
    return (target || '').indexOf(sign);
  }

  function handleSearch(target) {
    return target.split('&').reduce(function (ret, item) {
      var keyValue = ~item.indexOf('=') ? item.split('=') : [];

      if (keyValue[0]) {
        ret[keyValue[0]] = keyValue[1];
      }

      return ret;
    }, {});
  }

  var ure = {
    ua: ua,
    isMobile: isMobile,
    isPC: isPC,
    isIE: isIE,
    isEdge: isEdge,
    isIOS: isIOS,
    isIPad: isIPad,
    isAndroid: isAndroid,
    isWeixin: isWeixin,
    isQQ: isQQ,
    isDingTalk: isDingTalk,
    download: download,
    debounce: debounce,
    throttle: throttle,
    getType: getType,
    isTypeof: isTypeof,
    isEmpty: isEmpty,
    inRange: inRange,
    midNumber: midNumber,
    clone: clone,
    cloneDeep: cloneDeep,
    getValue: getValue,
    omit: omit,
    random: random,
    randomColor: randomColor,
    randomKey: randomKey,
    isEmail: isEmail,
    isNumber: isNumber,
    isPhone: isPhone,
    isImage: isImage,
    parseUrl: parseUrl,
    parseQuery: parseQuery,
    getUrlParam: getUrlParam,
    setUrlParam: setUrlParam
  };

  return ure;

})));
