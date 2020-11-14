
import ua from './ua'

const isDingTalk = (): boolean => {
  return /dingtalk/.test(ua('i'))
}

export default isDingTalk
