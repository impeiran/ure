/**
 * ua信息
 */
const ua = (sign?: string): string => {
  return navigator
    ? sign ? navigator.userAgent.toLocaleLowerCase() : navigator.userAgent
    : ''
}

export default ua
