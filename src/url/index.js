/**
 * 转换url
 * @param {String} url 
 */
export const parseUrl = (url) => {
  if (typeof url !== 'string') return {};

  return {
    protocol: getProtocol(url)
  }
};

/**
 * 转换query对象
 * @param {String} target 
 */
export const parseQuery = (target) => {
  const searchLoc = findSign(target, '?');
  if (searchLoc == -1) {
    return {};
  }

  const hashLoc = findSign(target, '#');

  let search = ~hashLoc && hashLoc > searchLoc
    ? target.slice(searchLoc + 1, hashLoc)
    : target.slice(searchLoc + 1);

  if (search) {
    return search.split('&').reduce((ret, item) => {
      const keyValue = ~item.indexOf('=') ? item.split('=') : [];
      if (keyValue[0]) {
        ret[keyValue[0]] = keyValue[1];
      }
      return ret;
    }, {});
  } else {
    return {};
  }
};

/**
 * 获取url的参数
 * @param {String} url 
 * @param {String} key 
 * From https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
 */
export const getUrlParam = (url, key) => {
  if (!url || !key) return null;

  key.replace(/[\[\]]/g, '\\$&');
  let regex = new RegExp('[?&]' + key + '(=([^&#]*)|&|#|$)');
  let results = regex.exec(url);
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
export const setUrlParam = (url, key, val) => {
  if (!url || !key) return url;

  let re = new RegExp('([?|&])' + key + '=.*?(&|#|$)', 'i');

  if (url.match(re)) {
    return url.replace(re, '$1' + key + '=' + encodeURIComponent(val) + '$2');
  } else {
    let hash = '';
    if (url.indexOf('#') !== -1) {
      hash = url.replace(/.*#/, '#');
      url.replace(/#.*/, '');
    }
    let separator = url.indexOf('?') !== -1 ? '&' : '?';
    return url + separator + key + '=' + encodeURIComponent(val) + hash;
  }
};

function findSign (target, sign) {
  return (target || '').indexOf(sign);
}

function getProtocol (target) {
  let result = (new RegExp('^(.*)://')).exec(target);

  return result ? result[1] : null;
}