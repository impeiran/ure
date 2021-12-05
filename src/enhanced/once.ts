/**
 * create the function that wrap the 'fn' which will only be invoked once a time.
 * @param fn 
 * @returns 
 */
export const once = <
  T extends (...args: any[]) => any
>(
  fn: T
): (...args: Parameters<T>) => ReturnType<T> => {
  let triggered = false

  let result: ReturnType<T>

  return function onceFn(...args: Parameters<T>): ReturnType<T> {
    if (triggered) {
      return result
    }

    result = fn(...args)
    triggered = true

    return result
  }
}

export default once
