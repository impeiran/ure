import ua from './ua'

const isAndroid = () => {
  return /android/.test(ua('i'))
}

export default isAndroid
