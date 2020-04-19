/**
 * 设置url的参数
 * @param {String} url
 * @param {String} key
 * @param {String} val
 * From https://stackoverflow.com/questions/5999118/add-or-update-query-string-parameter
 */
const setUrlParam = (url, key, val) => {
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

export default setUrlParam
