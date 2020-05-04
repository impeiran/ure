import ua from './ua'

const isWeixin = () => {
  return /MicroMessenger/i.test(ua())
}

export default isWeixin
