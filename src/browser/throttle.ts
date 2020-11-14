/**
 * 节流
 * @param {Function} fn 被节流的函数
 * @param {Number} wait 时间间隔
 */
const throttle = (fn: Function, wait: number | undefined = 0): Function => {
  let prev = 0

  return function (this: unknown, ...args: any[]) {
    const now = +new Date()

    if (now - prev > wait) {
      prev = now
      return fn.apply(this, args)
    }
  }
}

export default throttle
