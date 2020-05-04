import ua from './ua'

const isMobile = () => {
  return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(ua('i'))
}

export default isMobile
