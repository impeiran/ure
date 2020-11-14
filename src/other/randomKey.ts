const KEY_SIGN_LIST = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'

/**
 * 随机生成key值
 * @param {Number} len 长度
 */
const randomKey = (len = 16) => {
  let result = ''
  for (let i = 0; i < len; i++) {
    result += KEY_SIGN_LIST.charAt(
      Math.floor(
        Math.random() * KEY_SIGN_LIST.length
      )
    )
  }

  return result
}

export default randomKey
