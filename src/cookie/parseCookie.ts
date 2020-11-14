export interface ICookie {
  [index: string]: string
}

/**
 * parse cookie string into object
 * @param {String} str
 * https://www.30secondsofcode.org/js/s/parse-cookie/
 */
const parseCookie = (str = ''): ICookie => {
  return str
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim())
      return acc
    }, {} as ICookie)
}

export default parseCookie
