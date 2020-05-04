import ua from './ua'

const isIpad = () => {
  return /ipad/.test(ua('i'))
}

export default isIpad
