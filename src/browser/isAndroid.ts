import ua from './ua'

const isAndroid = (): boolean => {
  return /android/.test(ua('i'))
}

export default isAndroid
