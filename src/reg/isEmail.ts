const REG_EMAIL = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/

/**
 * 校验邮箱地址
 * @param {String} target
 */
const isEmail = (target: string): boolean => {
  return REG_EMAIL.test(target)
}

export default isEmail
