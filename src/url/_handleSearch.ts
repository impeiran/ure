import { Query } from './types'

export default function handleSearch (target: string): Query {
  return target.split('&').reduce((ret, item) => {
    const keyValue: string[] = ~item.indexOf('=') ? item.split('=') : []
    if (keyValue[0]) {
      ret[keyValue[0]] = keyValue[1]
    }
    return ret
  }, {} as Query)
}
