export interface ICookieOption {
  expires?: Date | String | Number;
  path?: String;
  domain?: String;
  secure?: Boolean | String;
}

/**
 * set cookie
 * @param {String} name
 * @param {String} value
 * @param {Object} option
 */
const setCookie = (name: string, value: string, option: ICookieOption = {}): void => {
  let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`

  const { expires, path, domain, secure } = option
  if (expires) {
    const expireText = expires instanceof Date ? expires.toUTCString() : expires
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
