/**
 * get cookie
 * @param {String} name
 */
const getCookie = (name) => {
  if (!name) return ''

  const cookie = document.cookie

  const cookieName = encodeURIComponent(name) + '='
  const cookieStart = cookie.indexOf(cookieName)

  let result

  if (cookieStart > -1) {
    let cookieEnd = cookie.indexOf(';', cookieStart)

    if (cookieEnd === -1) {
      cookieEnd = cookie.length
    }

    result = decodeURIComponent(cookie.substring(cookieStart + cookieName.length, cookieEnd))
  }

  return result
}

export default getCookie
