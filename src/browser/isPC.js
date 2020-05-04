import isMobile from './isMobile'

const isPC = () => {
  return !isMobile()
}

export default isPC
