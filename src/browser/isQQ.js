import ua from './ua'

const isQQ = () => {
  return /qq\//.test(ua('i'))
}

export default isQQ
