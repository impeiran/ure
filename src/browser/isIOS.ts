import ua from './ua'

const isIOS = (): boolean => {
  return /ios|iphone|ipad|ipod/.test(ua('i'))
}
export default isIOS
