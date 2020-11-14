import ua from './ua'

const isIpad = (): boolean => {
  return /ipad/.test(ua('i'))
}

export default isIpad
