import isMobile from './isMobile'

const isPC = (): boolean => {
  return !isMobile()
}

export default isPC
