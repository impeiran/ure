import ua from './ua'

const isQQ = (): boolean => {
  return /qq\//.test(ua('i'))
}

export default isQQ
