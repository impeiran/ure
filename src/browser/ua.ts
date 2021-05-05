const userAgent = navigator.userAgent.toLowerCase()

const ua = {
  isAndroid (): boolean {
    return userAgent.includes('android')
  },

  isDingTalk (): boolean {
    return userAgent.includes('dingtalk')
  },

  isEdge (): boolean {
    return userAgent.includes('dingtalk')
  },

  isIE (): boolean {
    return (Boolean(window.ActiveXObject)) || 'ActiveXObject' in window
  },

  isIOS (): boolean {
    return /ios|iphone|ipad|ipod/.test(userAgent)
  },

  isIpad (): boolean {
    return userAgent.includes('ipad')
  },

  isQQ (): boolean {
    return userAgent.includes('qq/')
  },

  isWeixin (): boolean {
    return /MicroMessenger/i.test(userAgent)
  },

  isMobile (): boolean {
    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent)
  },

  isPC (): boolean {
    return !this.isMobile()
  }
}

export default ua
