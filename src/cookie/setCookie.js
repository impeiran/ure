/**
 * set cookie
 * @param {String} name
 * @param {String} value
 * @param {Object} option
 */
const setCookie = (name, value, option = {}) => {
  let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`

  const { expires, path, domain, secure } = option
  if (expires) {
    const expireText = expires instanceof Date ? expires.toGMTString() : expires
    cookieText += `; expires=${expireText}`
  }

  if (path) {
    cookieText += `; path=${path}`
  }

  if (domain) {
    cookieText += `; domain=${domain}`
  }

  if (secure) {
    cookieText += '; secure'
  }

  document.cookie = cookieText
}

export default setCookie
