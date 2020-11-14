/**
 * 
 * @param fn 需要截流的函数
 * @param wait 等待时长 单位ms
 */
const debounce = (fn: Function, wait?: number | undefined): Function => {
  let timer: number | undefined

  return function (this: unknown, ...args: any[]) {
    if (timer) clearTimeout(timer)

    timer = setTimeout(() => {
      return fn.apply(this, args)
    }, wait)
  }
}

export default debounce
