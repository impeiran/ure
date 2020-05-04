import handleSearch from './_handleSearch'

/**
 * 转换query对象
 * @param {String} target
 */
const parseQuery = (target) => {
  if (typeof target !== 'string') return {}

  const searchLoc = target.indexOf('?')
  if (searchLoc === -1) {
    return {}
  }

  const hashLoc = target.indexOf('#')

  const search = ~hashLoc && hashLoc > searchLoc
    ? target.slice(searchLoc + 1, hashLoc)
    : target.slice(searchLoc + 1)

  return handleSearch(search)
}

export default parseQuery
