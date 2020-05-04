/**
 * ua信息
 */
const ua = (sign) => {
  return navigator
    ? sign ? navigator.userAgent.toLocaleLowerCase() : navigator.userAgent
    : null
}

export default ua
