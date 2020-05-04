import ua from './ua'

const isIOS = () => {
  return /ios|iphone|ipad|ipod/.test(ua('i'))
}
export default isIOS
