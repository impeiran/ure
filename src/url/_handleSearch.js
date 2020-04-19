export default function handleSearch (target) {
  return target.split('&').reduce((ret, item) => {
    const keyValue = ~item.indexOf('=') ? item.split('=') : []
    if (keyValue[0]) {
      ret[keyValue[0]] = keyValue[1]
    }
    return ret
  }, {})
}
