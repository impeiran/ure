/**
 * ua信息
 */
const ua = (sign) => {
  return navigator
    ? sign ? navigator.userAgent.toLocaleLowerCase() : navigator.userAgent
    : null
}

export const isMobile = () => {
  return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(ua('i'))
}

export const isPC = () => {
  return !isMobile()
}

export const isIE = () => {
  return !!window.ActiveXObject || 'ActiveXObject' in window
}

export const isEdge = () => {
  return /Edge/.test(ua())
}

export const isIOS = () => {
  return /ios|iphone|ipad|ipod/.test(ua('i'))
}

export const isIPad = () => {
  return /ipad/.test(ua('i'))
}

export const isAndroid = () => {
  return /android/.test(ua('i'))
}

export const isWeixin = () => {
  return /MicroMessenger/i.test(ua())
}

export const isQQ = () => {
  return /qq\//.test(ua('i'))
}

export const isDingTalk = () => {
  return /dingtalk/.test(ua('i'))
}

export default ua
