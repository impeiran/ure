
import ua from './ua'

const isDingTalk = () => {
  return /dingtalk/.test(ua('i'))
}

export default isDingTalk
