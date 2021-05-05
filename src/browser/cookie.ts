type CookieOption = {
  expires?: Date | string | number
  path?: string
  domain?: string
  secure?: boolean | string
}

const Cookie = {
  parse (): Record<string, string> {
    const { cookie } = document
    return cookie
      .split(';')
      .map((item) => item.split('='))
      .reduce<Record<string, string>>((result, item) => {
      const [key = '', value = ''] = item
      result[decodeURIComponent(key.trim())] = decodeURIComponent(
        value.trim()
      )
      return result
    }, {})
  },

  /**
   * get cookie value via key
   * @param key
   */
  get (key?: string): string {
    if (key === null || key === undefined) return ''

    const cookieName = `${encodeURIComponent(key)  }=`
    const cookieStart = document.cookie.indexOf(cookieName)

    let result = ''
    if (cookieStart > -1) {
      const cookieEnd = document.cookie.indexOf(';', cookieStart)
      result = decodeURIComponent(
        document.cookie.substring(
          cookieStart + cookieName.length,
          cookieEnd !== -1 ? cookieEnd : document.cookie.length
        )
      )
    }

    return result
  },

  /**
   * set cookie
   * @param  {string} key
   * @param  {string} value
   * @param  {CookieOption} option
   */
  set (key: string, value: string, option: CookieOption): void {
    let cookieString = `${encodeURIComponent(key)}=${encodeURIComponent(
      value
    )}`

    const { expires, path, domain, secure } = option

    if (expires !== null && expires !== undefined) {
      const expireString =
        expires instanceof Date ? expires.toUTCString() : expires
      cookieString += `; expires=${expireString}`
    }
    if (path !== null && path !== undefined) {
      cookieString += `; path=${path}`
    }
    if (domain !== null && domain !== undefined) {
      cookieString += `; domain=${domain}`
    }
    if (secure !== null && secure !== undefined) {
      cookieString += '; secure'
    }

    document.cookie = cookieString
  }
}

export default Cookie
