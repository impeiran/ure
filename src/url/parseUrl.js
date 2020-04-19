import handleSearch from './_handleSearch'

/**
 * 转换url
 * @param {String} url
 */
const parseUrl = (url) => {
  if (typeof url !== 'string') return null

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
}

export default parseUrl
