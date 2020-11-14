import ua from './ua'

const isWeixin = (): boolean => {
  return /MicroMessenger/i.test(ua())
}

export default isWeixin
