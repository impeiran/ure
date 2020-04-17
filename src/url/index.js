/**
 * 转换url
 * @param {String} url
 */
export const parseUrl = (url) => {
  if (typeof url !== 'string') return null

  if (document) {
    const a = document.createElement('a')
    a.href = url

    const result = [
      'protocol',
      'host',
      'origin',
      'port',
      'pathname',
      'search',
      'hash'
    ].reduce((ret, k) => {
      ret[k] = a[k]
      return ret
    }, {})

    result.query = result.search ? handleSearch(result.search.slice(1)) : {}

    result.hash = result.hash ? result.hash.slice(1) : ''

    return result
  } else {
    return {}
  }
}

/**
 * 转换query对象
 * @param {String} target
 */
export const parseQuery = (target) => {
  const searchLoc = findSign(target, '?')
  if (searchLoc === -1) {
    return {}
  }

  const hashLoc = findSign(target, '#')

  const search = ~hashLoc && hashLoc > searchLoc
    ? target.slice(searchLoc + 1, hashLoc)
    : target.slice(searchLoc + 1)

  return handleSearch(search)
}

/**
 * 获取url的参数
 * @param {String} url
 * @param {String} key
 * From https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
 */
export const getUrlParam = (url, key) => {
  if (!url || !key) return null

  // eslint-disable-next-line no-useless-escape
  key = key.replace(/[\[\]]/g, '\\$&')
  const regex = new RegExp('[?&]' + key + '(=([^&#]*)|&|#|$)')
  const results = regex.exec(url)
  if (!results) return null
  if (!results[2]) return ''

  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

/**
 * 设置url的参数
 * @param {String} url
 * @param {String} key
 * @param {String} val
 * From https://stackoverflow.com/questions/5999118/add-or-update-query-string-parameter
 */
export const setUrlParam = (url, key, val) => {
  if (!url || !key) return url

  const re = new RegExp('([?|&])' + key + '=.*?(&|#|$)', 'i')

  if (url.match(re)) {
    return url.replace(re, '$1' + key + '=' + encodeURIComponent(val) + '$2')
  } else {
    let hash = ''
    if (url.indexOf('#') !== -1) {
      hash = url.replace(/.*#/, '#')
      url = url.replace(/#.*/, '')
    }
    const separator = url.indexOf('?') !== -1 ? '&' : '?'
    return url + separator + key + '=' + encodeURIComponent(val) + hash
  }
}

function findSign (target, sign) {
  return (target || '').indexOf(sign)
}

function handleSearch (target) {
  return target.split('&').reduce((ret, item) => {
    const keyValue = ~item.indexOf('=') ? item.split('=') : []
    if (keyValue[0]) {
      ret[keyValue[0]] = keyValue[1]
    }
    return ret
  }, {})
}
