import isTypeof from '../nature/isTypeof'
import { Query } from './types'

/**
 * stringify query object into string
 * @param {Object} obj
 */
const stringifyQuery = (obj: Query) => {
  if (!isTypeof(obj, 'object')) return ''

  return Object.keys(obj).reduce((ret, k) => {
    const val = obj[k]
    if (val !== null && val !== undefined) {
      ret += '&' + k + '=' + val
    }
    return ret
  }, '').slice(1)
}

export default stringifyQuery
